---
title: Detect Vite Plugin Restarts to Avoid Rerunning Expensive Tasks
publishedAt: 2025-09-18
tags: ['Node.js', 'TypeScript', 'Vite']
featured: true
---

When developing [Vite](https://vite.dev) plugins, you sometimes need to detect when the Vite server restarts. Both the `vite` dev server and `vite build` can run your plugin multiple times within the same Node.js process. In my case, I wanted to only execute an expensive task once, and avoid duplicate work.

It's usually convenient to let Vite restart the dev server whenever the configuration or other imported modules change, and rerunning your Vite plugins. However, this also means that expensive setup work could happen multiple times, wasting both time and resources. This is especially important if your plugin does expensive computations which could slow down the development experience, and if your production build involves a prerendering step, like [SvelteKit](https://svelte.dev/docs/kit/introduction).

To make a Vite plugin only execute some task on the first run, we can take advantage of the fact that Vite (I'm using version 7.1.5 at the time of writing) runs the dev server as well as the production build within the same Node.js process. This means we can define properties on `globalThis` to communicate between different executions of the Vite plugin.

While I generally think global state like `globalThis` should be avoided as much as possible, this seems like a good time to use it. Here is a minimal example of how you can use this technique in your Vite plugin:

```ts
// Add type safety
declare global {
    /** Ensure the Vite plugin only runs some expensive task once */
    var HAS_RUN_BEFORE: boolean | undefined
}

function yourVitePlugin() {
    // Logs `undefined` the first time and then `true`.
    // Use `process.uptime()` to easily identify whenever Vite reruns your plugin.
    console.log(globalThis.HAS_RUN_BEFORE, process.uptime())

    if (!globalThis.HAS_RUN_BEFORE) {
        runExpensiveTask()
        globalThis.HAS_RUN_BEFORE = true
    }

    console.log(globalThis.HAS_RUN_BEFORE, process.uptime()) // Always logs `true`.

    // (...)
}
```

## A real-world example

I'm building a Vite plugin specifically to integrate with the SvelteKit production build and prerendering, where the Vite server first creates the production build, which is then prerendered by SvelteKit in a separate restart.

In the following example, `globalThis.HAS_CMS_BUILD_STARTED` is only assigned once, and can then be read by all future instances of the Vite plugin to prevent the build from running more than once. Without the `globalThis` workaround, this would have meant the expensive build logic would be run two times, or even more for development server restarts.

```ts
import type { ConfigEnv } from 'vite'

declare global {
    var HAS_CMS_BUILD_STARTED: boolean | undefined
}

type BuildMode = 'prio' | boolean

/**
 * Ensure the initial CMS build only happens once.
 *
 * Since the `vite` command restarts the server multiple times both during
 * development and production builds within the same parent process, we use this
 * function to avoid duplicate builds in the same `vite` process. This also
 * makes the initial build faster.
 */
function getBuildMode(env: ConfigEnv): BuildMode {
    if (globalThis.HAS_CMS_BUILD_STARTED) {
        return false
    } else {
        // We can use `globalThis` to reliably determine if there has been a previous build.
        // This is possible since `globalThis` is shared in the Vite parent process that restarts the build,
        // and because both the Vite config loading and the SvelteKit dev/build process are run by the same parent process,
        globalThis.HAS_CMS_BUILD_STARTED = true
    }

    if (env.mode !== 'development') {
        if (env.command === 'build') {
            // For production, make sure the CMS build finishes before other parts of the app build.
            return 'prio'
        } else {
            // Don't build when serving in production (e.g. preview). In these cases the CMS should already be built.
            return false
        }
    }

    // Build the first time during development
    return true
}
```
