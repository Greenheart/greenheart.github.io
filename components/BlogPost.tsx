import { FC } from 'react'

const BlogPost: FC<BlogPostProps> = ({ children }) => (
    <div className="prose lg:prose-xl" style={{ background: 'goldenrod' }}>
        {children}
    </div>
)

interface BlogPostProps {
    children: React.ReactNode
}

export default BlogPost
