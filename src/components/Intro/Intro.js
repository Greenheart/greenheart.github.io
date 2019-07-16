import React from 'react'

import Chevron from '../Chevron/Chevron'
import styles from './Intro.module.css'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.content}>
                <h1 id="intro">Samuel Plumppu</h1>
                <p>Swedish orienteer and developer</p>

                <div className={styles.introBg}>
                    <div className={styles.trianglesContainer}>
                        <span className={join(styles.triangle, styles.t3)} />
                        <span className={join(styles.triangle, styles.t2)} />
                        <span className={join(styles.triangle, styles.t1)} />
                    </div>
                </div>
            </div>

            <a href="#about" className={styles.centerBottom}>
                <Chevron />
            </a>
        </section>
    )
}

const join = (...classes) => classes.join(' ')

export default Intro
