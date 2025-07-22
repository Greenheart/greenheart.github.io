<script lang="ts">
    import EncryptedEmail from './EncryptedEmail.svelte'
</script>

<footer class="container mx-auto max-w-6xl px-4 pb-4 text-center font-light">
    <hr class="border-ming mx-auto my-16 max-w-sm" id="contact" />
    <h2
        class="xs:text-2xl mb-6 text-xl leading-none font-black tracking-tight sm:text-3xl lg:text-4xl"
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

    <p class="mt-8">© 2015 - {new Date().getFullYear()} Samuel Plumppu</p>

    <div class="my-8 flex flex-wrap items-center justify-center space-x-8">
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
            aria-label="See my libre software at GitHub"
        >
            <img src="/images/github.svg" alt="GitHub" class="h-8 w-8" />
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
                class="h-8 w-8"
            />
        </a>
        <a
            href="https://linkedin.com/in/samuelplumppu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with me on LinkedIn"
        >
            <img src="/images/linkedin.svg" alt="LinkedIn" class="h-8 w-8" />
        </a>
    </div>
</footer>
