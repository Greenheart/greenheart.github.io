import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Triangles from '../Triangles'
import styles from './Skills.module.css'

const Skills = React.memo(() => {
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
        <section>
            <Triangles color="var(--jet)" direction="top" position="top" />
            <h2 id="skills">Skills</h2>
            <div className={styles.skillsContainer}>
                {getSkills(data)
                    .sort(byLevel)
                    .map(Skill)}
            </div>
            <Triangles color="var(--jet)" direction="bottom" />
        </section>
    )
})

const getSkills = data => data.allSkillsJson.edges.map(skill => skill.node)
const byLevel = (a, b) => b.level - a.level

const Skill = ({ skill, level }, i) => (
    <div className={styles.skill} key={i}>
        <span>{skill}</span>
        <div className={styles.bar}>
            <div className={styles.level} style={{ width: `${level * 10}%` }} />
        </div>
    </div>
)

export default Skills
