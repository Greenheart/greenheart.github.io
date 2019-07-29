import React from 'react'

import Triangles from '../Triangles'

const About = React.memo(() => (
    <section>
        <Triangles color="var(--jet)" direction="top" position="top" />
        <h2 id="about">About</h2>
        <p>
            Hi! I'm Samuel, an orienteer, system developer and open source
            enthusiast currently living in Stockholm, Sweden.
        </p>
        <p>
            I'm a creator who enjoys solving problems, learning and constantly
            challenging my abilities. Another thing I really love is to share my
            knowledge and help others. In fact, I think we're better off by{' '}
            <a href="https://github.com/Greenheart">sharing our creations</a>.
            This allows others to learn from our experience, and give a starting
            point for new creations. Just look at the impact of open source
            software in the past twenty years.
        </p>

        <p>
            I currently focus on full stack JavaScript development, but I'm also
            open to using other technology stacks. By programming regularly
            since late 2013 and working with various technologies, I've come to
            a point where I can take my general programming knowledge and apply
            it to several different languages and environments. It all depends
            on what is a good solution for the problem.
        </p>

        <p>
            Since the late summer 2015, I've been involved in the learning
            community <a href="https://freecodecamp.org/">freeCodeCamp</a>,
            volunteering as a programming mentor, course content creator and
            developer. This has not only taught me about software development or
            managing large-scale projects, but also about how to effectively
            communicate and work as a team. Because of this, I care about
            creating a good team environment where people are encouraged to help
            each other learn and grow.
        </p>

        <p>
            As you might have guessed from the background image, another big
            part of my life is orienteering. This is a sport that gives
            challenging problem solving, good exercise and sometimes even
            adventures! I practice regularly and like to explore how different
            it can be to navigate in new terrain. Guess there couln't be a
            better hobby for a developer, constantly exploring new code.
        </p>

        <Triangles color="var(--jet)" direction="bottom" />
    </section>
))

export default About
