import { FC } from 'react'

import Footer from './Footer'
import Header from './Header'
import { classNames } from '../shared/util'

const Layout: FC<LayoutProps> = ({
    children,
    className,
    variant = 'default',
}) => (
    <>
        <Header />
        <main className={variants[variant] + ' ' + className}>{children}</main>
        <Footer />
    </>
)

interface LayoutProps {
    children: React.ReactNode
    className?: string
    variant?: keyof typeof variants
}

const blankPage = ''
const defaultLayout = 'container mx-auto'
const postLayout = classNames(defaultLayout, 'my-8 prose lg:prose-xl')

const variants = {
    blank: blankPage,
    default: defaultLayout,
    post: postLayout,
}

export default Layout
