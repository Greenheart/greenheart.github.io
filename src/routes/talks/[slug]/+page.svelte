<script lang="ts">
    let { data } = $props()

    const [, HEAD] = data.talk.match(/<head>([^]+)<\/head>/) ?? []
    const [, BODY] = data.talk.match(/<body>([^]+)<\/body>/) ?? []
</script>

<svelte:head>
    {@html HEAD}
</svelte:head>

{@html BODY}
