import React from 'react'

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
            <section className={styles.projects} id="projects">
                <h2>Projects</h2>
            </section>
        )
    }
}

export default Projects
