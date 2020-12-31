import Link from 'next/link'

const menuLinkProps = {
    className:
        'menu-link px-2 flex items-center justify-center text-xl font-thin',
}

const Header = () => (
    <header className="flex justify-between py-0.5 px-4 bg-white">
        <div className="flex w-md items-center space-x-4">
            <Link href="/">
                <a>
                    <img
                        src="/images/compass-icon-square.svg"
                        alt="Compass logo"
                        className="w-14 h-14"
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

        <nav className="grid self-stretch content-center grid-cols-3 grid-rows-1">
            <Link href="/about">
                <a {...menuLinkProps}>About</a>
            </Link>
            <Link href="/blog">
                <a {...menuLinkProps}>Blog</a>
            </Link>
            <a {...menuLinkProps}>Contact</a>
        </nav>
    </header>
)

export default Header
