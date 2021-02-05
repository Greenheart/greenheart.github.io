import Layout from '../../components/Layout'

const getAllBlogMeta = () => {
    // get filepaths for all mdx files in '/blog' directory
    // import all
    // Return array with all blog meta
}

// IDEA: use this [slug].tsx solution to get dymanic posts
// https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote

function Blog() {
    return (
        <Layout variant="default">
            <h2>List of all blog posts</h2>
        </Layout>
    )
}

export default Blog
