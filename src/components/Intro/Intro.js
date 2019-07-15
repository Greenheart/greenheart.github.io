import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import styles from './Intro.module.css'

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
        <section id="intro" className={styles.intro}>
            <BackgroundImage
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}
                alt="Seconds after the start of orienteering relay Tiomila 2015."
            />
        </section>
    )
}

const Intro = styled(BackgroundSection)`
    width: 100%;
    height: 100%;
    background-position: 55% 20%;
    background-repeat: no-repeat;
    background-size: cover;
`

export default Intro
