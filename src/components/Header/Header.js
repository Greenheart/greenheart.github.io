import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './Header.module.css'

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            compass: file(relativePath: { eq: "compass-no-bg-optimized.svg" }) {
                publicURL
            }
        }
    `)

    return (
        <header className={styles.header}>
            <a
                href="/"
                className={styles.logo}
                onClick={showIntroWithoutReload}
            >
                <img
                    src={data.compass.publicURL}
                    alt="compass logo"
                    width="60"
                />
            </a>
            <nav className={styles.mainMenu}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

const showIntroWithoutReload = event => {
    // Prevent multiple identical entries in history.
    if (window.location.hash) {
        window.history.pushState(
            '',
            document.title,
            window.location.pathname + window.location.search
        )

        window.scrollTo(0, 0)
    }

    event.preventDefault()
    return false
}

export default Header
