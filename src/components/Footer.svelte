<script lang="ts">
    import EncryptedEmail from './EncryptedEmail.svelte'
    import SocialLinks from './SocialLinks.svelte'
    import SubscribeLinks from './SubscribeLinks.svelte'
</script>

<footer class="container mx-auto max-w-6xl px-4 pb-8 text-center">
    <hr class="border-yellow mx-auto my-16 max-w-sm" id="contact" />
    <h2
        class="xs:text-2xl mb-6 text-xl leading-none font-black tracking-tight text-balance sm:text-3xl lg:text-4xl"
    >
        Let's co-create a sustainable future!
    </h2>

    <EncryptedEmail />

    <p class="mt-8">© 2015 - {new Date().getFullYear()} Samuel Plumppu</p>

    <SocialLinks class="my-8" />

    <SubscribeLinks />
</footer>
