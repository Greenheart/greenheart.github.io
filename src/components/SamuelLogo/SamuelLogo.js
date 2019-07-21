import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import 'animate.css'

import { join } from '../../utils/Helpers'
import styles from './SamuelLogo.module.css'

const SamuelLogo = () => {
    const data = useStaticQuery(graphql`
        {
            spLogo: file(relativePath: { eq: "sp-logo.svg" }) {
                publicURL
            }
        }
    `)

    const [hasLoaded, setHasLoaded] = useState(false)

    return (
        <div className={styles.samuelLogo}>
            <img
                src={data.spLogo.publicURL}
                alt="Samuel Plumppu name logo"
                style={{
                    width: '20em',
                    height: '1.32em',
                    visibility: hasLoaded ? 'visible' : 'hidden',
                }}
                className={
                    hasLoaded
                        ? join(styles.logo, 'animated', 'fadeInLeft', 'faster')
                        : styles.samuelLogo
                }
                onLoad={() => setHasLoaded(true)}
            />
            <p>Swedish orienteer and developer</p>

            <div className={styles.logoBg}>
                <div className={styles.trianglesContainer}>
                    <span className={join(styles.triangle, styles.t3)} />
                    <span className={join(styles.triangle, styles.t2)} />
                    <span className={join(styles.triangle, styles.t1)} />
                </div>
            </div>
        </div>
    )
}

export default SamuelLogo
