<script lang="ts">
    export let talk = ''

    const [, HEAD] = talk.match(/<head>([^]+)<\/head>/) ?? []
    const [, BODY] = talk.match(/<body>([^]+)<\/body>/) ?? []
</script>

<svelte:head>
    {@html HEAD}
</svelte:head>

{@html BODY}
