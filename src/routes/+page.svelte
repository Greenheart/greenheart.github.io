<script module lang="ts">
    import TechStack from '$components/TechStack.svelte'
    import Link from '$components/Link.svelte'
</script>

<script lang="ts">
    import EncryptedEmail from '$components/EncryptedEmail.svelte'
    import Project from '$components/Project.svelte'
    import SocialLinks from '$components/SocialLinks.svelte'
    import { formatDate } from '$lib/utils.js'
    import { GREENHEART_COOP_URL } from '$lib/constants.js'

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
    src="$assets/images/samuel.png"
    alt="Samuel Plumppu"
    class="shadow-yellow mx-auto my-8 size-32 rounded-full object-cover shadow-2xl sm:h-40 sm:w-40"
    fetchpriority="high"
    width="500"
    height="500"
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
        <div class="bg-moss -skew-y-1 transform p-2 text-black shadow-2xl">
            <!-- TODO: split the base title at & -->
            <span class="whitespace-nowrap">System Developer</span>
            &
            <span class="whitespace-nowrap">Sustainability Entrepreneur</span>
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
            href={GREENHEART_COOP_URL}
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

<hr class="border-yellow/60 mx-auto my-16 max-w-sm" />

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

    <div class="mt-8 flex justify-center">
        <Link href="#featured-projects" class="inline-flex items-center gap-2"
            ><img
                src="/images/code-xml.svg"
                alt="Show code (Git)"
                class="size-5"
            />Featured projects</Link
        >
    </div>
</section>

<hr class="border-yellow/60 mx-auto my-16 max-w-sm" />

<section class="mx-auto max-w-prose">
    <h2
        class="xs:text-2xl mb-8 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
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
            class="dark:bg-carbon-black flex w-80 flex-col items-center space-y-2 rounded-md bg-white p-4 tracking-wide shadow-lg sm:w-71"
        >
            <li>Product Strategy</li>
            <li>Attention to Detail</li>
            <li>Intercultural Collaboration</li>
            <li>Mentorship & Team Growth</li>
            <li>
                <Link
                    href="https://openlibrary.org/books/OL27421718M/An_Everyone_Culture"
                    compact>Feedback & Learning Culture</Link
                >
            </li>
            <li>Improved Development Practices</li>
        </ul>
        <ul
            class="dark:bg-carbon-black flex w-80 flex-col items-center space-y-2 rounded-md bg-white p-4 tracking-wide shadow-lg sm:w-71"
        >
            <li>Project Management</li>
            <li>Stakeholder Communication</li>
            <li>
                <Link href="https://learningsystemsthinking.com/" compact
                    >Systems Thinking</Link
                >
            </li>
            <li>UI/UX Design</li>
            <li>Humane Tech & Ethical Design</li>
            <li>Design Systems</li>
        </ul>
    </div>
</section>

<hr class="border-yellow/60 mx-auto my-16 max-w-sm" />

<section class="mx-auto max-w-prose">
    <h2
        class="xs:text-2xl mb-8 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        My beliefs
    </h2>

    <ul
        class="xs:[&>li]:grid-cols-3 dark:[&>li>h3]:text-yellow list-disc space-y-8 pl-4 text-xl [&>li]:grid [&>li]:gap-4 [&>li>h3]:text-xl [&>li>h3]:font-black [&>li>p]:col-span-2"
    >
        <li>
            <h3>People</h3>
            <p>
                I believe everyone can teach you something, no matter their
                experience, job title or background. This approach is especially
                useful in cross-functional teams with people from development,
                design, product and business.
            </p>
        </li>
        <li>
            <h3>Leadership</h3>
            <p>
                Good leadership to me is like coaching, creating a learning
                culture where the team continuously improves their technical
                capabilities and collaboration skills.
            </p>
        </li>
        <li>
            <h3>Curiosity</h3>
            <p>
                I'm driven by curiosity and a strong learning mindset and
                generally try to see challenges and problems as learning
                opportunities. These are some of the most important qualities I
                look for in people I collaborate with.
            </p>
        </li>
        <li>
            <h3>Quality</h3>
            <p>
                I believe testing (mostly integration) is fundamental to quality
                software, especially for large projects that are going to be
                used and developed for many years.
            </p>
        </li>
        <li>
            <h3>Ownership</h3>
            <p>
                I enjoy taking ownership for the products, services and features
                I work on, ensuring we're meeting the needs of people using
                them, and delivering accessible, performant solutions.
            </p>
        </li>
        <li>
            <h3>Systems Thinking</h3>
            <p>
                Instead of working around symptoms, I often try exploring the
                systems perspective to find underlying causes. I've found that
                "solving a problem" usually means updating the solution - but
                not always. Sometimes you need to ask different questions, and
                redefine the problem.
            </p>
        </li>
    </ul>
</section>

<hr class="border-yellow/60 mx-auto my-16 max-w-sm" />

<section class="mx-auto max-w-prose">
    <h2
        class="xs:text-2xl mb-8 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        Unique experiences
    </h2>
    <ul class="list-disc space-y-4 pl-4 text-xl">
        <li>
            I founded a <Link href={GREENHEART_COOP_URL} compact
                >co-operative system development agency</Link
            >, managing teams, projects and clients. Doubling the annual yearly
            revenue two years in a row while reinvesting all surplus to enable
            social impact projects and speed up the transition to a regenerative
            and distributive economy.
        </li>
        <li>
            I've worked at several early-stage startups and impactful
            non-profits. I'm used to working in resource-constrained
            environments where every technical, human and financial resource
            needs to be used wisely.
        </li>
        <li>
            I've worked in highly international, diverse teams since 2019, which
            has taught me a lot about intercultural collaboration and made me
            more humble and considerate.
        </li>
    </ul>
</section>

<hr class="border-yellow/60 mx-auto my-16 max-w-sm" />

<TechStack />

<hr class="border-yellow/60 mx-auto my-16 max-w-sm" />

<section class="mx-auto flex max-w-prose flex-col gap-8">
    <h2
        class="xs:text-2xl mb-4 scroll-mt-8 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
        id="featured-projects"
    >
        Featured project{featuredProjects.length > 1 ? 's' : ''}
    </h2>

    <p class="mb-6 text-xl">
        Here are some of the most notable projects I've worked on so far. Most
        of my code is libre software and you're welcome to get involved!
    </p>

    {#each featuredProjects as project}
        <Project {project} />
    {/each}

    <!-- TODO: Uncomment when the /projects page is ready -->
    <!-- {#if otherProjectsCount}
        <div class="mt-8 flex justify-center">
            <Link href="/projects"
                >Explore {otherProjectsCount} more projects I've worked on since {earliestProjectStartYear}</Link
            >
        </div>
    {/if} -->
</section>
