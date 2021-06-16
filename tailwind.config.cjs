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

                        a: {
                            position: 'relative',
                            textDecoration: 'none',
                            lineHeight: 1,
                            zIndex: 0,
                            color: theme('colors.black'),
                            display: 'inline-block',
                            overflow: 'hidden',
                            padding: '5px',
                            verticalAlign: 'bottom',
                            transition: 'color .2s ease-out',
                            '&::before': {
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                content: '" "',
                                display: 'inline-block',
                                transform: 'translateY(calc(100% - 2px))',
                                backgroundImage: `linear-gradient(60deg, ${theme(
                                    'colors.pacificBlue',
                                )} 0%, ${theme('colors.mantis')} 100%)`,
                                transition: 'transform .2s ease-out',
                            },
                            '&:hover::before': {
                                transform: 'translateY(0)',
                                transition: 'transform .2s ease-out',
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
