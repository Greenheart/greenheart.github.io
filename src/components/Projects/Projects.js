import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import Project from '../Project'
import Triangles from '../Triangles'

const Projects = () => {
    return (
        <section>
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
        <Carousel infinite arrows keepDirectionWhenDragging>
            {projects.map((p, i) => (
                <Project project={p} key={i} />
            ))}
        </Carousel>
    )
}

export default Projects
