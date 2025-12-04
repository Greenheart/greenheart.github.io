<script lang="ts">
    let { data } = $props()

    const [HEAD, BODY] = $derived.by(() => {
        return [
            data.talk.match(/<head>([^]+)<\/head>/)?.[1],
            data.talk.match(/<body>([^]+)<\/body>/)?.[1],
        ]
    })
</script>

<svelte:head>
    {@html HEAD}
</svelte:head>

{@html BODY}
