import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

// import styles from './FullpageBackground.module.css'

const BackgroundSection = ({ className }) => {
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
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
            alt="Seconds after the start of orienteering relay Tiomila 2015."
            durationFadeIn={10}
        />
    )
}

const FullpageBackground = styled(BackgroundSection)`
    position: fixed !important;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: -100;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

export default FullpageBackground
