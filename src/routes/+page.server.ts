import { listPosts } from '$lib/posts'
import { getAllProjects } from '$lib/projects'
import { separateFeatured } from '$lib/utils'

export const load = async () => {
    const [posts, projects] = await Promise.all([
        separateFeatured(await listPosts()),
        separateFeatured(await getAllProjects()),
    ])

    return {
        featuredPosts: posts.featured,
        otherPostsCount: posts.other.length,
        featuredProjects: projects.featured,
        otherProjectsCount: projects.other.length,
    }
}
