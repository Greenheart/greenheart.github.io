import React from 'react'
import { Link } from 'gatsby'

import styles from './Header.module.css'

const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <Link to="/">Logo</Link>
        <Link to="/" className={styles.siteTitle}>
            Samuel Plumppu
        </Link>
        <nav className={styles.mainMenu}>
            <Link to="#about">About</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#skills">Skills</Link>
            <Link to="#contact">Contact</Link>
        </nav>
    </header>
)

export default Header
