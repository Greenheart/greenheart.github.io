import React from 'react'
import Img from 'gatsby-image'

import styles from './Project.module.css'

const Project = ({ project }) => {
    return (
        <article className={styles.project}>
            <div className={styles.projectImage}>
                <Img
                    fluid={project.img.childImageSharp.fluid}
                    alt={project.frontmatter.title}
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ maxHeight: '400px', objectFit: 'contain' }}
                />
            </div>
            <div className={styles.projectTitle}>
                <h3>{project.frontmatter.title}</h3>
            </div>
            <div>
                <h4>Tech</h4>
                <ul>
                    {project.frontmatter.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
                <span>{project.frontmatter.year}</span>
                {/* TODO: ADD github- and demo links */}
            </div>
            <div
                className="description"
                dangerouslySetInnerHTML={{ __html: project.html }}
            />
        </article>
    )
}

export default Project
