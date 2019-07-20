import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { getCSSVariable, throttleAnimationFrame } from '../../utils/Helpers'
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
        const scrollThreshold = Number(
            getCSSVariable('--scroll-threshold').replace('px', '')
        )
        let lastScrollPos = window.scrollY

        const updateHeader = () => {
            const direction = window.scrollY < lastScrollPos ? 'up' : 'down'

            if (direction === 'up' && window.scrollY < scrollThreshold) {
                // If scrolling up, remove at the threshold.
                header.classList.remove(styles.scrolled)
            } else if (window.scrollY > scrollThreshold / 20) {
                // Else if scrolling down, add class almost immediately to improve UX.
                header.classList.add(styles.scrolled)
            }

            lastScrollPos = window.scrollY
        }

        // This update ensures the header behaves as expected no matter what scrollY the page loads at.
        updateHeader()
        const onScroll = throttleAnimationFrame(updateHeader)

        // Attach listener and return cleanup function to remove it.
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const temporarilyDisableTransitions = () => {
        const header = document.querySelector('.' + styles.header)
        const scrollThreshold = Number(
            getCSSVariable('--scroll-threshold').replace('px', '')
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

export default Header
