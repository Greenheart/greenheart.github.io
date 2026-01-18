<script lang="ts">
    import { dev } from '$app/environment'
    import { page } from '$app/state'

    const errorMessage = $derived.by<string | undefined>(() => {
        if (page.error) {
            try {
                const res = JSON.parse(page.error.message)?.[0]?.message
                return res
            } catch (_) {}
        }
    })
</script>

<div class="text-center">
    <h1 class="mb-4 text-xl font-bold sm:text-3xl">
        Oh no! Something went wrong :(
    </h1>

    {#if dev && page.error}
        <p class="font-semibold text-red-400">{errorMessage}</p>
        <pre class="text-left text-sm">{page.error.message}</pre>
    {/if}

    <a
        href="/"
        class="bg-moss inline-flex max-w-max transform-gpu justify-center rounded-md px-8 py-3 font-black text-black shadow-lg duration-150 hover:scale-105 hover:shadow-xl"
    >
        Go back
    </a>
</div>
