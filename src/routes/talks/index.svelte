<script lang="ts">
    // TODO: load all talks dynamically from the static folder
    const talks = [
        '2021-05-17-chalmers-sustainability-entrepreneurship',
        '2021-09-11-hackforfuture-co-creation',
        '2022-05-09-chalmers-entrepreneurship-inner-development'
    ]
</script>

<h1
    class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
>
    My talks
</h1>

<div class="flex flex-col space-y-2">
    {#each talks as talk}
        <a href={`/talks/${talk}/`} class="link" sveltekit:reload>
            {talk}
        </a>
    {/each}
</div>
