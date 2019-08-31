import React, { useEffect, useRef, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { throttleAnimationFrame, join } from '../../utils/Helpers'
import SamuelLogo from '../SamuelLogo'
import MobileMenu from '../MobileMenu/'
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
        // Go to section without showing CSS transition to prevent jumpy
        // animations caused by header & scroll animating at the same time.
        headerRef.current.classList.add(styles.noTransition)

        window.setTimeout(
            () => headerRef.current.classList.remove(styles.noTransition),
            500
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
        }

        window.scrollTo(0, 0)
        event.preventDefault()
        return false
    }

    const goToSection = event => {
        if (window.scrollY < scrollThreshold) {
            temporarilyDisableTransitions()
        }
        document.querySelector(event.target.hash).scrollIntoView()
        event.preventDefault()
        return false
    }

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.container}>
                <div className={styles.left}>
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
                            style={{
                                opacity: menuIsOpen ? 1 : 0,
                                paddingLeft: '1em',
                            }}
                        >
                            <SamuelLogo type="small" />
                        </a>
                    </div>
                </div>
                <nav className={styles.mainMenu}>
                    <a href="#about" onClick={goToSection}>
                        About
                    </a>
                    <a href="#projects" onClick={goToSection}>
                        Projects
                    </a>
                    <a href="#skills" onClick={goToSection}>
                        Skills
                    </a>
                    <a href="#contact" onClick={goToSection}>
                        Contact
                    </a>
                </nav>
                <MobileMenu
                    goToSection={goToSection}
                    setMenuIsOpen={setMenuIsOpen}
                />
            </div>
        </header>
    )
}

export default Header
