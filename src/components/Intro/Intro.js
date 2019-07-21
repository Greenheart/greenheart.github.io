import React from 'react'

import SamuelLogo from '../SamuelLogo'
import Chevron from '../Chevron'
import styles from './Intro.module.css'

const Intro = () => (
    <section className={styles.intro}>
        <div className={styles.logoContainer}>
            <SamuelLogo />
        </div>
        <a href="#about" className={styles.centerBottom}>
            <Chevron animated />
        </a>
    </section>
)

export default Intro
