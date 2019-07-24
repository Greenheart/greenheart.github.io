import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/lib/styles/css/swiper.css'

import Project from '../Project'
import Triangles from '../Triangles'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <section className={styles.projects}>
            <h2 id="projects">Projects</h2>
            <ProjectShowcase />
            <Triangles color="var(--orange)" direction="bottom" baseSize={30} />
        </section>
    )
}

const ProjectShowcase = () => {
    const props = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    }

    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            tech
                            github
                            demo
                            year
                        }
                        html
                    }
                }
            }
        }
    `)

    const projects = data.allMarkdownRemark.edges.map(p => p.node)

    return (
        <section className={styles.projectShowcase}>
            <Swiper {...props}>
                {projects.map(p => (
                    <Project project={p} key={p.frontmatter.title} />
                ))}
            </Swiper>
        </section>
    )
}

export default Projects
