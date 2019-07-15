import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './Skills.module.css'

const Skills = () => {
    const data = useStaticQuery(graphql`
        query SkillsQuery {
            allSkillsJson {
                edges {
                    node {
                        skill
                        level
                    }
                }
            }
        }
    `)

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className={styles.skillsContainer}>
                {getSkills(data)
                    .sort(byLevel)
                    .map(Skill)}
            </div>
        </section>
    )
}

const getSkills = data => data.allSkillsJson.edges.map(skill => skill.node)
const byLevel = (a, b) => b.level - a.level

const Skill = ({ skill, level }) => (
    <div className={styles.skill}>
        <span>{skill}</span>
        <div className={styles.bar}>
            <div className={styles.level} style={{ width: `${level * 10}%` }} />
        </div>
    </div>
)

export default Skills
