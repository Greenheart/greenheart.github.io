<script lang="ts">
    import type { Project } from '$lib/projects'
    import Link from './Link.svelte'
    import Tags from './Tags.svelte'

    type Props = {
        project: Project
    }
    let { project }: Props = $props()
</script>

<article
    class="dark:bg-carbon-black grid gap-2 rounded-md bg-white p-4 shadow-lg"
>
    <div class="mb-2 flex items-center justify-between gap-1">
        <h3 class="dark:text-yellow text-2xl font-black">{project.name}</h3>
        <div class="flex gap-1 text-sm">
            <time datetime={project.startedYear.toString()}
                >{project.startedYear}</time
            >
            {#if project.updatedYear > project.startedYear}<span>-</span><time
                    datetime={project.updatedYear.toString()}
                    >{project.updatedYear}</time
                >{/if}
        </div>
    </div>

    <Tags
        tags={project.tags}
        variant="subtle"
        class="[&>span]:text-xs [&>span]:sm:p-1"
    />

    <div
        class="prose prose-p:first:mt-0 prose-p:last:mb-0 prose-strong:text-current prose-headings:text-current text-current marker:text-current"
    >
        <project.Content />
    </div>

    <div class="flex justify-end gap-2">
        {#if project.demo}
            <Link href={project.demo} class="inline-flex items-center gap-1"
                ><img
                    src="/images/external-link.svg"
                    alt="External link to demo"
                    class="size-5"
                />Demo</Link
            >
        {/if}
        {#if project.code}
            <Link href={project.code} class="inline-flex items-center gap-1"
                ><img
                    src="/images/code-xml.svg"
                    alt="Show code (Git)"
                    class="size-5"
                />Code</Link
            >
        {/if}
    </div>
</article>
