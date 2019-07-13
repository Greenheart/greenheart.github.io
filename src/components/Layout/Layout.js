import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
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
        <div className={styles.container}>
            <Header siteTitle={site.siteMetadata.title} />
            <main>{children}</main>
            <footer>© {new Date().getFullYear() + ' Samuel Plumppu'}</footer>
        </div>
    )
}

export default Layout
