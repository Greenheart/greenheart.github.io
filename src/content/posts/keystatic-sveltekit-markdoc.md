---
title: Integrate Keystatic CMS with SvelteKit to render Markdoc Content with Interactive Svelte Components
date: 2025-10-01
tags: ['SvelteKit', 'TypeScript', 'Keystatic CMS']
featured: true
---

Have you ever worked on a [SvelteKit](https://svelte.dev/docs/kit/introduction) project where you want to use the Git-based [Keystatic CMS](https://keystatic.com)? Up until now that has usually meant installing a separate web framework like Astro/Remix/Next.js just to run the CMS, which might not always be desirable.

After some experimentation, I found that it's actually possible to use Keystatic directly in your SvelteKit project! This makes it possible to use the same dev server and, if you want, the same production server.

You can even combine Keystatic with [markdoc-svelte](github.com/CollierCZ/markdoc-svelte) to make your SvelteKit project render [Markdoc](https://markdoc.dev/) content with custom formatting, interactive Svelte components and use other powerful features of Markdoc.

In combination, this gives you a solid foundation to build apps and websites where you want to make content editing accessible to your entire team via Keystatic CMS, and especially their `github` mode.

**Quick start: Check out the [keystatic-sveltekit](https://github.com/Greenheart/keystatic-sveltekit) repository if you want the simplest way to add Keystatic to your SvelteKit project.**

If you also want to understand _when_ to use this setup as well as _why_ and _how_ I designed it the way I did - then you've come to the right place! :)

---

## Part 1: Why use a Git-based CMS like Keystatic?

Most mobile apps, web apps and websites don't need a complex backend or even a database. Instead, you can use a Git-based CMS like Keystatic to store content together with your code. This simplifies your tech stack, reduces hosting costs and can help you increase the security of your system.

Keystatic CMS allows non-technical people to use a graphical, web-based interface to make content changes that automatically syncs with your Git repository in the background.

### When to use a Git-based CMS like Keystatic:

- You can easily represent content as Markdown/Markdoc/JSON/YAML files, images, and other static assets and doesn't need a backend server or database just to manage content.
- You don't need a backend server or database at all.
- You want to keep your project as simple and with as few moving pieces as possible.
- You don't want to maintain Docker-containers for a traditional CMS or for its database, and you don't want to maintain any database backups, apart from your regular Git repository.
- You want to be able to Git checkout any historical commit and automatically get the correct content, in the right format, matching the code implementation at the time. This allows you to quickly achieve what you want, instead of first having to find and restore an old DB backup - if it even still exists years later!
- You want to keep hosting costs as low as possible for your web app, mobile app or website, for example by building static content and caching it via a CDN.

### When to look for other CMS solutions:

- You need a CMS that integrates with your existing backend system to read and modify custom data types.
- You need complex content types that can't be represented as static files. You can achieve surprisingly much with [relationships](https://keystatic.com/docs/fields/relationship) in Keystatic, especially if you add content build scripts that run together with your regular project build to verify content and transform it into the format used by your app or website ([example](https://github.com/Greenheart/idg.tools/blob/a70dc2cf41507e1e2036a181632ee13298bb8923/content/scripts/build-content.ts)). However, for more complex relationships and cascading updates for related entries, you might want to use another solution.
- You are implementing e-commerce features, or similar cases where you need a server and database to keep track of the orders and products to for example prevent multiple people from ordering the final item.
- If you are working on an open source project and want to allow anyone (not just trusted collaborators) to propose content changes that automatically gets submitted as pull requests to your project. In this case you need Open Authoring, currently an [open feature request](https://github.com/Thinkmill/keystatic/issues/1433) for Keystatic but supported in other Git-based CMSes like [Decap CMS](https://decapcms.org/docs/open-authoring/).

---

## Part 2: Integrating Keystatic CMS with SvelteKit projects

I've worked on many projects where a Git-based CMS made development and content-collaboration straightforward and enjoyable. For example, the multilingual mobile app [Aware (29k)](github.com/29ki/29k), the web app [IDG.tools](https://github.com/Greenheart/idg.tools) and several websites. After using other Git-based CMSes, I started using Keystatic CMS in 2023 and found it to be of both reliable and full of useful features.

Up until now, using Keystatic together with SvelteKit usually meant creating a separate Astro/Remix/Next.js project just to serve the CMS. In some cases, it might be desirable to run Keystatic entirely separately from the main SvelteKit app or website since this isolates dependencies and could improve security and performance. In smaller projects though, it's more convenient and usually preferable to only have one Vite dev server, and only deploy one SvelteKit app to production.

After thinking about this in several projects, I implemented a solution that evolved into [keystatic-sveltekit](https://github.com/Greenheart/keystatic-sveltekit).

Thanks to the fact that the Keystatic API is framework-agnostic, this was a lot simpler than expected. And it works surprisingly well for both development and production usage.

### Keystatic consists of two parts:

1. **Backend:** Keystatic exports the `makeGenericAPIRouteHandler` function that can be called with a [keystatic.config.ts](https://keystatic.com/docs/configuration) to create a generic API endpoint that handles routing internally. The Keystatic API endpoint accepts a standard [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object and returns `{ body, headers, status, statusText }` which you can be returned as a standard [Response](https://developer.mozilla.org/en-US/docs/Web/API/Request). This is framework-agnostic as long as you serve it at the route `/api/keystatic/[...rest]`.

2. **Frontend:** A React-based SPA that only renders on the client side. Similar to the API, the frontend expects to be served from `/keystatic/[...rest]`.

### Integrating Keystatic with SvelteKit

There are multiple ways to run Keystatic together with SvelteKit with the same Vite server. What follows are some of the alternatives I've considered, along with the pros and cons of each. I found this exploration quite useful to deepen my understanding of how Keystatic, SvelteKit and Vite work, and hopefully you will too.

### Goals and requirements

Our main goal is to make both the API endpoint and the frontend routes available inside the SvelteKit app. Starting the `vite` dev server should make it possible to use Keystatic locally, reloading the CMS as soon as the `keystatic.config.ts` changes. Similarly, running `vite build && vite preview` should make a production build and serve it.

The first version will only explicitly support Node.js, but it should be possible to add support for other SvelteKit adapters and runtimes.

When using Keystatic, it could be fine to use the `local` storage and only enable the CMS in the local development environment. Though most projects probably want to use the `github` storage to allow simpler content collaboration. The integration with SvelteKit should be flexible and support all modes and options of Keystatic.

### Serving the Keystatic API within a SvelteKit project

This was straightforward and went smoothly thanks to the `makeGenericAPIRouteHandler`.

- Serving the Keystatic API from a [fallback](https://svelte.dev/docs/kit/routing#server-Fallback-method-handler) handler. If we add this to the `/api/keystatic/[...rest]` route, it will respond to all incoming requests, no matter which HTTP verb was used.
    - Works well, but requires modifications to the project routes.

- **Chosen solution:** Serving the Keystatic API from the SvelteKit [handle](https://svelte.dev/docs/kit/hooks#Server-hooks-handle) hook. Achieves the same result with minimal code changes, making it much simpler to add Keystatic.

### Serving the Keystatic frontend within a SvelteKit project

Integrating custom frontend routes in a SvelteKit app is a bit more tricky, but totally doable.

- Serving the Keystatic SPA within the SvelteKit app with [svelte-preprocess-react](https://github.com/bfanger/svelte-preprocess-react), and by adding the route `/keystatic/[...rest]`. Works quite well with hot module reloading for dev, which is important when you change the `keystatic.config.ts`.
    - The major problem with this approach is that the styles likely will interfere with each other and cause problems, since technically both apps share the same styles. This can be worked around by importing styles to specific routes only, or more drastically, by adding SvelteKit [layout groups](https://svelte.dev/docs/kit/advanced-routing#Advanced-layouts-%28group%29) to completely isolate the CMS routes from the rest of your project. However, this requires significant code changes and makes it much harder to integrate with a SvelteKit project.
    - Another drawback with this approach is that it adds an extra dependency, and renders React inside the SvelteKit app which is unnecessary overhead since we don't use any SvelteKit or Svelte code at all on the CMS routes.
    - Since the Keystatic SPA doesn't support SSR or prerendering, we can't use the full potential of `svelte-preprocess-react` either.

- Prebuilding the Keystatic SPA separately and serving as static assets. The basic idea is good since it clearly separates React from SvelteKit, removing some unnecessary JS and making the styles separated so you don't need to make drastic routing changes like adding SvelteKit layout groups. It works quite well if you always start the CMS by visiting the `/keystatic` path. However, opening a specific route like `/keystatic/collection/posts` won't work, unless you add custom routing logic in for example the `handle` hook.

- **Chosen solution:** Prebuilding the Keystatic SPA and serving it from the `handle` hook together with the API routes. This makes the internal implementation of the integration more complex, but makes it as simple as possible to add Keystatic to SvelteKit projects. It also offers the best developer experience since the expected features like hot reloading during development work out of the box.

Both the API and the frontend are best served from the `handle` hook. However, one critical piece we haven't explored yet is how to build the Keystatic React SPA so it can be served by the `handle` hook.

### Building the CMS in the background

A few alternatives were considered:

- Building the CMS when the SvelteKit app starts and the first request is sent to the `handle` hook. This could work for basic cases, but since we want to integrate more deeply with the Vite dev server and adapt to the project configuration, we get many benefits from building in the Vite plugin. Also, the CMS build step would be better to run as early as possible.

- **Chosen solution:** Building the CMS in the background with a Vite plugin. This gives a lot of flexibility and deep integration with the underlying server as well as the Vite build process. This makes it simpler to implement features like hot reloading during development.
    - The Vite plugin build went through several iterations: Initially it all happened in the same process to get a working prototype. This blocked the SvelteKit app from starting.
    - Then, the Vite plugin started child processes to build in the background. This unblocked the main thread, but added significant overhead for starting and stopping each process.
    - Most recently, builds run as a one-off worker for production, and a reusable worker pool during development. We can use Node.js workers to get efficient builds without the overhead of starting and stopping child processes. One good reason for using workers instead of child processes is because the CMS build is CPU-bound (compilation and bundling) rather than I/O bound (file system). By reusing the worker multiple times (worker pool) during development, we get further performance improvements.
    - Another thing worth noting is that the CMS is bundled with all dependencies including both the Keystatic CMS and the `keystatic.config.ts` of the current project. Since we use `esbuild`, performance is no problem. It would be nice to only rebuild `keystatic.config.ts` for hot reloads during development, and only build the CMS bundle when restarting the `vite` process, since that's the only time when the CMS bundle might need to be updated. However, bundling everything together is much simpler, and has good enough performance for now.

### Finding the right trade-offs

As of October 2025, the best way to add Keystatic to a SvelteKit project is via the `handle` hook in `hooks.server.ts` to serve both the API and the frontend. This should be combined with a Vite plugin added in `vite.config.ts` to build (and rebuild) the CMS.

With the `handle` hook, we get complete control to handle incoming requests and returning responses. However, since routes implemented in the `handle` hook are not part of the regular SvelteKit router, they need to be manually added to the build output, and will only be available in production if we use an adapter like `@sveltejs/adapter-node`.

Looking to the future, this might get even simpler if we could register routes programmatically from a SvelteKit plugin/integration, similar to how this is implemented in the Keystatic integration for Astro: [@keystatic/astro](https://github.com/Thinkmill/keystatic/blob/63c767bbb8b9bbc96c30535862bcccfbbc4ea346/packages/astro/src/index.ts). A related feature request would be to make it possible to control which routes should be prerendered when programmatically defining routes.

There is an open [issue](https://github.com/sveltejs/kit/issues/8896), so let's see what the future brings.

For now, registering the API route via the `handle` hook is a good workaround.

---

### Overview of how `keystatic-sveltekit` works:

Now that we have explored why the integration was implemented the way it is, here's an overview of how to add Keystatic to your SvelteKit project. The simplest way is to make a copy of the [keystatic-sveltekit](https://github.com/Greenheart/keystatic-sveltekit) repository to use as a foundation for your project.

Here are the most important parts of the project that make it work together:

1. The `lib/keystatic/` directory implements the integration.

2. `keystatic.config.ts` defines your content collections and how they show up in the CMS editor.

3. The Vite plugin (re)builds the CMS frontend:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { keystatic } from '$lib/keystatic'

export default defineConfig({
    plugins: [keystatic(), sveltekit()],
})
```

4. The `handleKeystatic` hook serves the CMS frontend and API:

```ts
// hooks.server.ts
import { handleKeystatic } from '$lib/keystatic'

export const handle = handleKeystatic()
```

Alternatively, if you have multiple hooks:

```ts
// hooks.server.ts
import { sequence } from '@sveltejs/kit/hooks'
import { handleKeystatic } from '$lib/keystatic'

export const handle = sequence(...yourOtherHandleHooks, handleKeystatic())
```

5. And finally, to support prerendering, you can add customise the `svelte.config.ts`:

```ts
// svelte.config.ts
import { type Config } from '@sveltejs/kit'
import { isKeystaticRoute } from './src/lib/keystatic/index.ts'

const config = {
    kit: {
        prerender: {
            handleHttpError({ path, message }) {
                // Ignore prerendering errors for Keystatic CMS
                // since it's a SPA that only supports CSR.
                if (isKeystaticRoute(path)) return

                // Fail the build in other cases.
                throw new Error(message)
            },
        },
    },
} satisfies Config

export default config
```

## Part 3: How to render Markdoc content with interactive Svelte components

You can find a working implementation in the [keystatic-sveltekit](https://github.com/Greenheart/keystatic-sveltekit) repository, but I won't cover Markdoc rendering further in this post since it's already long. Let me know if you would like to explore it in a future post though.

---

## Future improvements: official Keystatic integration, easier project setup

Thanks to the generic API handler, it's possible to integrate the Keystatic API with any basically any backend framework for Node.js/Deno/Bun. Now that we know this works for SvelteKit, Astro, and Remix, it should also be possible to integrate Keystatic for other Vite-based frameworks too. Rendering the React-based Keystatic frontend is the tricky part (for non-React-based frameworks), but definitely possible.

I considered if it would be worth creating a Vite plugin like `vite-plugin-keystatic` to support any Vite-based meta-framework like SvelteKit, Astro, Remix and more. However, since the routing is deeply integrated and highly framework-specific, it's probably a better idea to maintain separate, minimal adapters, like `@keystatic/astro` and soon, perhaps even a `@keystatic/sveltekit` adapter that simplifies and standardizes the solutions we explored in this blog post.

Speaking of which - do you think it would be worth creating an adapter like `@keystatic/sveltekit` along with a starter project, and contributing it to the Keystatic project? That would take some initial work, and maintenance in the future, but would make it possible to use the Keystatic CLI to rapidly scaffold a Keystatic project. And if we have the `@keystatic/sveltekit` adapter, it would be possible to create a `keystatic` addon for the [Svelte CLI](https://github.com/sveltejs/cli), to simplify adding Keystatic in both new and existing projects.

## Closing thoughts

If you take one thing away from all this, let it be the fact that it's really important to create good public APIs for your library. Just look at what happened thanks to `@keystatic/core` making the right building blocks available (`makeGenericAPIRouteHandler`) to allow customization beyond what was originally intended.

This way of integrating Keystatic with SvelteKit has already simplified several of my projects. It could certainly be refined though, so you're welcome to join the discussion and help make it better. One interesting area would be to explore how it works with other SvelteKit adapters, and submit issues and pull requests to make the integration easier to use.

**Check out the [keystatic-sveltekit](https://github.com/Greenheart/keystatic-sveltekit) repository to learn how to add Keystatic to your project.**

I'm looking forward to hear what you build using SvelteKit and Keystatic!

Happy hacking!
