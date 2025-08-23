---
title: Using SQLite Triggers to Boost the Performance of SELECT COUNT(*)
date: 2025-08-12
tags: ['SQLite', 'Caching', 'Performance']
featured: true
---

I recently developed a website where the landing page shows two important numbers, both derived from the `users` table. Initially, these numbers were retrieved by executing `SELECT COUNT(*)` for every page load. This worked well in the beginning but got slower as the number of users grew and the website traffic increased. However, by using SQLite triggers and a dedicated `stats` table, I made the website load much faster, and using fewer resources. This blog post describes my process and how to implement similar solutions in your own projects.

## The website requirements

Users could sign up and had two choices: first if they wanted to become members, and second, if they wanted to be visible on the website. The count of members and non-members were then visible on the landing page, only inlcluding the users who wanted to be visible.

Here are the two relevant boolean columns in the `users` table, represented as integers in SQLite:

```sql
CREATE TABLE users (
    "is_member" integer NOT NULL   -- boolean: 1 or 0
    "is_visible" integer NOT NULL  -- boolean: 1 or 0
)
```

To show the number of members respectively non-members on the landing page, I first used the following `SELECT COUNT(*)` query, only including those who want to be visible:

```sql
SELECT
(
    SELECT COUNT(*) FROM "users" WHERE (
        "users"."is_member" = 1
        AND "users"."is_visible" = 1
    )
) as "members",
(
    SELECT COUNT(*) FROM "users" WHERE (
        "users"."is_member" = 0
        AND "users"."is_visible" = 1
    )
) as "non_members";
```

This worked well initially, but it gradually slowed down as the `users` table grew and the website got more traffic. The reason why `SELECT COUNT(*)` is slower for larger tables is because SQlite needs to scan the table and check every row, which takes longer time for larger tables with many rows. `SELECT COUNT(*)` is essentially an `O(n)` operation in terms of time complexity, and we did two queries like that for every visit to the landing page, resulting in `2 * O(n)`.

## Why SQLite indexes are not suitable for boolean columns

To improve query performance, I first thought about using a DB index and started experimenting. In some cases, this made the `SELECT COUNT(*)` queries faster. However, there were also other cases that actually resulted in worse performance than just letting SQLite do full table scans for each `SELECT COUNT(*)` query.

The reason for this is because indexes are better suited for columns that have many different values, such as strings. Since we have two boolean columns which only can have the values `1` or `0`, we don't get reliable benefits from using an index.

This made me take a step back to think more about the problem I wanted to solve: To avoid counting members and non-members on every page load.

## Exploring various caching options

What if we could somehow cache the latest counts and retrieve them when they were needed? This could be solved with many different kinds of caching. On one hand, in-memory caching could be an alternative, but would not be reliable since the website backend runs in many different instances which means we could end up showing different results depending on which instance that answered the users. On the other hand, a dedicated cache built on top of for example Redis would introduce another component to the backend system only to cache two numbers, which would not be worth the increased maintenance required. I like to keep the tech stack as simple as possible and neither of these solutions were appropriate for this specific problem.

Since we have plenty of capacity in the SQLite database, what if we could cache the latest counts directly in SQLite?

I looked for inspiration and realised this would be a good opportunity to explore SQLite triggers, which seemed useful to solve my problem. Using SQLite triggers, we could re-evaluate the `SELECT COUNT(*)` only when there are meaningful changes in the DB, and save the counts in a separate `stats` table that can easily be looked up when needed.

## A brief intro to SQLite triggers

[SQLite triggers](https://www.sqlite.org/lang_createtrigger.html) can be used to execute SQL statements when certain events happen in the database. These events can be for example `BEFORE INSERT` to validate data before saving it, or `AFTER UPDATE` to react when some table is updated. The basic syntax looks like this:

```sql
CREATE TRIGGER trigger_name
[BEFORE | AFTER] [INSERT | UPDATE | DELETE]
ON table_name
BEGIN
   -- SQL statements to run here
END;
```

SQLite triggers are very flexible and powerful. Notably, they can also use references to the `NEW` and `OLD` rows to know which rows and columns that changed, and how.

However, triggers should be tested carefully, since their execution can block other DB operations. Changing triggers requires deploying a new DB migration, where the faulty triggers are dropped, and then recreated with updated SQL statements that should be executed. It's doable, but could cause consequences in a production environment. Therefore it's important to test properly before deploying triggers.

## The solution: Using SQLite triggers to cache stats

With this knowledge, I started experimenting by executing SQL statements in a shell. First creating the `stats` table and inserting the initial state based on the current `users` table. Then adding triggers that updated the `stats` whenever the `users` table had meaningful changes. And finally, verifying that the triggers behaved as expected and correctly updated the `stats` when I inserted, updated and deleted users.

Once I had working triggers, I combined the SQL statements into the following DB migration:

```sql
CREATE TABLE `stats` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`members` integer NOT NULL,
	`non_members` integer NOT NULL
);

-- For all stats calculations, we only include users
-- who want to be visible --> where is_visible = 1

-- During the migration when the stats table is created,
-- we need to add the initial stats based on the current DB state.
INSERT INTO "stats" ("members", "non_members")
SELECT
(
    SELECT COUNT(*) FROM "users" WHERE (
        "users"."is_member" = 1
        AND "users"."is_visible" = 1
    )
) as "members",
(
    SELECT COUNT(*) FROM "users" WHERE (
        "users"."is_member" = 0
        AND "users"."is_visible" = 1
    )
) as "non_members";

-- Update stats when a new user was added
CREATE TRIGGER trigger_update_stats_after_insert
AFTER INSERT
ON "users"
BEGIN
    UPDATE "stats"
    SET "members" = (
        SELECT COUNT(*) FROM "users" WHERE (
                "users"."is_member" = 1
                AND "users"."is_visible" = 1
            )
        ),
        "non_members" = (
            SELECT COUNT(*) FROM "users" WHERE (
                "users"."is_member" = 0
                AND "users"."is_visible" = 1
            )
        )
    WHERE id = 1;
END;

-- Update stats when a user was updated
CREATE TRIGGER trigger_update_stats_after_update
AFTER UPDATE
ON "users"
BEGIN
    UPDATE "stats"
    SET "members" = (
        SELECT COUNT(*) FROM "users" WHERE (
                "users"."is_member" = 1
                AND "users"."is_visible" = 1
            )
        ),
        "non_members" = (
            SELECT COUNT(*) FROM "users" WHERE (
                "users"."is_member" = 0
                AND "users"."is_visible" = 1
            )
        )
    WHERE id = 1;
END;

-- Update stats when a user was deleted
CREATE TRIGGER trigger_update_stats_after_delete
AFTER DELETE
ON "users"
BEGIN
    UPDATE "stats"
    SET "members" = (
        SELECT COUNT(*) FROM "users" WHERE (
                "users"."is_member" = 1
                AND "users"."is_visible" = 1
            )
        ),
        "non_members" = (
            SELECT COUNT(*) FROM "users" WHERE (
                "users"."is_member" = 0
                AND "users"."is_visible" = 1
            )
        )
    WHERE id = 1;
END;
```

When the migration was applied, it was then possible to update the query to fetch stats instead of re-evaluating the member count for every incoming request. The new query looked like this:

```sql
SELECT "members", "non_members" FROM "stats" WHERE "stats"."id" = 1
```

Note that I always use `id = 1` to read and update stats. This could potentially break in the future since the `id` is not guaranteed to always be `1`. I still went with this solution though, because no other code except the triggers are updating the `stats` table. Furthermore, the first row is always created as part of the migration above. Selecting an explicit `id` offered better performance compared to using `LIMIT 1`. If there is ever a problem with this, the state of the `stats` table can easily be adjusted to make it work again.

## Impact and performance improvements

The result of these changes turned out way better than expected. The performance improvement was impressive, and best of all, this problem could be solved without introducing another dependency only needed to cache two numbers. Simple and effective solutions are key to sustainable tech.

Here are the key numbers to understand how the performance improved:

### Before

From `22 ms` on average per query, reading all rows in the table. However, since we always ran two queries for every page load of the website, the average total DB load time was `44 ms`. One query itself has `O(n)` time complexity, but since we wanted to know both cases, the actual time complecity was `2 * O(n)`, where `n` is the number of rows.

### After

Down to `0.068 ms` per query, always reading exactly 1 row. This has `O(1)` time complexity, and also has the benefit of drastically reducing the amount of rows read. This is over **320 times faster** than the original query, and will only get faster relative to the other method as the `users` grows.

It's important to note that there are two trade-offs with this approach:

1. Every insert, update and delete will take slightly longer to complete, which is acceptable since this project wants to optimise for fast reads on the landing page.
2. We need to store an additional `stats` table in the DB, but this has almost no impact at all since it's only one row.

To wrap up, these are very good trade-offs to make the website load much faster. Best of all, it will stay fast even as the database grows.

## Considerations for keeping the stats table in sync

As long as the triggers are implemented in a way that is compatible with the rest of the DB schema, this is a good way to solve this particulay problem and make read operations faster.

## How to improve performance of SELECT COUNT(\*) by using SQLite triggers

Using SQLite triggers to re-evaluate stats after every meaningful change.

Be careful to test the triggers properly.

Apart from that, it can be implemented in a few steps

1. add the stats table in a migration
2. create the triggers
3. update application code to query from the cached stats instead of re-evaluating
