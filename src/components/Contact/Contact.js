import React from 'react'

import Triangles from '../Triangles'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <h2 id="contact">Contact</h2>
            <Triangles color="var(--orange)" direction="bottom" baseSize={30} />
        </section>
    )
}

export default Contact
