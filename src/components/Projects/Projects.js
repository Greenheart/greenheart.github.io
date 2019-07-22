import React from 'react'

import Triangles from '../Triangles'
import styles from './Projects.module.css'

class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        // TODO: fetch projects data.
        // Then show them using a `Project`-component. `Projects` is the stateful wrapper, letting users navigate each project.
    }

    render() {
        return (
            <section className={styles.projects}>
                <h2 id="projects">Projects</h2>
                <Triangles
                    color="var(--orange)"
                    direction="bottom"
                    baseSize={30}
                />
            </section>
        )
    }
}

export default Projects
