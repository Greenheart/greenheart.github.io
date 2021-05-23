<script context="module" lang="ts">
    import { fade } from 'svelte/transition'
    import { flip } from 'svelte/animate'
    import { quintOut } from 'svelte/easing'
    import MediaQuery from 'svelte-media-query'

    import type { TechStack } from '$lib/interfaces'

    const tech: TechStack = {
        Current: [
            'Svelte',
            'React',
            'Node.js',
            'TypeScript',
            'JavaScript',
            'Storybook',
            'Next.js',
            'Tailwind CSS',
            'HTML',
            'CSS',
            'Docker',
            'PostgreSQL',
            'GraphQL',
        ],
        Past: [
            'Elixir',
            'C#',
            'Python',
            'PHP',
            'Gatsby',
            'Meteor',
            'Redis',
            'Mongo DB',
        ],
        Learning: ['SvelteKit', 'React Native', 'KeystoneJS'],
    }

    const filters: Array<keyof TechStack> = ['Learning', 'Current', 'Past']
</script>

<script lang="ts">
    let selected: keyof TechStack = 'Current'

    function setFilter(filter: keyof TechStack) {
        selected = filter
    }
</script>

<section class="flex flex-col h-80 sm:h-72 md:h-64 items-center">
    <h2
        class="mb-6 text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none justify-self-center text-center"
    >
        My Tech Stack
    </h2>

    <div class="grid grid-cols-3 w-72 mx-auto">
        {#each filters as filter}
            {#if filter === selected}
                <button
                    class="bg-gray-200 px-3 py-2 underline focus:outline-none"
                >
                    {filter}
                </button>
            {:else}
                <button
                    class="px-3 py-2 hover:underline focus:outline-none hover:bg-gray-200 active:bg-gray-300"
                    on:click={() => setFilter(filter)}
                >
                    {filter}
                </button>
            {/if}
        {/each}
    </div>

    <!-- Workaround to replace flexbox gap: https://gist.github.com/OliverJAsh/7f29d0fa1d35216ec681d2949c3fe8b7 -->
    <div class="flex flex-wrap mt-4 max-w-prose -ml-2 -mb-2 justify-center">
        <MediaQuery query="(prefers-reduced-motion: reduce)" let:matches>
            {#if matches}
                {#each tech[selected] as technology (technology)}
                    <span class="pl-2 pb-5">
                        <span class="p-2 bg-green-200">
                            {technology}
                        </span>
                    </span>
                {/each}
            {:else}
                {#each tech[selected] as technology, index (technology)}
                    <span
                        class="pl-2 pb-5"
                        animate:flip={{ duration: 200, easing: quintOut }}
                    >
                        <span
                            class="p-2 bg-green-200"
                            in:fade={{ delay: index * 35, duration: 200 }}
                        >
                            {technology}
                        </span>
                    </span>
                {/each}
            {/if}
        </MediaQuery>
    </div>
</section>
