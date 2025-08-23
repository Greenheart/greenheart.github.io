export async function load({ params, data }) {
    const post = await import(`../${params.slug}.md`)

    return { content: post.default, ...data }
}
