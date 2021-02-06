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

    return (
        <BackgroundImage
            className={styles.background}
            fluid={data.Tiomila2015.childImageSharp.fluid}
            alt="Seconds after the start of orienteering relay Tiomila 2015."
            durationFadeIn={10}
            loading="eager"
        />
    )
}

export default FullpageBackground
