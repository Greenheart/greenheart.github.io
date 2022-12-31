<script lang="ts">
    import Link from '$components/Link.svelte'
    import Picture from '$components/Picture.svelte'
</script>

<h1
    class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight mb-8"
>
    More about me
</h1>

<h2 class="text-lg xs:text-2xl font-bold pb-4">
    One of my most exciting orienteering memories so far:
</h2>

<figure class="flex flex-col items-center">
    <Picture
        src="/images/Tiomila2015.jpg"
        alt="Nighttime start of the Tiomila 2015 orienteering relay"
        sources={[{ srcset: '/images/Tiomila2015.webp', type: 'image/webp' }]}
        class="max-w-5xl pb-4 w-full"
        width={1024}
        height={576}
    />
    <figcaption class="max-w-prose">
        Seconds after the start of Tiomila 2015, one of the world's largest
        orienteering relays. I ran the first leg and somehow got to the top 5 as
        we left the arena, later finishing the course as <Link
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
