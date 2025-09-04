import"./DsnmJJEf.js";import"./D6tUPSQF.js";import{f as _,a as d,s as e,c as l,A as f,B as s,r as h}from"./CVtmfPP4.js";import{C as t}from"./x5pRBw2h.js";import{L as w}from"./00AeCcnI.js";const U="using-sqlite-triggers-to-boost-performance-of-select-count",S={title:"Using SQLite Triggers to Boost the Performance of SELECT COUNT(*)",date:"2025-08-27",tags:["SQLite","Caching","Performance"],featured:!0},{title:A,date:x,tags:D,featured:q}=S,Q=[{level:2,title:"The website requirements",id:"the-website-requirements"},{level:2,title:"Why SQLite indexes are not suitable for boolean columns",id:"why-sqlite-indexes-are-not-suitable-for-boolean-columns"},{level:2,title:"Exploring various caching options",id:"exploring-various-caching-options"},{level:2,title:"A brief intro to SQLite triggers",id:"a-brief-intro-to-sqlite-triggers"},{level:2,title:"The solution: Using SQLite triggers to cache stats",id:"the-solution-using-sqlite-triggers-to-cache-stats"},{level:2,title:"Impact and performance improvements",id:"impact-and-performance-improvements"},{level:3,title:"Before",id:"before"},{level:3,title:"After",id:"after"},{level:2,title:"Conclusion: When to use SQLite triggers",id:"conclusion-when-to-use-sqlite-triggers"},{level:2,title:"Bonus: When to optimise performance",id:"bonus-when-to-optimise-performance"}];var N=_("<article><p>I recently developed a website where the landing page shows two important numbers, both derived from the <code>users</code> table. Initially, these numbers were retrieved by executing <code>SELECT COUNT(*)</code> for every page load. This worked well in the beginning but got slower as the number of users grew and the website traffic increased. However, by using SQLite triggers and a dedicated <code>stats</code> table, I made the website load much faster, and using fewer resources. This blog post describes my process and how to implement similar solutions in your own projects.</p><h2>The website requirements</h2><p>During the sign up, users choose if they want to become members and whether or not they want to be visible on the website. The count of members and non-members are then visible on the landing page, only including the users who want to be visible.</p><p>Here are the two relevant boolean columns in the <code>users</code> table, represented as the integers <code>1</code> or <code>0</code> in SQLite:</p><!><p>To show the number of members and non-members on the landing page, I first used the following <code>SELECT COUNT(*)</code> query, only including those who want to be visible:</p><!><p>This worked well initially, but it gradually slowed down as the <code>users</code> table grew and the website got more traffic. The reason why <code>SELECT COUNT(*)</code> is slower for larger tables is because SQlite needs to scan the table and check every row, which takes longer time for larger tables with many rows. <code>SELECT COUNT(*)</code> is essentially an <code>O(n)</code> operation in terms of time complexity, and since we did two queries for every visit to the landing page, the total time complexity is more like <code>2 * O(n)</code>.</p><h2>Why SQLite indexes are not suitable for boolean columns</h2><p>To improve query performance, I first thought about using a DB index and started experimenting. In some cases, this made the <code>SELECT COUNT(*)</code> queries faster. However, there were also other cases that actually resulted in worse performance than just letting SQLite do full table scans for each <code>SELECT COUNT(*)</code> query.</p><p>The reason for this is because indexes are better suited for columns that have many different values, such as strings. Since we have two boolean columns which only can have the values <code>1</code> or <code>0</code>, we don't get reliable benefits from using an index.</p><p>This made me take a step back to think more about the problem I wanted to solve: To avoid counting members and non-members on every page load.</p><h2>Exploring various caching options</h2><p>What if we could somehow cache the latest counts and retrieve them when they were needed? This could be solved with many different kinds of caching. On one hand, in-memory caching could be an alternative, but would not be reliable since the website backend runs in many different instances which means we could end up showing different results depending on which instance that served incoming requests. On the other hand, a dedicated cache implemented with for example <!> would introduce another component to the backend system only to cache two numbers, which would not be worth the increased maintenance required. I like to keep the tech stack as simple as possible and neither of these solutions were appropriate for this specific problem.</p><p>Since we have plenty of capacity in the SQLite database for both more read- and write operations, what if we could cache the latest counts directly in SQLite?</p><p>I looked for inspiration and realised this would be a good opportunity to explore SQLite triggers, which seemed useful to solve my problem. Using SQLite triggers, we could re-evaluate the <code>SELECT COUNT(*)</code> only when there are meaningful changes in the DB, and save the counts in a separate <code>stats</code> table that can easily be looked up when needed.</p><h2>A brief intro to SQLite triggers</h2><p><!> can be used to execute SQL statements when certain events happen in the database. These events can be for example <code>BEFORE INSERT</code> to validate data before saving it, or <code>AFTER UPDATE</code> to react when some table is updated. The basic syntax looks like this:</p><!><p>SQLite triggers are very flexible and powerful. Notably, they can also use references to the <code>NEW</code> and <code>OLD</code> rows to know which rows and columns that changed, and how.</p><p>However, triggers should be tested carefully, since their execution can block other DB operations. Changing triggers requires deploying a new DB migration, where the faulty triggers are dropped, and then re-created with updated SQL statements that should be executed. It's doable, but could cause consequences in a production environment. Therefore it's important to test properly before deploying triggers.</p><h2>The solution: Using SQLite triggers to cache stats</h2><p>With this knowledge, I started experimenting by executing SQL statements in a shell. First creating the <code>stats</code> table and inserting the initial state based on the current <code>users</code> table. Then adding triggers that updated the <code>stats</code> whenever the <code>users</code> table had meaningful changes. And finally, verifying that the triggers behaved as expected and correctly updated the <code>stats</code> when I inserted, updated and deleted users.</p><p>Once I had working triggers, I combined the SQL statements into the following DB migration:</p><!><p>After applying the migration above, the landing page query could be updated to read the latest <code>stats</code> instead of re-evaluating the member count for every incoming request:</p><!><p>Note that I always use <code>id = 1</code> to read and update stats. This could potentially break in the future since the <code>id</code> is theoretically not guaranteed to always be <code>1</code>.</p><p>I still went with this solution though, because the first row is created in the migration above, no other code except the triggers are updating the <code>stats</code> table, and no additional rows are inserted either in the database or in the application code. Selecting an explicit <code>id</code> offered better performance compared to using <code>LIMIT 1</code>.</p><p>While it might not be ideal to save state like this that could easily get out of date, potential future problems could be fixed since I intentionally kept the SQLite triggers and the <code>stats</code> table as simple as possible.</p><h2>Impact and performance improvements</h2><p>The result of these changes turned out way better than expected. The read operations now take a constant time <code>O(1)</code> even after the database more than doubled in size. Best of all, this problem could be solved without introducing another dependency only needed to cache two numbers. Simple and effective solutions are key to making technology easier to understand, maintain and improve.</p><p>Let's explore how and why the performance improved:</p><h3>Before</h3><!><p>Even though it didn't take more than <code>2 * 22 ms = 44 ms</code> to run the two <code>SELECT COUNT(*)</code> queries for every page load, the query time was growing significantly and could get out of hand as we got more users.</p><p>Another issue with this query was that it caused two full table scans, reading all rows from the users table twice and using unnecessary resources. In some cloud-hosted databases where you pay per usage, excess row reads could be a limiting and potentially costly problem.</p><h3>After</h3><!><p>The new query only reads one row and its execution time stays constant at <code>27 ms</code>, even as the database more than doubled in size. This might not seem like much of an improvement in the beginning, but compared to the previous solution, the difference will only get bigger as the database grows. It didn't take many days before it was way faster compared to running two <code>SELECT COUNT(*)</code> operations for landing page visit. With a much more predictable query time, this approach will continue to perform over time.</p><p>I'm curious to understand why it needs <code>27 ms</code> for what seems like a very simple read operation. Please let me know if you know a way to make this even faster.</p><h2>Conclusion: When to use SQLite triggers</h2><p>Like any solution, this one has two trade-offs worth mentioning:</p><ol><li>Every <code>INSERT</code>, <code>UPDATE</code> and/or <code>DELETE</code> will take slightly longer to complete because it also executes the corresponding SQLite trigger. In our case, this is acceptable since this part of the project needs to optimise for fast reads on the landing page. However, if your system needs to optimise for fast writes, this might be a problem.</li><li>We need to store an additional <code>stats</code> table in the DB, which might get outdated if something happens with the triggers or the tables used to calculate the <code>stats</code>. However, the table is only one row and is only modified by triggers and never from application code. Thus SQLite triggers are a good tool as long as you test them properly.</li></ol><p>In our case, these are very good trade-offs to make the website load significantly faster - and stay fast over time.</p><p>Even though SQLite triggers worked well in this case, I would carefully consider other options before implementing SQLite triggers in other projects. For simple use cases, it might be worth it, but for more complex business logic for data validations and transformations, consider implementing them as part of your regular backend code instead.</p><p>In cases where more complex validations and transformations are needed, keeping one backend module responsible for a part of the database and giving that module exclusive responsibilities to write to and read from that part of the database, you can achieve the same result as with SQLite triggers, while also making integration testing much easier. SQLite triggers are possible to test, but harder to debug if you make errors, and thus it seems reasonable to mostly use them for simpler cases.</p><h2>Bonus: When to optimise performance</h2><p>First of all, this kind of work should usually happen after the main functionality is implemented, deployed and confirmed to be valuable with users and stakeholders. Only then could it be a good time to start optimising a system by identifying potential bottlenecks and deciding when and how you need to deal with them. Even if you don't implement performance optimisations immediately, making a note about potential issues will make them easier to identify and fix when (or rather, if) the need arises in the future.</p><p>Just don't optimise too early. Instead, focus on the core value first and improve with each iteration.</p></article>");function W(E){var n=N(),c=e(l(n),4);t(c,{"data-language":"sql",code:`CREATE TABLE users (
    "is_member" integer NOT NULL   -- boolean: 1 or 0
    "is_visible" integer NOT NULL  -- boolean: 1 or 0
)
`});var u=e(c,2);t(u,{"data-language":"sql",code:`SELECT
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
`});var o=e(u,7),y=e(l(o));w(y,{href:"https://valkey.io/",children:(a,L)=>{s();var r=f("Valkey");d(a,r)},$$slots:{default:!0}}),s(),h(o);var i=e(o,4),v=l(i);w(v,{href:"https://www.sqlite.org/lang_createtrigger.html",children:(a,L)=>{s();var r=f("SQLite triggers");d(a,r)},$$slots:{default:!0}}),s(5),h(i);var m=e(i);t(m,{"data-language":"sql",code:`CREATE TRIGGER trigger_name
[BEFORE | AFTER] [INSERT | UPDATE | DELETE]
ON table_name
BEGIN
   -- SQL statements to run here
END;
`});var p=e(m,6);t(p,{"data-language":"sql",code:`CREATE TABLE \`stats\` (
	\`id\` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	\`members\` integer NOT NULL,
	\`non_members\` integer NOT NULL
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
`});var g=e(p,2);t(g,{"data-language":"sql",code:`SELECT "members", "non_members" FROM "stats" WHERE "stats"."id" = 1
`});var b=e(g,8);t(b,{"data-language":"sql",code:`SELECT
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
`});var T=e(b,4);t(T,{"data-language":"sql",code:`SELECT "members", "non_members" FROM "stats" WHERE "stats"."id" = 1
`}),s(11),h(n),d(E,n)}export{W as default,S as frontmatter,Q as headings,U as slug};
