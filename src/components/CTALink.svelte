<script lang="ts">
    export let href: string
</script>

<a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class="mt-6 bg-gradient-to-tr from-green-400 to-blue-500 py-3 px-8 inline-flex rounded-md shadow-lg hover:shadow-xl transform-gpu hover:scale-105 duration-150 justify-self-center text-black font-black justify-center"
>
    <span class="filter drop-shadow-lg whitespace-nowrap">
        <slot />
    </span>
</a>
