<script lang="ts">
    export let allTalks: string[] = []
</script>

<h1
    class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
>
    My talks
</h1>

<div class="flex flex-col space-y-2 items-start">
    {#each allTalks as talk}
        <a href={`/talks/${talk}/`} class="link" sveltekit:reload>
            {talk}
        </a>
    {/each}
</div>
