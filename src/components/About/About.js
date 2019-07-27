import React from 'react'

import Triangles from '../Triangles'

const About = React.memo(() => (
    <section>
        <Triangles color="var(--orange)" direction="top" position="top" />
        <h2 id="about">About</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            facere quibusdam assumenda explicabo temporibus, veritatis voluptas
            facilis blanditiis cum nostrum hic autem nam, in dolorem ducimus
            officia, officiis soluta corrupti.
        </p>
        <Triangles color="var(--orange)" direction="bottom" />
    </section>
))

export default About
