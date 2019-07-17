import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import variables from './variables.module.css'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={styles.layout}>
            <Header siteTitle={site.siteMetadata.title} />
            <main className={styles.content}>{children}</main>
            <footer className={styles.footer}>
                © {new Date().getFullYear() + ' Samuel Plumppu'}
            </footer>
        </div>
    )
}

export default Layout
