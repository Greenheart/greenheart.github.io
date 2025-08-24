<script module lang="ts">
    import TechStack from '$components/TechStack.svelte'
    import Picture from '$components/Picture.svelte'
    import PostListing from '$components/PostListing.svelte'
    import Link from '$components/Link.svelte'
</script>

<script lang="ts">
    import EncryptedEmail from '$components/EncryptedEmail.svelte'

    let { data } = $props()
    let { featuredPosts, otherPostsCount } = $derived(data)
</script>

<Picture
    src="/images/samuel.jpg"
    alt="Samuel"
    sources={[{ srcset: '/images/samuel.webp', type: 'image/webp' }]}
    class="mx-auto my-8 h-32 w-32 rounded-full shadow-2xl sm:h-40 sm:w-40"
    width={160}
    height={160}
/>

<section class="grid justify-center text-center">
    <h1
        class="xs:text-5xl mb-8 text-4xl leading-none font-black tracking-tight sm:text-6xl lg:text-7xl"
    >
        Hey! I'm Samuel.
    </h1>
    <h2
        class="mb-12 text-xl leading-6 font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        <div class="bg-mantis -skew-y-1 transform p-2 shadow-2xl">
            <span class="whitespace-nowrap">Sustainability Entrepreneur</span>
            &
            <span class="whitespace-nowrap">Fullstack Developer</span>
        </div>
    </h2>
</section>

<section class="mx-auto grid max-w-prose grid-cols-1 gap-4 text-xl sm:text-2xl">
    <p>
        Since 2015, I've worked with early stage startups and non-profits to
        create a future where both humanity and the living planet thrive
        together. I'm curious about how tech, systems thinking and <Link
            href="https://doughnuteconomics.org/themes/business-enterprise"
            compact>Doughnut design for business</Link
        > can be combined to create a positive impact.
    </p>
    <p>
        With a strong passion for how libre software and co-operatives can help
        create an economy that is regenerative and distributive by design, I'm
        currently a Founding Member & Lead Developer at <Link
            href="https://greenheart.coop"
            compact>Greenheart Co-operative</Link
        >.
    </p>
</section>

<div class="mt-12 grid">
    <h2
        class="xs:text-2xl text-center text-xl leading-none font-black tracking-tight text-balance sm:text-3xl lg:text-4xl"
    >
        Let's co-create a sustainable future!
    </h2>

    <EncryptedEmail class="mt-8" />
</div>

<hr class="border-ming mx-auto my-16 max-w-sm" />

<TechStack />

<hr class="border-ming mx-auto my-16 max-w-sm" />

<section class="mx-auto max-w-prose">
    <h2
        class="xs:text-2xl mb-6 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        How I like to contribute
    </h2>

    <p class="mb-8 text-xl sm:text-2xl">
        I want the digital experiences and solutions we create to truly bring
        value to people and society. Technology is exciting, but never the end
        goal. This desire to take a holistic approach helps me contribute more
        than just code to help the team succeed.
    </p>

    <div
        class="grid grid-cols-1 justify-items-center gap-4 font-normal sm:grid-cols-2"
    >
        <ul
            class="flex w-80 flex-col items-center space-y-2 rounded-xs bg-white p-4 tracking-wide shadow-lg sm:w-[284px]"
        >
            <li>Product Strategy</li>
            <li>Attention to Detail</li>
            <li>Mentorship & Team Growth</li>
            <li>Community Building</li>
            <li>Design Systems</li>
        </ul>
        <ul
            class="flex w-80 flex-col items-center space-y-2 rounded-xs bg-white p-4 tracking-wide shadow-lg sm:w-[284px]"
        >
            <li>UI/UX Design</li>
            <li>Humane Tech & Ethical Design</li>
            <li>Systems Thinking</li>
            <li>Privacy Advocacy</li>
            <li>Improved Development Practices</li>
        </ul>
    </div>
</section>

<hr class="border-ming mx-auto my-16 max-w-sm" />

<section class="mx-auto grid max-w-(--breakpoint-md) grid-cols-1">
    <h2
        class="xs:text-2xl mb-6 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        Featured blog post{featuredPosts.length > 1 ? 's' : ''}
    </h2>

    <section class="mx-auto grid max-w-(--breakpoint-md) grid-cols-1 gap-6">
        {#each featuredPosts as post}
            <PostListing {post} />
        {/each}
    </section>

    <div class="mt-8 flex justify-center">
        <Link href="/blog">Read {otherPostsCount} more posts</Link>
    </div>
</section>
