import React from 'react'

import Header from '../Header'
/* eslint-disable-next-line */
import variables from './variables.module.css'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}>{children}</main>
            <footer className={styles.footer}>
                © {new Date().getFullYear() + ' Samuel Plumppu'}
            </footer>
        </div>
    )
}

export default Layout
