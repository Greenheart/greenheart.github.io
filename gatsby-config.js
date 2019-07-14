module.exports = {
    siteMetadata: {
        title: `Samuel Plumppu | System Developer`,
        description: `Swedish orienteer and system developer.`,
        author: `Samuel Plumppu`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
}
