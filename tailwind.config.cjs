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
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
