import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import styles from './FullpageBackground.module.css'

const BackgroundSection = ({ className }) => {
    const data = useStaticQuery(graphql`
        {
            Tiomila2015: file(relativePath: { eq: "Tiomila2015-HD.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
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
        />
    )
}

const FullpageBackground = styled(BackgroundSection)`
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100vw;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default FullpageBackground
