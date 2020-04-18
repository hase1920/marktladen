import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'
import fontsizes from '../lib/fontsizes'

const themes = {
  default: {
    themeName: 'default',
    fontsizes: {
      h2small: fontsizes.small,
      h2middle: fontsizes.middle,
      h2great: fontsizes.great,
      h3small: fontsizes.small,
      h3middle: fontsizes.middle,
      h3great: fontsizes.great,
      small: fontsizes.small,
      middle: fontsizes.middle,
      great: fontsizes.great,
      xgreat: fontsizes.xgreat,
      ...fontsizes,
    },
    colors: {
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.black,
      link: colors.black,
      ...colors,
    },
  
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, colors.blue),
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: lighten(0.05, colors.gray),
      ...colors,
    },
    fontsizes: {
      h2small: fontsizes.small,
      h2middle: fontsizes.middle,
      h2great: fontsizes.great,
      h3small: fontsizes.small,
      h3middle: fontsizes.middle,
      h3great: fontsizes.great,
      small: fontsizes.small,
      middle: fontsizes.middle,
      great: fontsizes.great,
      xgreat: fontsizes.xgreat,
      ...fontsizes,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
