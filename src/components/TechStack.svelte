<script module lang="ts">
    import { fade } from 'svelte/transition'
    import { flip } from 'svelte/animate'
    import { quintOut } from 'svelte/easing'
    import { onMount } from 'svelte'
    import { Tabs } from 'bits-ui'

    import type { TechStack } from '$lib/types'
    import { tech, groups } from '$data/tech-stack'
</script>

<script lang="ts">
    let selected = $state<keyof TechStack>('Current')
    let ready = $state(false)
    onMount(() => (ready = true))
</script>

<section class="xs:h-80 flex h-96 flex-col items-center sm:h-64">
    <h2
        class="xs:text-2xl mb-6 text-center text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
    >
        My tech stack
    </h2>

    <Tabs.Root bind:value={selected} class="p-4">
        <Tabs.List class="mx-auto mb-6 grid w-72 grid-cols-3 gap-2">
            {#each groups as group}
                <Tabs.Trigger
                    value={group}
                    class={[
                        'cursor-pointer rounded-xs px-3 py-2 hover:bg-white hover:shadow-lg',
                        group === selected && 'bg-white shadow-lg',
                    ]}
                >
                    {group}
                </Tabs.Trigger>
            {/each}
        </Tabs.List>
        {#each groups as group}
            <Tabs.Content
                value={group}
                class={[
                    // Workaround to replace flexbox gap: https://gist.github.com/OliverJAsh/7f29d0fa1d35216ec681d2949c3fe8b7
                    '-mb-2 -ml-2 flex max-w-prose flex-wrap justify-center pt-4 font-normal text-white',
                ]}
            >
                {#if ready && group === selected}
                    {#each tech[group] as technology, index (technology)}
                        <span
                            class="pb-5 pl-2"
                            animate:flip={{
                                duration: 300,
                                easing: quintOut,
                            }}
                        >
                            <span
                                class="bg-ming rounded-xs p-2 tracking-wide"
                                in:fade|global={{
                                    delay: index * 35,
                                    duration: 300,
                                }}
                            >
                                {technology}
                            </span>
                        </span>
                    {/each}
                {/if}
            </Tabs.Content>
        {/each}
    </Tabs.Root>
</section>
