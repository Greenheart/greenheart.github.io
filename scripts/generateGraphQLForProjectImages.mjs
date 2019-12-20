/*
    Since Gatsby doesn't allow dynamic GraphQL-queries when fetching images at build time,
    this script can be used to generate the query manually, everytime project images change.

    Then copy the result back to the actual GraphQL query that's fetching the project images.

    ## Usage:

    1) Update projectImages in '/src/components/Projects/Projects.js' and copy the object to this file.
    2) Run script: node --experimental-modules scripts/generateGraphQLForProjectImages.mjs
    3) Paste resulting GraphQL query back into '/src/components/Projects/Projects.js'
*/

const projectImages = {}

const getGraphQLForImage = ({
    projectId,
    imageName,
    quality = 90,
    maxWidth = 1000,
}) =>
    `
${projectId}: file(relativePath: { eq: "${imageName}" }) {
    childImageSharp {
        fluid(quality: ${quality}, maxWidth: ${maxWidth}) {
            ...GatsbyImageSharpFluid_withWebp
        }
    }
}`.trim()

export const getGraphQLForImages = (config = projectImages) => {
    return Object.entries(config).reduce(
        (queryString, [projectId, imageName]) =>
            queryString + '\n' + getGraphQLForImage({ projectId, imageName }),
        ''
    )
}

// Copy the output from this call.
console.log(getGraphQLForImages())
