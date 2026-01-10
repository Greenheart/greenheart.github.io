<script>
    import Link from './Link.svelte'
</script>

<p>
    <span class="inline-flex flex-wrap justify-center gap-1">
        <span
            class="mr-1 size-5 self-center bg-[url(/images/feed.svg)] bg-cover bg-no-repeat dark:invert"
        ></span>
        <Link href="/subscribe" compact class="self-center">Subscribe</Link>
        with your feed reader:
        <span class="inline-flex flex-nowrap gap-0.5"
            ><Link href="/feed.atom" compact class="self-center">Atom</Link
            >/<Link href="/feed.json" compact class="self-center">JSON</Link
            ></span
        >
    </span>
</p>
