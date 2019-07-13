import { Link } from 'gatsby'
import React from 'react'

import './Header.css'

const Header = ({ siteTitle }) => (
    <header>
        <div className="container">
            <h1>
                <Link to="/">{siteTitle}</Link>
            </h1>
        </div>
    </header>
)

export default Header
