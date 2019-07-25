import React from 'react'

import styles from './Project.module.css'

const Project = ({ project }) => {
    return (
        <article className={styles.project}>
            {/* TODO: Add project Image */}
            <h3>{project.frontmatter.title}</h3>
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
