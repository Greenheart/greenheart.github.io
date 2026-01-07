---
title: Live Reloading Database Schemas with Drizzle and SQLite
publishedAt: 2025-12-03
tags: ['TypeScript', 'Drizzle ORM', 'SQLite']
featured: true
---

During development, automatically reloading modified TypeScript code and restarting the app gives a significant productivity boost. This is very common for all kinds of frontend and backend projects.

But what if you could live reload and automatically migrate your local development database whenever you change your [Drizzle](https://orm.drizzle.team/) schema?

This seemed a bit crazy at first, but it turns out this works quite well! Let's explore how.

---

## Prototyping database schemas with Drizzle

When using Drizzle, you define your database schema in a `schema.ts` file. For local development, it's usually a good idea to use the command `drizzle-kit push` to automatically migrate the database and smoothly iterate on your schema.

The `push`-based workflow usually requires you either:

1. Stop the dev server, run `drizzle-kit push` and then start the dev server again.
2. Or keep two terminals open to manually run the `drizzle-kit push` in one of them and then saving a file to trigger a dev server restart in the other.

If you make several rapid schema changes, both these alternatives require manual interactions (and your attention) even for tiny updates. For larger schema changes you will almost always need to manually review the `push`-based migration. Alternatively, you could just reset the DB and insert new seeding data that has been updated to the latest schema.

## Solution: live reloading database schemas

I've so far only confirmed this solution works with SQLite, but it could likely also work for other databases supported by Drizzle, like Postgres.

Also note that the following Drizzle versions were used, and there might be changes for this to work with the upcoming Drizzle `v1`:

```json
{
    "drizzle-orm": "0.44.7",
    "drizzle-kit": "0.31.7"
}
```

The core idea is pretty simple. Only in development, run a small script when the backend starts, performing the following actions:

1. Run `drizzle-kit push` in a non-interactive child-process (without `stdio`) and capture the output. The non-interactive child process ensures that the CLI prompt (if any is shown) will be aborted, preventing accidental data loss.
2. Parse the output and determine if there any prompt about data loss.
3. If there were schema changes that cause data loss, abort the backend startup process with an error, and make it clear manual actions are required.
4. However, most small schema changes just work, and in those cases Drizzle automatically applies the schema changes and lets the backend start as normal.

This is the most important part of the script, implementing what was described above:

```ts
// dev-db-check.ts
import { execSync } from 'node:child_process'
import { styleText } from 'node:util'

if (!DEV) {
    throw new Error('This module should only be imported during development')
}

// `drizzle-kit push` validates the DB schema changes
// and attempts to migrate your database.
// Schema changes without data loss are applied immediately.
// This effectively works like a "live reload" for your
// DB schema, which is very useful during development.
const dbCheckResult = execSync('npx drizzle-kit push').toString()

// However, abort with an error if data loss could happen
if (/warning|data loss|revert|abort/gi.test(dbCheckResult)) {
    const msg = `\nSchema changes with potential data loss detected. Please resolve manually:\n`

    console.error(styleText(red, msg))
    console.error(dbCheckResult + '\n')
    process.exit(1)
}
```

I chose to put this code in a separate module, to clearly distinguish it from the main code path during production.

You can explore the [full code for live reloading database schemas](https://github.com/paccao/allerthsbageri.se/pull/141/files#diff-6eb830c2d4ca2deb49aa3df603d79a9f6341f4be13c21d39959b79384748c873). The same [PR](https://github.com/paccao/allerthsbageri.se/pull/141) also implements some related DX enhancements explained below:

## Improving the local development experience

Now when the core feature of live reloading the DB schema is in place, we can add several related quality of life improvements too:

1. Automatically validate the DB schema to ensure the database is in a good state before starting the app. This runs every time you (re)start the dev server, letting you focus on other problems than keeping your development database in sync with the latest Drizzle schema.
2. Simplify first-time local setup by automating the creation of a development DB and adding seeding data if it does not exist.
3. Automatically re-create the development DB and add seeding data if you have just removed or replaced the development database. Common when working when working with SQLite and renaming/removing databases used to test various states.

## Closing thoughts

I would only use this for local development where I host the DB locally and not with so called "serverless" database services.

Again, I've only tested this with SQLite, so if you try this method with another DB - [let me know](https://fosstodon.org/@Greenheart) how it works!

And if you have important data in your development database - please make sure you have backups before using scripts like this to automatically modify your database.

With that said, I hope this will make it easier to experiment and iterate on your database schema just like it did for me!
