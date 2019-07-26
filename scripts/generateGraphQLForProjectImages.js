import { projectImages } from '/src/components/Projects'

/*
    Since Gatsby doesn't allow dynamic GraphQL-queries when fetching images at build time,
    this script can be used to generate the query manually, everytime project images change.

    Then copy the result back to the actual GraphQL query that's fetching the project images.
*/

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

const getGraphQLForImages = (config = projectImages) => {
    return Object.entries(config).reduce(
        (queryString, [projectId, imageName]) =>
            queryString + '\n' + getGraphQLForImage({ projectId, imageName }),
        ''
    )
}

// Copy the output from this call.
getGraphQLForImages()
