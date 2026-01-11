<script>
    import Link from './Link.svelte'
</script>

<p>
    <span class="inline-flex flex-wrap items-center justify-center gap-1">
        <Link href="/subscribe" class="inline-flex items-center gap-1" compact
            ><img
                src="/images/feed.svg"
                alt="RSS/Atom feed icon"
                class="size-5"
            />Subscribe</Link
        >
        with your feed reader:
        <span class="inline-flex flex-nowrap items-center gap-0.5"
            ><Link href="/feed.atom" class="self-center" compact>Atom</Link
            >/<Link href="/feed.json" class="self-center" compact>JSON</Link
            ></span
        >
    </span>
</p>
