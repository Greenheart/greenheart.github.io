<script lang="ts">
    import { CODE_URL, MASTODON_URL } from '$lib/constants'

    type Props = {
        class?: string
    }
    let { class: className }: Props = $props()
</script>

<div
    class={[
        'flex flex-wrap items-center justify-center space-x-8 dark:invert',
        className,
    ]}
>
    <a
        href="https://matrix.to/#/@Greenheart:matrix.org"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message me securely with the Matrix protocol"
    >
        <img src="/images/matrix-logo.svg" alt="Matrix.org logo" class="h-6" />
    </a>
    <a
        href={CODE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See my libre software at GitHub"
    >
        <span class="i-[mdi--github] size-6"></span>
    </a>
    <a
        href={MASTODON_URL}
        target="_blank"
        rel="me noopener noreferrer"
        aria-label="Follow me on Mastodon"
    >
        <span class="i-[mdi--mastodon] size-6"></span>
    </a>
    <a
        href="https://linkedin.com/in/samuelplumppu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with me on LinkedIn"
    >
        <span class="i-[mdi--linkedin] size-6"></span>
    </a>
</div>
