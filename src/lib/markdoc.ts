import { Markdoc, markdocPreprocess } from 'markdoc-svelte'
import { type RenderableTreeNode } from '@markdoc/markdoc'
import { getHighlightedCode } from './shiki-ssr.ts'

const getTextContent = (children: RenderableTreeNode[]): string => {
    return children.reduce((text: string, child): string => {
        if (typeof child === 'string' || typeof child === 'number') {
            return text + child
        } else if (typeof child === 'object' && Markdoc.Tag.isTag(child)) {
            return text + getTextContent(child.children)
        }
        return text
    }, '')
}

export const markdocConfig: Parameters<typeof markdocPreprocess>[0] = {
    components: '$components',
    tags: {},
    nodes: {
        link: {
            ...Markdoc.nodes.link,
            render: 'Link',
        },
        fence: {
            attributes: {
                ...Markdoc.nodes.fence.attributes,
            },
            render: 'Code',
            async transform(node, config) {
                const attributes = node.transformAttributes(config)
                const children = node.children.length
                    ? node.transformChildren(config)
                    : [node.attributes.content]

                // Prerender the code on the server to improve performance
                const codeHTML = await getHighlightedCode(
                    getTextContent(children),
                    attributes['data-language'],
                )

                return new Markdoc.Tag('Code', { codeHTML })
            },
        },
    },
}
