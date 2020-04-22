import Typography from 'typography'
import '../fonts/fonts.css'

export const fonts = {
  regular: 'Roboto',
  regularItalic: 'Roboto Slab',
  semibold: 'Roboto',
  semiboldItalic: 'Roboto Slab',
  bold: 'Roboto Slab',
  boldItalic: 'Inter UI Bold Italic',
}

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.bold, 'serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',

  overrideStyles: ({ rhythm }) => ({
    a: {
      outline:'none',
    },
    h1: {
      color: 'hsla(0,0%,0%,0.75)',
    },
    h2: {
      color: 'hsla(0,0%,0%,0.775)',
      textAlign:'center',
    },
    h3: {
      color: 'hsla(0,0%,0%,0.8)',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },

  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
