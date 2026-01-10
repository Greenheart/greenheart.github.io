<script module lang="ts">
    import TechStack from '$components/TechStack.svelte'
    import Link from '$components/Link.svelte'
</script>

<script lang="ts">
    import EncryptedEmail from '$components/EncryptedEmail.svelte'
    import Tags from '$components/Tags.svelte'
    import samuel from '$assets/images/samuel.png'
    import SocialLinks from '$components/SocialLinks.svelte'
    import { formatDate } from '$lib/utils.js'

    let { data } = $props()
    let {
        featuredPosts,
        otherPostsCount,
        featuredProjects,
        otherProjectsCount,
        earliestProjectStartYear,
    } = $derived(data)
</script>

<enhanced:img
    src={samuel}
    alt="Samuel Plumppu"
    class="mx-auto my-8 size-32 rounded-full object-cover shadow-2xl sm:h-40 sm:w-40"
/>

<section class="grid justify-center text-center">
    <h1
        class="xs:text-5xl mb-8 text-4xl leading-none font-black tracking-tight sm:text-6xl lg:text-7xl"
    >
        Hey! I'm Samuel.
    </h1>
    <h2
        class="mb-12 text-xl leading-6 font-black tracking-tight sm:text-3xl sm:leading-8 lg:text-4xl lg:leading-9"
    >
        <div class="bg-moss -skew-y-1 transform p-2 shadow-2xl">
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
        currently the Founder & Lead Developer at <Link
            href="https://greenheart.coop/en"
            compact>Greenheart Co-operative</Link
        >.
    </p>
</section>

<div class="mt-12 grid gap-8">
    <h2
        class="xs:text-2xl text-center text-xl leading-none font-black tracking-tight text-balance sm:text-3xl lg:text-4xl"
    >
        Let's co-create a sustainable future!
    </h2>

    <EncryptedEmail />

    <SocialLinks />
</div>

<hr class="border-ming mx-auto my-16 max-w-sm" />

<section class="mx-auto grid max-w-(--breakpoint-md)">
    <h2
        class="xs:text-2xl mb-8 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        Featured blog post{featuredPosts.length > 1 ? 's' : ''}
    </h2>

    <ul class="xs:gap-2 mx-auto grid max-w-(--breakpoint-md) gap-4">
        {#each featuredPosts as { publishedAt, slug, title }}
            <li class="2xs:grid-cols-[80px_1fr] grid gap-x-4 gap-y-1">
                <time
                    datetime={publishedAt.toISOString()}
                    class="2xs:text-right 2xs:pt-1.25 self-start text-sm"
                    >{formatDate(publishedAt)}</time
                >
                <span>
                    <a
                        href={`/blog/${slug}`}
                        class="decoration-moss text-lg font-semibold text-balance underline underline-offset-2"
                        >{title}</a
                    ></span
                >
            </li>
        {/each}
    </ul>

    {#if otherPostsCount}
        <div class="mt-8 flex justify-center">
            <Link href="/blog">Read {otherPostsCount} more posts</Link>
        </div>
    {/if}
</section>

<hr class="border-ming mx-auto my-16 max-w-sm" />

<TechStack />

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
            class="flex w-80 flex-col items-center space-y-2 rounded-md bg-white p-4 tracking-wide shadow-lg sm:w-71"
        >
            <li>Product Strategy</li>
            <li>Attention to Detail</li>
            <li>Mentorship & Team Growth</li>
            <li>Community Building</li>
            <li>Design Systems</li>
        </ul>
        <ul
            class="flex w-80 flex-col items-center space-y-2 rounded-md bg-white p-4 tracking-wide shadow-lg sm:w-71"
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

<section class="mx-auto flex max-w-prose flex-col gap-4">
    <h2
        class="xs:text-2xl mb-4 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        Featured project{featuredProjects.length > 1 ? 's' : ''}
    </h2>

    <p class="mb-6">
        Here are some of the most notable projects I've worked on so far. Most
        of my code is libre software and you're welcome to get involved!
    </p>

    {#each featuredProjects as { name, tags, startedYear, updatedYear, Content, code, demo }}
        <article class="grid gap-2 rounded-md bg-white p-4 shadow-lg">
            <div class="flex items-center justify-between gap-1">
                <h3 class="text-2xl font-black">{name}</h3>
                <div class="flex gap-1 text-sm">
                    <time datetime={startedYear.toString()}>{startedYear}</time>
                    {#if updatedYear > startedYear}<span>-</span><time
                            datetime={updatedYear.toString()}
                            >{updatedYear}</time
                        >{/if}
                </div>
            </div>

            <Tags
                {tags}
                variant="subtle"
                class="[&>span]:text-xs [&>span]:sm:p-1"
            />

            <div class="prose prose-p:first:mt-0 prose-p:last:mb-0">
                <Content />
            </div>

            <div class="flex justify-end gap-2">
                {#if demo}
                    <Link href={demo} class="inline-flex items-center gap-1"
                        ><img
                            src="/images/external-link.svg"
                            alt="External link to demo"
                            class="size-5"
                        />Demo</Link
                    >
                {/if}
                {#if code}
                    <Link href={code} class="inline-flex items-center gap-1"
                        ><img
                            src="/images/code-xml.svg"
                            alt="Show code (Git)"
                            class="size-5"
                        />Code</Link
                    >
                {/if}
            </div>
        </article>
    {/each}

    {#if otherProjectsCount}
        <div class="mt-8 flex justify-center">
            <Link href="/projects"
                >Explore {otherProjectsCount} more projects I've worked on since {earliestProjectStartYear}</Link
            >
        </div>
    {/if}
</section>
