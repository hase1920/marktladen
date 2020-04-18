import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'
import { FaHome } from 'react-icons/fa'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/" activeClassName="active" aria-label="Zur Homeseite">
       <FaHome /> 
      </Link>
     
      <Link to="/veranstaltungen" activeClassName="active" aria-label="Veranstaltungen">
        Veranstaltungen
      </Link>
      <Link to="/ausstellungen" activeClassName="active" aria-label="Ausstellungen">
        Ausstellungen
      </Link>
      
      
      <Link to="/warumweshalb" activeClassName="active" aria-label="Unsere Motivation">
        Was will Markt 1?
      </Link>
      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
