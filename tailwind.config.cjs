const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        colors: {
            pacificBlue: '#46B4C7',
            ming: '#256D7A',
            cedarChest: '#C76350',
            mantis: '#5AC75F',
            fernGreen: '#3D7A40',
            white: '#fff',
            honeydew: '#D6EAD7',
            black: '#000',
        },
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
                        'ol > li::before': {
                            color: theme('colors.black'),
                        },
                        'ul > li::before': {
                            backgroundColor: theme('colors.black'),
                        },
                        hr: {
                            color: theme('colors.black'),
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
                            background: '#011627',
                            color: theme('colors.white'),
                            padding: 4,
                            borderRadius: '4px',
                            marginRight: '1px',
                            wordBreak: 'break-word',
                            whiteSpace: 'nowrap',
                        },
                        strong: {
                            color: theme('colors.black')
                        }
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
