import React from 'react'

import Triangles from '../Triangles'

const About = React.memo(() => (
    <section>
        <Triangles color="var(--jet)" direction="top" position="top" />
        <h2 id="about">About</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            facere quibusdam assumenda explicabo temporibus, veritatis voluptas
            facilis blanditiis cum nostrum hic autem nam, in dolorem ducimus
            officia, officiis soluta corrupti.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            corrupti accusamus illo ab deserunt enim et harum earum ipsam?
            Perferendis soluta tenetur vero numquam culpa porro facere sed
            laborum at?
        </p>
        <Triangles color="var(--jet)" direction="bottom" />
    </section>
))

export default About
