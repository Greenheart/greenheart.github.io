import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { getCSSVariable } from '../../utils/Helpers'
import styles from './Header.module.css'

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            compass: file(relativePath: { eq: "compass-no-bg-optimized.svg" }) {
                publicURL
            }
        }
    `)

    useEffect(() => {
        const header = document.querySelector('.' + styles.header)
        const scrollThreshold = getCSSVariable('--scroll-threshold').replace(
            'px',
            ''
        )
        const updateHeader = event => {
            const isTop = window.scrollY < scrollThreshold
            if (isTop) {
                header.classList.remove(styles.scrolled)
            } else {
                header.classList.add(styles.scrolled)
            }
        }

        updateHeader()
        window.addEventListener('scroll', updateHeader)

        // Use cleanUp function to remove any side effects.
        const cleanUpFn = () =>
            window.removeEventListener('scroll', updateHeader)
        return cleanUpFn
    })

    const temporarilyDisableTransitions = () => {
        const header = document.querySelector('.' + styles.header)
        const scrollThreshold = getCSSVariable('--scroll-threshold').replace(
            'px',
            ''
        )
        const isTop = window.scrollY < scrollThreshold
        if (isTop) {
            // Go to section without showing CSS transition to prevent jumpy
            // animations caused by header & scroll animating at the same time.
            header.classList.add(styles.noTransition)

            window.setTimeout(
                () => header.classList.remove(styles.noTransition),
                500
            )
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    href="/"
                    className={styles.logo}
                    onClick={showIntroWithoutReload}
                >
                    <img
                        src={data.compass.publicURL}
                        alt="Compass logo"
                        width="60"
                    />
                </a>
                <nav className={styles.mainMenu}>
                    <a href="#about" onClick={temporarilyDisableTransitions}>
                        About
                    </a>
                    <a href="#projects" onClick={temporarilyDisableTransitions}>
                        Projects
                    </a>
                    <a href="#skills" onClick={temporarilyDisableTransitions}>
                        Skills
                    </a>
                    <a href="#contact" onClick={temporarilyDisableTransitions}>
                        Contact
                    </a>
                </nav>
            </div>
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
