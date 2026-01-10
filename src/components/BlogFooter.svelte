<script lang="ts">
    import LucideChevronLeft from '~icons/lucide/chevron-left'
    import LucideChevronRight from '~icons/lucide/chevron-right'

    import Link from './Link.svelte'
    import type { BlogPost } from '$lib/posts'
    import { MASTODON_URL } from '$lib/constants'
    import SubscribeLinks from './SubscribeLinks.svelte'

    type Props = {
        older: Omit<BlogPost, 'Content'>
        newer: Omit<BlogPost, 'Content'>
        otherPostsCount: number
    }
    let { older, newer, otherPostsCount }: Props = $props()
</script>

<section
    class="dark:bg-carbon-black mx-auto mt-12 max-w-lg space-y-4 rounded-md bg-white p-4 text-center shadow-lg lg:text-lg"
>
    <h2
        class="xs:text-2xl text-xl leading-none font-black tracking-tight md:text-3xl"
    >
        Thank you for reading!
    </h2>

    <p>
        <Link href={MASTODON_URL} compact>Let me know</Link> if you have any questions
        or comments.
    </p>

    <SubscribeLinks />

    <p>
        <Link href="/blog" compact>Read {otherPostsCount} more posts</Link>
        or <Link href="/" compact>learn more</Link> about me.
    </p>
</section>

<nav class="mx-auto grid max-w-5xl gap-8 pt-8 sm:grid-cols-2 sm:gap-4 lg:gap-8">
    {#if older}
        <a
            href={`/blog/${older.slug}`}
            class="dark:bg-carbon-black group flex flex-col gap-4 rounded-md bg-amber-100 p-4 shadow-md transition-all duration-300 hover:shadow-xl"
        >
            <span
                class="flex items-center gap-2 text-xs font-bold tracking-wide uppercase"
            >
                <LucideChevronLeft class="size-5 shrink-0" /> Previous
            </span>
            <span
                class="group-hover:decoration-moss underline-offset-3 group-hover:underline"
            >
                {older.title}
            </span>
        </a>
    {:else}
        <div class="hidden sm:block"></div>
    {/if}

    {#if newer}
        <a
            href={`/blog/${newer.slug}`}
            class="dark:bg-carbon-black group flex flex-col items-end gap-4 rounded-md bg-amber-100 p-4 text-end shadow-md transition-all duration-300 hover:shadow-xl"
        >
            <span
                class="flex items-center gap-2 text-xs font-bold tracking-wide uppercase"
            >
                Next
                <LucideChevronRight class="size-5 shrink-0" />
            </span>
            <span
                class="group-hover:decoration-moss underline-offset-3 group-hover:underline"
            >
                {newer.title}
            </span>
        </a>
    {:else}
        <div class="hidden sm:block"></div>
    {/if}
</nav>
