import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

import Triangles from '../Triangles'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <h2 id="contact">Contact</h2>
            <p>Do you have a project I might be interested in? Let's chat!</p>
            <div className={styles.links}>
                <a
                    href="https://github.com/Greenheart"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoLogoGithub />
                </a>
                <a
                    href="https://linkedin.com/in/samuelplumppu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoLogoLinkedin />
                </a>
                <a href="mailto:samuel.plumppu@gmail.com">
                    <IoMdMail />
                </a>
            </div>
            <Triangles color="var(--orange)" direction="bottom" baseSize={30} />
        </section>
    )
}

export default Contact
