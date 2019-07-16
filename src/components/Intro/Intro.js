import React from 'react'

import styles from './Intro.module.css'

const Intro = () => {
    return (
        <section id="intro" className={styles.intro}>
            <div className={styles.introBg}>
                <h1>Samuel Plumppu</h1>
                <p>Swedish orienteer and developer</p>
                <span className={classnames(styles.triangle, styles.t1)} />
                <span className={classnames(styles.triangle, styles.t2)} />
                <span className={classnames(styles.triangle, styles.t3)} />
            </div>
        </section>
    )
}

const classnames = (...classes) => classes.join(' ')

export default Intro
