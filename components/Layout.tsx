import { FC } from 'react'

const Layout: FC<LayoutProps> = ({ children }) => (
    <div className="layout" style={{ background: 'lightskyblue' }}>
        {children}
    </div>
)

interface LayoutProps {
    children: React.ReactNode
}

export default Layout
