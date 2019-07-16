import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import styles from './Header.module.css'

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            compass: file(relativePath: { eq: "compass.svg" }) {
                publicURL
            }
        }
    `)

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img
                    src={data.compass.publicURL}
                    alt="compass logo"
                    width="60"
                />
            </Link>
            <span className={styles.siteTitle}>
                <Link to="/">Samuel Plumppu</Link>
            </span>
            <nav className={styles.mainMenu}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header
