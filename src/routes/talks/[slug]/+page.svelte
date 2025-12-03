<script lang="ts">
    let { data } = $props()

    const [, HEAD] = $derived(data.talk.match(/<head>([^]+)<\/head>/) ?? [])
    const [, BODY] = $derived(data.talk.match(/<head>([^]+)<\/head>/) ?? [])
</script>

<svelte:head>
    {@html HEAD}
</svelte:head>

{@html BODY}
