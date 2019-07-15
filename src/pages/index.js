import React from 'react'

import Layout from '../components/Layout'
import Intro from '../components/Intro'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const IndexPage = () => {
    return (
        <Layout>
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </Layout>
    )
}

export default IndexPage
