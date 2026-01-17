import { listPosts } from '$lib/posts'
import { getAllProjects } from '$lib/projects'
import { separateFeatured, sortFeaturedByWeight } from '$lib/utils'

export const load = async () => {
    const [posts, projects] = await Promise.all([
        separateFeatured(await listPosts()),
        sortFeaturedByWeight(await getAllProjects()),
    ])

    const earliestProjectStartYear = [
        ...projects.featured,
        ...projects.other,
    ].reduce(
        (earliestYear, project) => Math.min(earliestYear, project.startedYear),
        Number.MAX_SAFE_INTEGER,
    )

    return {
        featuredPosts: posts.featured,
        otherPostsCount: posts.other.length,
        featuredProjects: projects.featured,
        otherProjectsCount: projects.other.length,
        earliestProjectStartYear,
    }
}
