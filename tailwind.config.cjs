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
            pacificWhiteBlue: '#C0E6EC',
            ming: '#256D7A',
            cedarChest: '#C76350',
            mantis: '#5AC75F',
            fernGreen: '#3D7A40',
            white: '#fff'
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
