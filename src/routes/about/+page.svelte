<script lang="ts">
    import Link from '$components/Link.svelte'
    import Picture from '$components/Picture.svelte'
</script>

<h1
    class="xs:text-5xl mb-8 text-4xl leading-none font-black tracking-tight sm:text-6xl lg:text-7xl"
>
    More about me
</h1>

<h2 class="xs:text-2xl pb-4 text-lg font-bold">
    One of my most exciting orienteering memories so far:
</h2>

<figure class="flex flex-col items-center">
    <Picture
        src="/images/Tiomila2015.jpg"
        alt="Night time start of the Tiomila 2015 orienteering relay"
        sources={[{ srcset: '/images/Tiomila2015.webp', type: 'image/webp' }]}
        class="w-full max-w-5xl pb-4"
        width={1024}
        height={661}
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
