import React from 'react'
import { IoIosCode, IoIosLeaf } from 'react-icons/io'
import { DiOpensource } from 'react-icons/di'
import { FaMapMarkedAlt } from 'react-icons/fa'

import Triangles from '../Triangles'
import styles from './About.module.css'

const About = React.memo(() => (
    <section className={styles.about}>
        <Triangles color="var(--jet)" direction="top" position="top" />
        <h2 id="about">About</h2>
        <p>
            Hi! I'm Samuel &mdash; a Swedish orienteer, system developer and
            open source enthusiast currently living in Stockholm.
        </p>

        <div className={styles.topics}>
            <div className={styles.topic}>
                <p className={styles.icon}>
                    <IoIosCode />
                </p>
                <p>
                    I mostly work with full stack TypeScript, but I'm also
                    comfortable with other technologies. It all depends on
                    what's a good solution to the problem.
                </p>
            </div>

            <div className={styles.topic}>
                <p className={styles.icon}>
                    <DiOpensource />
                </p>
                <p>
                    Open source enthusiast who enjoys sharing what I learn and
                    help others. Former core team member of the education
                    non-profit{' '}
                    <a href="https://github.com/freeCodeCamp/freeCodeCamp">
                        freeCodeCamp.org
                    </a>
                </p>
            </div>

            <div className={styles.topic}>
                <p className={styles.icon}>
                    <IoIosLeaf />
                </p>
                <p>
                    Sustainability and environmental issues are key areas I want
                    to work with in the coming years. There's no programming on
                    a dead planet.
                </p>
            </div>

            <div className={styles.topic}>
                <p className={styles.icon}>
                    <FaMapMarkedAlt />
                </p>
                <p>
                    Orienteering - fun exercise while exploring new terrain. I
                    guess there couldn't be a better hobby as a developer,
                    always exploring new code.
                </p>
            </div>
        </div>

        <Triangles color="var(--jet)" direction="bottom" />
    </section>
))

export default About
