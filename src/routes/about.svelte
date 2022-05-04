<script lang="ts">
    import Link from '$components/Link.svelte'
</script>

<h1
    class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
>
    More about me
</h1>

<figure class="flex flex-col items-center">
    <img
        src="/images/Tiomila2015.jpg"
        alt="Nighttime start of the Tiomila 2015 orienteering relay"
        class="w-full pb-4"
    />
    <figcaption>
        One of my most exciting orienteering memories so far: right after the
        start of Tiomila 2015, one of the world's largest relays. I ran the
        first leg and somehow got to the top 5 as we left the arena, later
        finishing the course as <Link
            href="https://10mila.se/index.php/sv/?option=com_tiomilaresults&year=70&class=8&leg=1&total=1"
            compact
        >
            19th
        </Link> of 318 runners. Best of all, photographer <Link
            href="https://www.peterholgersson.se/"
            compact>Peter Holgersson</Link
        >
        captured this moment so beautifully.
    </figcaption>
</figure>
