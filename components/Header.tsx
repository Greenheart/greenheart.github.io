const Header = () => (
    <header className="flex justify-between px-4 py-1 bg-white">
        <div className="flex w-md items-center space-x-4">
            <img
                src="/images/compass-icon-square.svg"
                alt="Compass logo"
                className="w-16 h-16"
            />
            <img
                src="/images/sp-logo.svg"
                alt="Samuel Plumppu name logo"
                className="max-w-xs"
            />
        </div>
        <nav className="flex justify-between space-x-4">
            <a className="flex items-center">About</a>
            <a className="flex items-center">Blog</a>
            <a className="flex items-center">Contact</a>
        </nav>
    </header>
)

export default Header
