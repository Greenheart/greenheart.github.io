import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import styles from './FullpageBackground.module.css'

const FullpageBackground = () => {
    const data = useStaticQuery(graphql`
        {
            Tiomila2015: file(relativePath: { eq: "Tiomila2015.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 2000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const imageData = data.Tiomila2015.childImageSharp.fluid
    return (
        <BackgroundImage
            className={styles.background}
            fluid={imageData}
            backgroundColor={`#040e18`}
            alt="Seconds after the start of orienteering relay Tiomila 2015."
            durationFadeIn={10}
        />
    )
}

export default FullpageBackground
