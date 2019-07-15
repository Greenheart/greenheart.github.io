import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './Intro.module.css'

const Intro = () => {
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

    return (
        <section id="intro">
            <p>Intro</p>
            <Img
                fluid={data.Tiomila2015.childImageSharp.fluid}
                alt="Seconds after the start of orienteering relay Tiomila 2015."
            />
        </section>
    )
}

export default Intro
