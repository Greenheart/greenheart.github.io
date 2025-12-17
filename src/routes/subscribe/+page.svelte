<script>
    import Link from '$components/Link.svelte'
    import { SITE_URL } from '$lib/constants'
</script>

<section class="mb-8 grid justify-center">
    <h1
        class="xs:text-5xl mb-8 text-4xl leading-none font-black tracking-tight sm:text-6xl lg:text-7xl"
    >
        Subscribe to my blog
    </h1>

    <article class="prose text-black">
        <p>
            You can read my latest blog posts in your feed reader. Multiple
            formats available:
        </p>

        <ul
            class="xs:justify-start xs:pl-6 mb-8 flex justify-center gap-4 p-0 [&>li]:p-0"
        >
            <li class="flex flex-wrap justify-center gap-1">
                <span
                    class="-mb-0.5 size-5 self-center bg-[url(/images/feed.svg)] bg-cover bg-no-repeat"
                ></span>
                <Link href="/feed.atom" compact class="h-5 self-center"
                    >Atom</Link
                >
            </li>
            <li class="flex flex-wrap justify-center gap-1">
                <span
                    class="-mb-0.5 size-5 self-center bg-[url(/images/feed.svg)] bg-cover bg-no-repeat"
                ></span>
                <Link href="/feed.json" compact class="h-5 self-center"
                    >JSON</Link
                >
            </li>
        </ul>

        <h2>How does this work?</h2>

        <p>
            You can use a feed reader (sometimes called an RSS reader) to follow
            multiple blogs or websites via their <Link
                href="https://en.wikipedia.org/wiki/Web_feed"
                compact>web feeds</Link
            >. This is a convenient and privacy-friendly way to stay up to date
            without subscribing to email newsletters or using relying on social
            media algorithms.
        </p>

        <h2>Get started</h2>

        <ol>
            <li>
                <Link href="https://netnewswire.com/help/what-is-rss.html"
                    >Read this short intro to how feeds work</Link
                >.
            </li>
            <li>
                Install and get started with a feed reader for your device. I
                can recommend <Link
                    href="https://github.com/spacecowboy/Feeder#readme"
                    >Feeder (Android)</Link
                > and <Link href="https://netnewswire.com/"
                    >NetNewsWire (iOS + macOS)</Link
                >. There are also email clients <Link
                    href="https://blog.thunderbird.net/2022/05/thunderbird-rss-feeds-guide-favorite-content-to-the-inbox/"
                    >Thunderbird (desktop + mobile)</Link
                >, and even browser extensions where you can subscribe to your
                feeds.
            </li>
            <li>
                To add feeds from the blogs and websites you want to follow, by
                copy the feed URL into your reader. You can often use the
                landing page URL, like <code>{SITE_URL}</code>
                and the feed reader will find the feed automatically. You can also
                use the
                <span
                    class="mx-1 -mb-1 inline-block size-5 bg-[url(/images/feed.svg)] bg-cover bg-no-repeat"
                ></span> feed icon to find direct links to add in your reader.
            </li>
        </ol>

        <p><strong>Enjoy!</strong> 🌱</p>
    </article>
</section>
