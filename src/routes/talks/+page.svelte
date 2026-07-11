<script lang="ts">
    let { data } = $props()
    const { talks } = $derived(data)
</script>

<h1
    class="xs:text-5xl mb-8 text-4xl leading-none font-black tracking-tight sm:text-6xl lg:text-7xl"
>
    Talks
</h1>
<p class="mb-8 text-xl sm:text-2xl">Some of my public presentations.</p>

<div class="flex flex-col items-start space-y-2">
    {#each talks as talk}
        <a href={`/talks/${talk}/`} class="link" data-sveltekit-reload>
            {talk}
        </a>
    {/each}
</div>
