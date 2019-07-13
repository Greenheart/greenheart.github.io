import React from 'react'
import { Link } from 'gatsby'

import styles from './Header.module.css'

const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <h1>
            <Link to="/">{siteTitle}</Link>
        </h1>
    </header>
)

export default Header
