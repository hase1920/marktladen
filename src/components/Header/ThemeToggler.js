import React from 'react'
import Button from './Button'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../Theming'

const DarkMode = styled(FiMoon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const DefaultMode = styled(FiSun)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const ThemeToggler = ({ toggleTheme, themeName }) => {
  const theme = useTheme()
  return (
    <Button
      css={{
        border:'1px red solid',
        zIndex: 3000,
        borderRadius: '50%',
        width: '1.375rem',
        height: '1.375rem',
        margin:'auto',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        borderStyle: 'solid',
        borderWidth: '1px',
        color: theme.colors.white,
        background: theme.colors.headerBg,
        '@media (hover: hover)': {
          ':hover': {
            background:
              theme.themeName === 'default'
                ? theme.colors.text
                : theme.colors.primary,
          },
        },
      }}
      aria-label={
        themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
      onClick={() => toggleTheme(themeName === 'dark' ? 'default' : 'dark')}
    >
      {themeName === 'dark' ? (
        <DefaultMode title="Switch to light mode" />
      ) : (
        <DarkMode title="Switch to dark mode" />
      )}
    </Button>
  )
}
export default ThemeToggler
