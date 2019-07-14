import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <StaticQuery
                query={graphql`
                    {
                        compass: file(relativePath: { eq: "compass.svg" }) {
                            publicURL
                        }
                    }
                `}
                render={data => (
                    <Link to="/">
                        <img
                            src={data.compass.publicURL}
                            alt="compass logo"
                            width="64"
                        />
                    </Link>
                )}
            />
            <span className={styles.siteTitle}>
                <Link to="/">Samuel Plumppu</Link>
            </span>
            <nav className={styles.mainMenu}>
                <Link to="#about">About</Link>
                <Link to="#projects">Projects</Link>
                <Link to="#skills">Skills</Link>
                <Link to="#contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header
