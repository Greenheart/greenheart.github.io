import Link from 'next/link'

const Header = () => (
    <header className="flex justify-between p-1 bg-white">
        <div className="flex w-md items-center space-x-4">
            <Link href="/">
                <a>
                    <img
                        src="/images/compass-icon-square.svg"
                        alt="Compass logo"
                        className="w-16 h-16"
                    />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img
                        src="/images/sp-logo.svg"
                        alt="Samuel Plumppu name logo"
                        className="max-w-xs"
                    />
                </a>
            </Link>
        </div>
        <nav className="flex justify-between">
            <Link href="/about">
                <a className="flex items-center px-4">About</a>
            </Link>
            <Link href="/blog">
                <a className="flex items-center px-4">Blog</a>
            </Link>
            <a className="flex items-center px-4">Contact</a>
        </nav>
    </header>
)

export default Header
