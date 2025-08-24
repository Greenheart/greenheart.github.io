import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'
import { markdocPreprocess, Markdoc } from 'markdoc-svelte'
import { type RenderableTreeNode } from '@markdoc/markdoc'
import { resolve } from 'path'

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

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', '.md', '.mdoc'],
    preprocess: [
        vitePreprocess(),
        markdocPreprocess({
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
                    transform(node, config) {
                        const attributes = node.transformAttributes(config)
                        const children = node.children.length
                            ? node.transformChildren(config)
                            : [node.attributes.content]

                        return new Markdoc.Tag('Code', {
                            ...attributes,
                            code: getTextContent(children),
                        })
                    },
                },
            },
        }),
    ],
    kit: {
        adapter: adapter(),
        alias: {
            $components: resolve('./src/components'),
            $data: resolve('./src/data'),
            $posts: 'src/content/posts',
        },
    },
}
