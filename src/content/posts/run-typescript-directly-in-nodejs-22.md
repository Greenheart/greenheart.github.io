---
title: Run TypeScript Directly with Node.js 22
publishedAt: 2024-12-29
tags: ['TypeScript', 'Node.js']
featured: true
---

**NOTE: Since Node.js 22.18.0 or 23.6.0, "type stripping" is enabled by default.** See the latest Node.js docs for [more info](https://nodejs.org/en/learn/typescript/run-natively).

---

**It's about to get much easier to run TypeScript directly with Node.js.** As of Node.js `22.7.0`, there are two experimental command line flags to strip TypeScript types and convert TypeScript-only syntax into JavaScript that can be executed by Node.js.

This even works with import aliases if you make some config and code changes, as demonstrated later. But let's start with the basics first:

## How to run TypeScript directly with Node.js:

```sh
node --experimental-strip-types main.ts
```

If your code (or any dependencies) use TypeScript-only features like `enum` and `namespace`, you need to use the following command:

```sh
node \
--experimental-strip-types \
--experimental-transform-types main.ts
```

If you start many `node`-processes and want to filter out the `ExperimentalWarning`s from the log output, you can pass the flag `--no-warnings=ExperimentalWarning` to get a much cleaner output:

```sh
node \
--no-warnings=ExperimentalWarning \
--experimental-strip-types \
--experimental-transform-types main.ts
```

Reading the [official guide](https://nodejs.org/en/learn/typescript/run-natively), I'm especially excited that this brings us a step closer to full TypeScript-support without any external tools or command line flags.

> Future versions of Node.js will include support for TypeScript without the need for a command line flag.

## How to run TypeScript code with import aliases

One limitation as of Node.js is that import aliases defined via `tsconfig.json` and the `paths` option ([docs](https://www.typescriptlang.org/docs/handbook/modules/reference.html#paths)) don't work.

However, there is a workaround available by adding Node.js [subpath patterns](https://nodejs.org/api/packages.html#subpath-patterns), defined in the `imports` field of `package.json` to achieve the same effect. Let's look at an example:

### 1. Update configuration

If you have a `tsconfig.json` defining an `@app` import alias like this:

```json
// tsconfig.json
{
    "compilerOptions": {
        "paths": {
            "@app/*": ["./src/*"]
        }
    }
}
```

Then you can add the following import alias in `package.json` to make it work almost the same way (more on that in a moment):

```json
// package.json
{
    "imports": {
        "#app/*": "./src/*"
    }
}
```

**NOTE:** Import aliases within your own module/code base need to start with the `#` character. If you know a way to make this work with a custom character like `@` or `$`, please [let me know](https://fosstodon.org/@Greenheart)!

### 2. Update code import statements

To make your code run again, you need to update the imports in your code with a global find all `@app` and replace with `#app`.

For example, all your imports like this:

```ts
import { something } from '@app/lib/something'
```

Need to be updated into:

```ts
import { something } from '#app/lib/something.ts'
```

Also note that Node.js requires explicit file extensions when using import aliases. Perhaps it's possible to use without `.ts` extensions, but at the same time, I think it's good to be explicit - especially since most of the imports are added automatically by the code editor.

## Run TypeScript in production

Since this is an experimental feature, it's currently recommended to transpile TypeScript using `tsc` when building for production. To easily run TypeScript without a separate transpilation step, `tsx` is still a great choice - [learn more here](https://github.com/privatenumber/tsx/).

However, for development and quick scripts, this is a big boost to productivity!
