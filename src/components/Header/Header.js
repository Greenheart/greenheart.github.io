import React, { useEffect, useRef, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { throttleAnimationFrame } from '../../utils/Helpers'
import SamuelLogo from '../SamuelLogo'
import styles from './Header.module.css'

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            compass: file(relativePath: { eq: "compass-no-bg-optimized.svg" }) {
                publicURL
            }
        }
    `)

    const headerRef = useRef()
    const [scrollThreshold] = useState(70)

    useEffect(() => {
        const updateHeader = () => {
            if (window.scrollY < scrollThreshold) {
                headerRef.current.classList.remove(styles.scrolled)
                // fade in the logo
            } else {
                headerRef.current.classList.add(styles.scrolled)
                // fade out the logo
            }
        }

        // This update ensures the header behaves as expected no matter what scrollY the page loads at.
        updateHeader()
        const onScroll = throttleAnimationFrame(updateHeader)

        // Attach listener and return cleanup function to remove it.
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [headerRef, scrollThreshold])

    const temporarilyDisableTransitions = () => {
        const isTop = window.scrollY < scrollThreshold
        if (isTop) {
            // Go to section without showing CSS transition to prevent jumpy
            // animations caused by header & scroll animating at the same time.
            headerRef.current.classList.add(styles.noTransition)

            window.setTimeout(
                () => headerRef.current.classList.remove(styles.noTransition),
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
        }

        window.scrollTo(0, 0)
        event.preventDefault()
        return false
    }

    return (
        <header className={styles.header} ref={headerRef}>
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
                <SamuelLogo type="small" style={{ paddingLeft: '1em' }} />
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
