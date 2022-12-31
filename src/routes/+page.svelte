<script context="module" lang="ts">
    import TechStack from '$components/TechStack.svelte'
    import Picture from '$components/Picture.svelte'
    import CTALink from '$components/CTALink.svelte'
    import PostListing from '$components/PostListing.svelte'
    import Link from '$components/Link.svelte'
    import type { PageData } from './$types'
</script>

<script lang="ts">
    export let data: PageData
    $: ({ featuredPosts } = data)
</script>

<Picture
    src="/images/samuel.jpg"
    alt="Samuel"
    sources={[{ srcset: '/images/samuel.webp', type: 'image/webp' }]}
    class="rounded-full shadow-2xl mx-auto w-32 h-32 sm:w-40 sm:h-40 my-8"
    width={160}
    height={160}
/>

<section class="grid text-center justify-center">
    <h1
        class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
    >
        Hey! I'm Samuel.
    </h1>
    <h2
        class="text-xl sm:text-3xl lg:text-4xl leading-6 font-black tracking-tight mb-12"
    >
        <div class="bg-mantis transform -skew-y-1 p-2 shadow-2xl">
            <span class="whitespace-nowrap">Sustainability Entrepreneur</span>
            &
            <span class="whitespace-nowrap">Fullstack Developer</span>
        </div>
    </h2>
</section>

<section class="grid grid-cols-1 max-w-prose mx-auto">
    <p class="text-xl sm:text-2xl mb-4">
        Since 2015, I've worked with teams of designers and developers to
        maximize our positive impact in the world.
    </p>
    <p class="text-xl sm:text-2xl mb-4">
        I'm passionate about how open source communities can support a
        sustainable future, where both humanity and the living planet thrive.
        Currently working on <Link href="https://idg.tools" compact
            >IDG.tools</Link
        > and
        <Link href="https://relate-app.com/en" compact>Relate</Link>.
    </p>
</section>

<div class="grid pt-2">
    <h2
        class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-center"
    >
        Let's co-create a sustainable future!
    </h2>

    <CTALink
        href="#contact"
        on:click={() => {
            document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
        }}>Contact me</CTALink
    >
</div>

<hr class="my-16 max-w-sm mx-auto border-ming" />

<TechStack />

<hr class="my-16 max-w-sm mx-auto border-ming" />

<section class="max-w-prose mx-auto">
    <h2
        class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-center mb-6"
    >
        How I like to contribute
    </h2>

    <p class="text-xl sm:text-2xl mb-8">
        Working with early stage startups and limited resources has taught me to
        focus on the work with the highest impact.
    </p>

    <p class="text-xl sm:text-2xl mb-8">
        I also want experiences and solutions we create to truly bring value to
        people and society. Technology is exciting, but never the end goal. This
        desire to deliver all the way helps me contribute with more than just
        code to help the team succeed.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <ul
            class="font-light tracking-wide flex flex-col items-center space-y-2 bg-white p-4 w-80 sm:w-[282px] shadow-lg rounded-sm"
        >
            <li>Product strategy</li>
            <li>Attention to detail</li>
            <li>Mentorship & team growth</li>
            <li>Community building</li>
            <li>Design systems</li>
        </ul>
        <ul
            class="font-light tracking-wide flex flex-col items-center space-y-2 bg-white p-4 w-80 sm:w-[282px] shadow-lg rounded-sm"
        >
            <li>UI/UX design</li>
            <li>Humane tech & ethical design</li>
            <li>Quick learning</li>
            <li>Modern web build tools</li>
            <li>Improved development practices</li>
        </ul>
    </div>
</section>

<hr class="my-16 max-w-sm mx-auto border-ming" />

<section class="grid grid-cols-1 max-w-screen-md mx-auto">
    <h2
        class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-center mb-6"
    >
        Featured blog post{featuredPosts.length > 1 ? 's' : ''}
    </h2>

    <section class="grid grid-cols-1 max-w-screen-md mx-auto gap-6">
        {#each featuredPosts as post}
            <PostListing {post} />
        {/each}
    </section>

    <div class="flex justify-center pt-6">
        <Link href="/blog">See more</Link>
    </div>
</section>

<!-- TODO: Contact info. Potentially add a contact form to connect securely -->
