import { FC } from 'react'
import Footer from './Footer'

const Layout: FC<LayoutProps> = ({ children }) => (
    <main className="layout" style={{ background: 'lightskyblue' }}>
        {children}
        <Footer />
    </main>
)

interface LayoutProps {
    children: React.ReactNode
}

export default Layout
