import React from 'react'
import Img from 'gatsby-image'
import { IoLogoGithub, IoIosLink } from 'react-icons/io'

import { getCSSVariable } from '../../utils/Helpers'
import styles from './Project.module.css'

const Project = ({ project }) => {
    return (
        <article className={styles.project}>
            <div className={styles.projectImage}>
                <Img
                    fluid={project.img.childImageSharp.fluid}
                    alt={project.frontmatter.title}
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{
                        maxHeight: 'var(--project-image-height)',
                        objectFit: 'contain',
                    }}
                />
            </div>
            <div className={styles.projectTitle}>
                <h3>{project.frontmatter.title}</h3>
            </div>
            <div className={styles.projectDetails}>
                <aside className={styles.projectSidebar}>
                    <span className={styles.year}>
                        {project.frontmatter.year}
                    </span>

                    <ul>
                        {project.frontmatter.tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                    <span className={styles.links}>
                        {project.frontmatter.github ? (
                            <a
                                href={project.frontmatter.github}
                                title="View on GitHub"
                                className="icon-link"
                            >
                                <IoLogoGithub />
                            </a>
                        ) : (
                            ''
                        )}
                        {project.frontmatter.demo ? (
                            <a
                                href={project.frontmatter.demo}
                                title="View demo"
                                className="icon-link"
                            >
                                <IoIosLink />
                            </a>
                        ) : (
                            ''
                        )}
                    </span>
                </aside>
                <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: project.html }}
                />
            </div>
        </article>
    )
}

export default Project
