import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'
import fontsizes from '../lib/fontsizes'

const themes = {
  default: {
    themeName: 'default',
    fontsizes: {
      h2great: fontsizes.h2great,
      h2small: fontsizes.h2small,
      h3small: fontsizes.h3small,
      h3great: fontsizes.h3great,
      h4small: fontsizes.h4small,
      h4great: fontsizes.h4great,
      great: fontsizes.great,
      small: fontsizes.small,
      ...fontsizes,
    },
    colors: {
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.white,
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
      h2small: fontsizes.h2small,
      h2great: fontsizes.h2great,
      h3small: fontsizes.h3small,
      h3great: fontsizes.h3great,
      h4small: fontsizes.h4small,
      h4great: fontsizes.h4great,
      great: fontsizes.great,
      small: fontsizes.small,
      ...fontsizes,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
