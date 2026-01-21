<script lang="ts">
    import EncryptedEmail from './EncryptedEmail.svelte'
    import Link from './Link.svelte'
    import SocialLinks from './SocialLinks.svelte'
    import SubscribeLinks from './SubscribeLinks.svelte'
</script>

<footer class="container mx-auto max-w-6xl px-4 pb-8 text-center">
    <hr class="border-yellow mx-auto my-16 max-w-sm" />
    <h2
        class="xs:text-2xl mb-6 text-xl leading-none font-black tracking-tight text-balance sm:text-3xl lg:text-4xl"
    >
        Let's co-create a sustainable future!
    </h2>

    <EncryptedEmail />

    <p class="mt-8">© 2015 - {new Date().getFullYear()} Samuel Plumppu</p>

    <SocialLinks class="my-8" />

    <SubscribeLinks />

    <p class="mx-auto mt-8 max-w-prose text-xs">
        This website is 100% certified home-grown and organic.<br
            class="xs:block hidden"
        /><Link
            href="https://www.nature.com/articles/s44222-025-00323-4"
            compact>Writing is thinking</Link
        > and you either <Link
            href="https://en.wiktionary.org/wiki/use_it_or_lose_it"
            compact>use it or lose it</Link
        >.
    </p>
</footer>
