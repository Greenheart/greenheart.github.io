import React, { useMemo, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import Project from '../Project'
import Triangles from '../Triangles'
import { join } from '../../utils/Helpers'
import styles from './Projects.module.css'

const Projects = React.memo(() => (
    <section className={styles.projects}>
        <Triangles color="var(--jet)" direction="top" position="top" />
        <h2 id="projects">Projects</h2>
        <div className={styles.carouselWrapper}>
            <ProjectShowcase />
        </div>
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

            swipeForFuture: file(
                relativePath: { eq: "Swipe for Future 2020-05-23.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            xkcdCacher: file(relativePath: { eq: "xkcd-cacher.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
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

    const projects = useMemo(() => {
        const getProjectById = (
            id,
            projects = data.allMarkdownRemark.edges
        ) => ({
            ...(projects.find(project => project.node.frontmatter.id === id) ||
                {}),
        })
        const getImageById = (id, images = data) => images[id]

        return Object.keys(projectImages).map(id => ({
            ...getProjectById(id).node,
            img: getImageById(id),
        }))
        // Disable warning about external dependency projectImages for thie useMemo()
        // since it doesn't apply in this case, where projectImages never is mutated.
        // eslint-disable-next-line
    }, [projectImages, data])

    const projectSlides = useMemo(
        () => projects.map(p => <Project project={p} key={p.frontmatter.id} />),
        [projects]
    )

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
    }

    const slider = useRef()

    return (
        <>
            <div className={styles.navButtons}>
                <button
                    className={join(styles.navButton, styles.prev)}
                    onClick={e => slider.current.slickPrev()}
                >
                    <IoIosArrowBack />
                </button>
                <button
                    className={join(styles.navButton, styles.next)}
                    onClick={e => slider.current.slickNext()}
                >
                    <IoIosArrowForward />
                </button>
            </div>
            <Slider ref={slider} {...settings}>
                {projectSlides}
            </Slider>
        </>
    )
}

// This object has two responsibilities:
//   1) Set the right image for each project
//   2) Decide the order that projects are shown. Reorder properties to change it.
const projectImages = {
    swipeForFuture: 'Swipe for Future 2020-05-23.png',
    xkcdCacher: 'xkcd-cacher.png',
    isoConquest: 'iso-conquest.png',
    tabTyper: 'tab-typer.png',
    theResponsible: 'the-responsible.png',
    primeOrNot: 'numbers-prime-or-not.png',
    goaSpaceSurvival: 'goa-space-survival-2.png',
    achtungPanzer: 'achtung_intense_battle_wow_2.png',
    theNotSoBusyBusiness: 'the-not-so-busy-business.png',
}

export default Projects
