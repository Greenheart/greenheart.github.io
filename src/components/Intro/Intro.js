import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Chevron from '../Chevron/Chevron'
import styles from './Intro.module.css'
import { join } from '../../utils/Helpers'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.content}>
                    <SamuelLogo />
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
                <Chevron animated />
            </a>
        </section>
    )
}

const SamuelLogo = () => {
    const data = useStaticQuery(graphql`
        {
            spLogo: file(relativePath: { eq: "sp-logo.svg" }) {
                publicURL
            }
        }
    `)

    return (
        <img
            src={data.spLogo.publicURL}
            alt="Samuel Plumppu name logo"
            style={{ width: '20em', height: '1.32em' }}
            className={styles.samuelLogo}
        />
    )
}

export default Intro
