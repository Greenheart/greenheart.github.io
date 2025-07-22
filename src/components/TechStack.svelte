<script module lang="ts">
    import { fade } from 'svelte/transition'
    import { flip } from 'svelte/animate'
    import { quintOut } from 'svelte/easing'
    import { onMount } from 'svelte'

    import type { TechStack } from '$lib/interfaces'
    import tech from '$data/tech-stack'

    const filters: Array<keyof TechStack> = ['Past', 'Current', 'Learning']
</script>

<script lang="ts">
    let selected: keyof TechStack = 'Current'
    let ready = false
    onMount(() => (ready = true))

    function setFilter(filter: keyof TechStack) {
        selected = filter
    }
</script>

<section class="xs:h-60 flex h-80 flex-col items-center sm:h-56">
    <h2
        class="xs:text-2xl mb-6 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        My tech stack
    </h2>

    <div class="mx-auto mb-6 grid w-72 grid-cols-3 gap-2">
        {#each filters as filter}
            {#if filter === selected}
                <button
                    class="rounded-xs bg-white px-3 py-2 shadow-lg focus:outline-hidden"
                >
                    {filter}
                </button>
            {:else}
                <button
                    class="rounded-xs px-3 py-2 hover:bg-white hover:shadow-lg focus:outline-hidden"
                    on:click={() => setFilter(filter)}
                >
                    {filter}
                </button>
            {/if}
        {/each}
    </div>

    <!-- Workaround to replace flexbox gap: https://gist.github.com/OliverJAsh/7f29d0fa1d35216ec681d2949c3fe8b7 -->
    <div
        class="mt-4 -mb-2 -ml-2 flex max-w-prose flex-wrap justify-center font-normal text-white"
        class:hidden={!ready}
    >
        {#if ready}
            {#each tech[selected] as technology, index (technology)}
                <span
                    class="pb-5 pl-2"
                    animate:flip={{ duration: 300, easing: quintOut }}
                >
                    <span
                        class="bg-ming rounded-xs p-2 tracking-wide"
                        in:fade={{ delay: index * 35, duration: 300 }}
                    >
                        {technology}
                    </span>
                </span>
            {/each}
        {/if}
    </div>
</section>
