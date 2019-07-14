import React from 'react'

import Layout from '../components/Layout'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const IndexPage = () => {
    return (
        // TODO: possibly add Intro component too for website intro.
        <Layout>
            <About />
            <Projects />
            <Skills />
            <Contact />
        </Layout>
    )
}

export default IndexPage
