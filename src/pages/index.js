import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'

const IndexPage = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Layout>
            <p>Under construction</p>
        </Layout>
    )
}

export default IndexPage
