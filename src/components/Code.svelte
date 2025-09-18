<script lang="ts">
    type Props = {
        codeHTML: string
    }
    let { codeHTML }: Props = $props()
</script>

{@html codeHTML}
