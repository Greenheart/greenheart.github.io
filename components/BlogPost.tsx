import { FC } from 'react'
import Layout from './Layout'

const BlogPost: FC<BlogPostProps> = ({ children }) => (
    <Layout variant="post">{children}</Layout>
)

interface BlogPostProps {
    children: React.ReactNode
}

export default BlogPost
