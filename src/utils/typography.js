import Typography from 'typography'

const headerFont = 'Roboto'
const bodyFont = 'Inconsolata'

// TODO: Remove unused CSS from Layout.module.css and other modules.
// Use this file as single source of truth for fonts, as far as possible.

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: [headerFont, 'sans-serif'],
    bodyFontFamily: [bodyFont, 'monospace'],
    googleFonts: [
        {
            name: headerFont,
            styles: ['100'],
        },
        {
            name: bodyFont,
            styles: ['400'],
        },
    ],
    bodyColor: '#000',
    includeNormalize: false,
})

export default typography
