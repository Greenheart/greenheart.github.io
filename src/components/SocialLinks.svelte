<script lang="ts">
    import { MASTODON_URL } from '$lib/constants'

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
        href="https://github.com/Greenheart"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See my libre software at GitHub"
    >
        <img src="/images/github.svg" alt="GitHub" class="aspect-square h-6" />
    </a>
    <a
        href={MASTODON_URL}
        target="_blank"
        rel="me noopener noreferrer"
        aria-label="Follow me on Mastodon"
    >
        <img
            src="/images/mastodon-logo.svg"
            alt="Mastodon"
            class="aspect-square h-6"
        />
    </a>
    <a
        href="https://linkedin.com/in/samuelplumppu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with me on LinkedIn"
    >
        <img
            src="/images/linkedin.svg"
            alt="LinkedIn"
            class="aspect-square h-6"
        />
    </a>
</div>
