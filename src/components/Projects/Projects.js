import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import Project from '../Project'
import Triangles from '../Triangles'

const Projects = React.memo(() => (
    <section>
        <Triangles color="var(--jet)" direction="top" position="top" />
        <h2 id="projects">Projects</h2>
        <ProjectShowcase />
        <Triangles color="var(--jet)" direction="bottom" />
    </section>
))

const ProjectShowcase = () => {
    // Fetch project data + images.
    // GraphQL to fetch images can be generated with `/scripts/generateGraphQLForProjectImages.js`
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

            isoConquest: file(relativePath: { eq: "iso-conquest.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            tabTyper: file(relativePath: { eq: "tab-typer.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            theResponsible: file(relativePath: { eq: "the-responsible.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            primeOrNot: file(relativePath: { eq: "numbers-prime-or-not.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            goaSpaceSurvival: file(
                relativePath: { eq: "goa-space-survival-2.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            achtungPanzer: file(
                relativePath: { eq: "achtung_intense_battle_wow_2.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            theNotSoBusyBusiness: file(
                relativePath: { eq: "the-not-so-busy-business.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const getProjectById = (id, projects = data.allMarkdownRemark.edges) => ({
        ...(projects.find(project => project.node.frontmatter.id === id) || {}),
    })
    const getImageById = (id, images = data) => images[id]

    const projects = Object.keys(projectImages).map(id => ({
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

// This object has two responsibilities:
//   1) Set the right image for each project
//   2) Decide the order that projects are shown. Reorder properties to change it.
export const projectImages = {
    isoConquest: 'iso-conquest.png',
    tabTyper: 'tab-typer.png',
    theResponsible: 'the-responsible.png',
    primeOrNot: 'numbers-prime-or-not.png',
    goaSpaceSurvival: 'goa-space-survival-2.png',
    achtungPanzer: 'achtung_intense_battle_wow_2.png',
    theNotSoBusyBusiness: 'the-not-so-busy-business.png',
}

export default Projects
