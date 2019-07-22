import React, { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { throttleAnimationFrame } from '../../utils/Helpers'
import SamuelLogo from '../SamuelLogo'
import styles from './Header.module.css'
import { join } from '../../utils/Helpers'

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            compass: file(relativePath: { eq: "compass-no-bg-optimized.svg" }) {
                publicURL
            }
        }
    `)

    const headerRef = useRef()
    const logoRef = useRef()
    const scrollThreshold = 70

    useEffect(() => {
        let lastScrollPos = window.scrollY

        const updateHeader = () => {
            const direction = window.scrollY < lastScrollPos ? 'up' : 'down'
            if (direction === 'up' && window.scrollY < scrollThreshold) {
                headerRef.current.classList.remove(styles.scrolled)
                logoRef.current.classList.remove('fadeIn')
                logoRef.current.classList.add(styles.disabled)
            } else if (window.scrollY >= scrollThreshold) {
                headerRef.current.classList.add(styles.scrolled)
                logoRef.current.classList.remove(styles.disabled)
                logoRef.current.classList.add('fadeIn')
            }

            lastScrollPos = window.scrollY
        }

        // This update ensures the header behaves as expected no matter what scrollY the page loads at.
        updateHeader()
        const onScroll = throttleAnimationFrame(updateHeader)

        // Attach listener and return cleanup function to remove it.
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [headerRef, logoRef, scrollThreshold])

    const temporarilyDisableTransitions = () => {
        if (window.scrollY < scrollThreshold) {
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
                <div className={styles.smallLogoWrapper}>
                    <a
                        href="/"
                        onClick={showIntroWithoutReload}
                        ref={logoRef}
                        className={join(
                            styles.smallLogo,
                            styles.disabled,
                            'animated',
                            'faster'
                        )}
                        style={{ opacity: 0, paddingLeft: '1em' }}
                    >
                        <SamuelLogo type="small" />
                    </a>
                </div>
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
