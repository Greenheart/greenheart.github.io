module.exports = {
    siteMetadata: {
        title: `Samuel Plumppu | System Developer interested in Climate and Sustainability`,
        description: `Swedish orienteer and system developer interested in climate and sustainability.`,
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
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/projects`,
                name: `projects`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Samuel Plumppu | System Developer',
                short_name: 'Samuel Plumppu',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#f49e4c',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'src/images/compass-icon-square.svg', // This path is relative to the root of the site.
                icons: [
                    {
                        src: 'images/favicon-32x32.png',
                        sizes: '32x32',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '48x48',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '72x72',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '96x96',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '144x144',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '192x192',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '256x256',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '384x384',
                    },
                    {
                        src: 'images/compass-icon-square.svg',
                        sizes: '512x512',
                    },
                ],
            },
        },
    ],
}
