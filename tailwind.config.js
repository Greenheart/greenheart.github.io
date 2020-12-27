module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            orange: {
                DEFAULT: '#f49e4c',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
