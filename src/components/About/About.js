import React from 'react'

import Triangles from '../Triangles'

const About = () => {
    return (
        <section>
            <h2 id="about">About</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt facere quibusdam assumenda explicabo temporibus,
                veritatis voluptas facilis blanditiis cum nostrum hic autem nam,
                in dolorem ducimus officia, officiis soluta corrupti.
            </p>
            <Triangles color="var(--orange)" direction="bottom" baseSize={30} />
        </section>
    )
}

export default About
