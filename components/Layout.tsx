import { FC } from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
)

interface LayoutProps {
    children: React.ReactNode
}

export default Layout
