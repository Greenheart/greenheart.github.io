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
                            id
                        }
                        html
                    }
                }
            }
        }
    `)

    const getProjectById = (id, projects = data.allMarkdownRemark.edges) => ({
        ...(projects.find(project => {
            return project.node.frontmatter.id === id
        }) || {}),
    })
    const getImageById = (id, images = data) => images[id]

    const projects = [
        'iso-conquest',
        'tab-typer',
        'the-responsible',
        'prime-or-not',
        'goa-space-survival',
        'achtung-panzer',
        'the-not-so-busy-business',
    ].map(id => ({
        ...getProjectById(id).node,
        img: getImageById(id),
    }))

    return (
        <Carousel infinite arrows keepDirectionWhenDragging>
            {projects.map(p => (
                <Project project={p} key={p.frontmatter.id} />
            ))}
        </Carousel>
    )
}

export default Projects
