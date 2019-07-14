import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './About.module.css'

const About = () => {
    return (
        <StaticQuery
            query={graphql`
                {
                    Tiomila2015: file(
                        relativePath: { eq: "Tiomila2015-HD.jpg" }
                    ) {
                        childImageSharp {
                            fluid(maxWidth: 2000) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            `}
            render={data => (
                <section class={styles.about} id="about">
                    <p>About</p>
                    <Img
                        fluid={data.Tiomila2015.childImageSharp.fluid}
                        alt="Seconds after the start of orienteering relay Tiomila 2015."
                    />
                </section>
            )}
        />
    )
}

export default About
