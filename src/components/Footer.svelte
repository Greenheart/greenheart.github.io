<script lang="ts">
    import EncryptedEmail from './EncryptedEmail.svelte'
</script>

<footer class="container px-4 pb-4 text-center max-w-6xl mx-auto font-light">
    <hr class="my-16 max-w-sm mx-auto border-ming" id="contact" />
    <h2
        class="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none mb-6"
    >
        Let's co-create a sustainable future!
    </h2>

    <!-- IDEA: Contact securely with Matrix by default -->
    <!-- Then use email as backup, but discouraged -->

    <!-- IDEA: Update EncryptedEmail to work with a encrypted JSON payload, and then display EncryptedContact info (rename component and refactor) -->

    <!--
Contact securely
- or -
Show email
-->
    <EncryptedEmail />

    <p class="mt-8">Samuel Plumppu © 2015 - {new Date().getFullYear()}</p>

    <div class="flex justify-center space-x-8 items-center my-8 flex-wrap">
        <a
            href="https://matrix.to/#/@Greenheart:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message me securely with the Matrix protocol"
        >
            <img
                src="/images/matrix-logo.svg"
                alt="Matrix.org logo"
                class="h-8"
            />
        </a>
        <a
            href="https://github.com/Greenheart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See my free software at GitHub"
        >
            <img src="/images/github.svg" alt="GitHub" class="w-8 h-8" />
        </a>
        <a
            href="https://fosstodon.org/@Greenheart"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Follow me on Mastodon"
        >
            <img
                src="/images/mastodon-logo.svg"
                alt="Mastodon"
                class="w-8 h-8"
            />
        </a>
        <a
            href="https://linkedin.com/in/samuelplumppu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with me on LinkedIn"
        >
            <img src="/images/linkedin.svg" alt="LinkedIn" class="w-8 h-8" />
        </a>
    </div>
</footer>
