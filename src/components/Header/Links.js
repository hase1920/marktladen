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

      <Link to="/ausstellung" activeClassName="active" aria-label="Ausstellungen">
        Ausstellung
      </Link>

      <Link to="/ueber_uns" activeClassName="active" aria-label="Über uns">
        Über uns
      </Link>
      <Link to="/termine" activeClassName="active" aria-label="Termine">
        Termine
      </Link>
      <Link to="/archiv" activeClassName="active" aria-label="Archiv">
      Archiv
      </Link>
      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
