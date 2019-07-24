import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { join } from '../../utils/Helpers'
import Triangles from '../Triangles'
import styles from './SamuelLogo.module.css'

const SamuelLogo = ({ type = 'default', style = {} }) => {
    const data = useStaticQuery(graphql`
        {
            spLogo: file(relativePath: { eq: "sp-logo.svg" }) {
                publicURL
            }
        }
    `)
    const [hasLoaded, setHasLoaded] = useState(false)

    return type === 'small' ? (
        <img
            src={data.spLogo.publicURL}
            alt="Samuel Plumppu name logo"
            style={Object.assign(
                {
                    height: '1.2em',
                },
                style
            )}
        />
    ) : (
        <div className={styles.samuelLogo}>
            <img
                src={data.spLogo.publicURL}
                alt="Samuel Plumppu name logo"
                style={Object.assign(
                    {
                        width: '20em',
                        height: '1.32em',
                        visibility: hasLoaded ? 'visible' : 'hidden',
                    },
                    style
                )}
                className={
                    hasLoaded
                        ? join(styles.logo, 'animated', 'fadeInLeft', 'faster')
                        : styles.samuelLogo
                }
                onLoad={() => setHasLoaded(true)}
            />
            <p>Swedish orienteer and developer</p>

            <div className={styles.logoBg}>
                <Triangles color="white" direction="top" />
            </div>
        </div>
    )
}

export default SamuelLogo