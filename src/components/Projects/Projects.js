import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel from 'nuka-carousel'

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
        <Carousel wrapAround width="100%" transitionMode="fade">
            {projects.map((p, i) => (
                <Project project={p} key={i} />
            ))}
        </Carousel>
    )
}

export default Projects
