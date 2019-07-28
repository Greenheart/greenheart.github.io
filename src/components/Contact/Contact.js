import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

import Triangles from '../Triangles'
import styles from './Contact.module.css'

const Contact = React.memo(() => (
    <section className={styles.contact}>
        <Triangles color="var(--jet)" direction="top" position="top" />
        <h2 id="contact">Contact</h2>
        <p>Do you have a project I might be interested in? Let's chat!</p>
        <div className={styles.links}>
            <a href="https://github.com/Greenheart">
                <IoLogoGithub />
            </a>
            <a href="https://linkedin.com/in/samuelplumppu">
                <IoLogoLinkedin />
            </a>
            <a href="mailto:samuel.plumppu@gmail.com">
                <IoMdMail />
            </a>
        </div>
        <Triangles color="var(--jet)" direction="bottom" />
    </section>
))

export default Contact
