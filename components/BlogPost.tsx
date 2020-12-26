import { FC } from 'react'
import Layout from './Layout'

const BlogPost: FC<BlogPostProps> = ({ children }) => (
    <Layout>
        <div className="container mx-auto my-8 prose lg:prose-xl">
            {children}
        </div>
    </Layout>
)

interface BlogPostProps {
    children: React.ReactNode
}

export default BlogPost
