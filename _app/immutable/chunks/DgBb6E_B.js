import"./DsnmJJEf.js";import"./D6tUPSQF.js";import{f as m,a as s,A as f,s as n,c as r,B as o,r as a}from"./CVtmfPP4.js";import{L as v}from"./00AeCcnI.js";import{C as l}from"./x5pRBw2h.js";const T="automatic-internal-external-links-in-sveltekit",g={title:"Automatic Internal and External Links in SvelteKit",date:"2021-07-31",tags:["TypeScript","Svelte","SvelteKit","Code Snippet"]},{title:$,date:U,tags:_}=g,R=[{level:2,title:"Finished SvelteKit ",id:"finished-sveltekit"},{level:2,title:"Some Thoughts About This Implementation",id:"some-thoughts-about-this-implementation"}];var k=m("<article><p><strong>Update 2023-03-23:</strong> This method is heavily outdated. See <!> for modern options.</p><p>Markdown content on blogs often require you to support both internal and external links at the same time. Most of the times, you need separate behaviors for the different kinds, like for example prefetching internal links to improve page load times on your blog, while simultaneously opening external links in separate tabs without prefetching but instead with other attributes like <code>rel=&quot;noopener noreferrer&quot;</code>.</p><p>Fortunately, Svelte and SvelteKit provides a good solution to this problem.</p><p>First of all, we need to test if a given URL is external. This can be solved with a helper function like this:</p><!><p>Then you can use <code>isExternalURL()</code> to create a Svelte <code>&lt;Link /&gt;</code> component that automatically handles the right attributes for both internal and external links. And with SvelteKit's <code>sveltekit:prefetch</code> directive, your users will get a really smooth experience browsing your website, without compromising on how you handle external links.</p><h2>Finished SvelteKit <code>&lt;Link /&gt;</code> Component</h2><!><h2>Some Thoughts About This Implementation</h2><ol><li>It uses two separate script contexts: One with <code>module</code> in order to only import external dependencies and create functions once during the runtime, and the other one for the component context which handles component instances and re-renders.</li><li><code>$$props.class</code> is an unfortunate workaround to support external classes passed down via the regular class attribute, since <code>class</code> is a reserved keyword in JavaScript. Let me know if you have a better solution for this!</li></ol></article>");function E(d){var e=k(),t=r(e),h=n(r(t),2);v(h,{href:"https://kit.svelte.dev/docs/link-options",children:(p,x)=>{o();var u=f("https://kit.svelte.dev/docs/link-options");s(p,u)},$$slots:{default:!0}}),o(),a(t);var i=n(t,4);l(i,{"data-language":"ts",code:`/**
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
`});var c=n(i,3);l(c,{"data-language":"svelte",code:`<!-- Link.svelte -->

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
<\/script>

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
<\/script>

<a {href} class={classes} {...$$props} {...additionalProps}>
    <slot />
</a>
`}),o(2),a(e),s(d,e)}export{E as default,g as frontmatter,R as headings,T as slug};
