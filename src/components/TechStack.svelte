<script module lang="ts">
    import { TECH_SKILLS, type Proficiency } from '$data/tech-skills'

    const skillColors: Record<Proficiency, string> = {
        5: 'bg-yellow',
        4: 'bg-yellow/90',
        3: 'bg-yellow/75',
        2: 'bg-yellow/60',
        1: 'bg-yellow/50',
    } as const
</script>

<section class="mx-auto mb-16 max-w-prose">
    <h2
        id="tech"
        class="xs:text-2xl mb-6 scroll-mt-8 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        Technologies I work with
    </h2>

    <p class="mb-4 text-xl">
        I primarily use fullstack TypeScript for web, mobile and backend
        development. Currently, I enjoy learning Rust and low level systems
        programming. I have been programming daily since 2013 and have worked
        with a wide range of technologies.
    </p>

    <p class="mb-8 text-xl">
        I'm comfortable with learning new programming languages and technologies
        whenever I need them. Rather than chasing the next shiny thing, I value
        picking tools based on the problem space, project goals and team
        experience.
    </p>

    <p class="mb-2">
        Skills are sorted based on proficiency<span class="sr-only">
            (from 5 to 1)</span
        >:
    </p>
    <div class="mb-8 flex items-center gap-2" aria-hidden="true">
        <span class="mr-2 text-2xl">+</span>
        {#each Object.entries(skillColors).reverse() as [proficiency, color] (proficiency)}
            <div class="{color} size-5 rounded-xs"></div>
        {/each}
        <span class="ml-2 text-2xl">-</span>
    </div>

    {#each Object.entries(TECH_SKILLS) as [title, skills] (title)}
        <section class="mb-8">
            <h3 class="text-xl font-semibold">{title}</h3>

            <ul
                class="flex flex-wrap gap-1.5 pt-4 text-sm font-normal dark:text-black"
            >
                {#each skills as [technology, proficiency], index (technology)}
                    <li
                        class="{skillColors[
                            proficiency
                        ]} rounded-xs px-1.5 py-1 tracking-wide"
                    >
                        {technology}
                        <span class="sr-only">({proficiency})</span>
                    </li>
                {/each}
            </ul>
        </section>
    {/each}
</section>
