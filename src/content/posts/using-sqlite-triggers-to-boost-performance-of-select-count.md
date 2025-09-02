---
title: Using SQLite Triggers to Boost the Performance of SELECT COUNT(*)
date: 2025-08-27
tags: ['SQLite', 'Caching', 'Performance']
featured: true
---

I recently developed a website where the landing page shows two important numbers, both derived from the `users` table. Initially, these numbers were retrieved by executing `SELECT COUNT(*)` for every page load. This worked well in the beginning but got slower as the number of users grew and the website traffic increased. However, by using SQLite triggers and a dedicated `stats` table, I made the website load much faster, and using fewer resources. This blog post describes my process and how to implement similar solutions in your own projects.

## The website requirements

During the sign up, users choose if they want to become members and whether or not they want to be visible on the website. The count of members and non-members are then visible on the landing page, only including the users who want to be visible.

Here are the two relevant boolean columns in the `users` table, represented as the integers `1` or `0` in SQLite:

```sql
CREATE TABLE users (
    "is_member" integer NOT NULL   -- boolean: 1 or 0
    "is_visible" integer NOT NULL  -- boolean: 1 or 0
)
```

To show the number of members and non-members on the landing page, I first used the following `SELECT COUNT(*)` query, only including those who want to be visible:

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

This worked well initially, but it gradually slowed down as the `users` table grew and the website got more traffic. The reason why `SELECT COUNT(*)` is slower for larger tables is because SQlite needs to scan the table and check every row, which takes longer time for larger tables with many rows. `SELECT COUNT(*)` is essentially an `O(n)` operation in terms of time complexity, and since we did two queries for every visit to the landing page, the total time complexity is more like `2 * O(n)`.

## Why SQLite indexes are not suitable for boolean columns

To improve query performance, I first thought about using a DB index and started experimenting. In some cases, this made the `SELECT COUNT(*)` queries faster. However, there were also other cases that actually resulted in worse performance than just letting SQLite do full table scans for each `SELECT COUNT(*)` query.

The reason for this is because indexes are better suited for columns that have many different values, such as strings. Since we have two boolean columns which only can have the values `1` or `0`, we don't get reliable benefits from using an index.

This made me take a step back to think more about the problem I wanted to solve: To avoid counting members and non-members on every page load.

## Exploring various caching options

What if we could somehow cache the latest counts and retrieve them when they were needed? This could be solved with many different kinds of caching. On one hand, in-memory caching could be an alternative, but would not be reliable since the website backend runs in many different instances which means we could end up showing different results depending on which instance that served incoming requests. On the other hand, a dedicated cache implemented with for example [Valkey](https://valkey.io/) would introduce another component to the backend system only to cache two numbers, which would not be worth the increased maintenance required. I like to keep the tech stack as simple as possible and neither of these solutions were appropriate for this specific problem.

Since we have plenty of capacity in the SQLite database for both more read- and write operations, what if we could cache the latest counts directly in SQLite?

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

However, triggers should be tested carefully, since their execution can block other DB operations. Changing triggers requires deploying a new DB migration, where the faulty triggers are dropped, and then re-created with updated SQL statements that should be executed. It's doable, but could cause consequences in a production environment. Therefore it's important to test properly before deploying triggers.

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

After applying the migration above, the landing page query could be updated to read the latest `stats` instead of re-evaluating the member count for every incoming request:

```sql
SELECT "members", "non_members" FROM "stats" WHERE "stats"."id" = 1
```

Note that I always use `id = 1` to read and update stats. This could potentially break in the future since the `id` is theoretically not guaranteed to always be `1`.

I still went with this solution though, because the first row is created in the migration above, no other code except the triggers are updating the `stats` table, and no additional rows are inserted either in the database or in the application code. Selecting an explicit `id` offered better performance compared to using `LIMIT 1`.

While it might not be ideal to save state like this that could easily get out of date, potential future problems could be fixed since I intentionally kept the SQLite triggers and the `stats` table as simple as possible.

## Impact and performance improvements

The result of these changes turned out way better than expected. The read operations now take a constant time `O(1)` even after the database more than doubled in size. Best of all, this problem could be solved without introducing another dependency only needed to cache two numbers. Simple and effective solutions are key to making technology easier to understand, maintain and improve.

Let's explore how and why the performance improved:

### Before

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

Even though it didn't take more than `2 * 22 ms = 44 ms` to run the two `SELECT COUNT(*)` queries for every page load, the query time was growing significantly and could get out of hand as we got more users.

Another issue with this query was that it caused two full table scans, reading all rows from the users table twice and using unnecessary resources. In some cloud-hosted databases where you pay per usage, excess row reads could be a limiting and potentially costly problem.

### After

```sql
SELECT "members", "non_members" FROM "stats" WHERE "stats"."id" = 1
```

The new query only reads one row and its execution time stays constant at `27 ms`, even as the database more than doubled in size. This might not seem like much of an improvement in the beginning, but compared to the previous solution, the difference will only get bigger as the database grows. It didn't take many days before it was way faster compared to running two `SELECT COUNT(*)` operations for landing page visit. With a much more predictable query time, this approach will continue to perform over time.

I'm curious to understand why it needs `27 ms` for what seems like a very simple read operation. Please let me know if you know a way to make this even faster.

## Conclusion: When to use SQLite triggers

Like any solution, this one has two trade-offs worth mentioning:

1. Every `INSERT`, `UPDATE` and/or `DELETE` will take slightly longer to complete because it also executes the corresponding SQLite trigger. In our case, this is acceptable since this part of the project needs to optimise for fast reads on the landing page. However, if your system needs to optimise for fast writes, this might be a problem.
2. We need to store an additional `stats` table in the DB, which might get outdated if something happens with the triggers or the tables used to calculate the `stats`. However, the table is only one row and is only modified by triggers and never from application code. Thus SQLite triggers are a good tool as long as you test them properly.

In our case, these are very good trade-offs to make the website load significantly faster - and stay fast over time.

Even though SQLite triggers worked well in this case, I would carefully consider other options before implementing SQLite triggers in other projects. For simple use cases, it might be worth it, but for more complex business logic for data validations and transformations, consider implementing them as part of your regular backend code instead.

In cases where more complex validations and transformations are needed, keeping one backend module responsible for a part of the database and giving that module exclusive responsibilities to write to and read from that part of the database, you can achieve the same result as with SQLite triggers, while also making integration testing much easier. SQLite triggers are possible to test, but harder to debug if you make errors, and thus it seems reasonable to mostly use them for simpler cases.

## Bonus: When to optimise performance

First of all, this kind of work should usually happen after the main functionality is implemented, deployed and confirmed to be valuable with users and stakeholders. Only then could it be a good time to start optimising a system by identifying potential bottlenecks and deciding when and how you need to deal with them. Even if you don't implement performance optimisations immediately, making a note about potential issues will make them easier to identify and fix when (or rather, if) the need arises in the future.

Just don't optimise too early. Instead, focus on the core value first and improve with each iteration.
