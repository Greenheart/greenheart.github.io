module.exports = {
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: '75ch',
                        color: theme('colors.black'),
                        h1: {
                            color: theme('colors.black'),
                        },
                        h2: {
                            color: theme('colors.black'),
                        },
                        h3: {
                            color: theme('colors.black'),
                        },
                        h4: {
                            color: theme('colors.black'),
                        },
                        h5: {
                            color: theme('colors.black'),
                        },
                        h6: {
                            color: theme('colors.black'),
                        },
                        'ol > li::marker': {
                            color: theme('colors.black'),
                        },
                        'ul > li::marker': {
                            backgroundColor: theme('colors.black'),
                        },
                        hr: {
                            borderColor: theme('colors.ming'),
                        },
                        blockquote: {
                            color: theme('colors.black'),
                        },
                        'code::before': {
                            content: '',
                        },
                        'code::after': {
                            content: '',
                        },
                        code: {
                            background: theme('colors.ming'),
                            color: theme('colors.white'),
                            padding: '2px 4px',
                            borderRadius: '4px',
                            marginRight: '1px',
                            wordBreak: 'break-word',
                            whiteSpace: 'nowrap',
                            fontWeight: 500,
                        },
                        strong: {
                            color: theme('colors.black'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
