---
title: Automatic Internal and External Links in SvelteKit
date: 2021-07-31
tags: ['TypeScript', 'Svelte', 'SvelteKit', 'Code Snippet']
---

**Update 2023-03-23:** This method is heavily outdated. See <https://kit.svelte.dev/docs/link-options> for modern options.

Markdown content on blogs often require you to support both internal and external links at the same time. Most of the times, you need separate behaviors for the different kinds, like for example prefetching internal links to improve page load times on your blog, while simultaneously opening external links in separate tabs without prefetching but instead with other attributes like `rel="noopener noreferrer"`.

Fortunately, Svelte and SvelteKit provides a good solution to this problem.

First of all, we need to test if a given URL is external. This can be solved with a helper function like this:

```ts
/**
 * Test if an URL is external.
 *
 * @param href {string} The URL to test.
 * @returns True if the link is external, and false otherwise.
 */
function isExternalURL(href: string): boolean {
    const a = document.createElement('a')
    a.href = href
    return window.location.host !== a.host
}
```

Then you can use `isExternalURL()` to create a Svelte `<Link />` component that automatically handles the right attributes for both internal and external links. And with SvelteKit's `sveltekit:prefetch` directive, your users will get a really smooth experience browsing your website, without compromising on how you handle external links.

## Finished SvelteKit `<Link />` Component

```svelte
<!-- Link.svelte -->

<script lang="ts" module>
    import { onMount } from 'svelte'

    /**
     * Test if an URL is external.
     *
     * @param href {string} The URL to test.
     * @returns True if the link is external, and false otherwise.
     */
    function isExternalURL(href: string): boolean {
        const a = document.createElement('a')
        a.href = href
        return window.location.host !== a.host
    }
</script>

<script lang="ts">
    export let href = ''
    let additionalProps: object
    const classes = [$$props.class ?? '', 'default'].join(' ').trim()

    onMount(() => {
        if (isExternalURL(href)) {
            additionalProps = {
                rel: 'noopener noreferrer',
                target: '_blank',
            }
        } else {
            additionalProps = {
                'sveltekit:prefetch': true,
            }
        }
    })
</script>

<a {href} class={classes} {...$$props} {...additionalProps}>
    <slot />
</a>
```

## Some Thoughts About This Implementation

1. It uses two separate script contexts: One with `module` in order to only import external dependencies and create functions once during the runtime, and the other one for the component context which handles component instances and re-renders.
2. `$$props.class` is an unfortunate workaround to support external classes passed down via the regular class attribute, since `class` is a reserved keyword in JavaScript. Let me know if you have a better solution for this!
