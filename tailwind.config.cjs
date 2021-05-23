const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                prussianBlue: '#1C3144',
                beauBlue: '#D4E1ED',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
