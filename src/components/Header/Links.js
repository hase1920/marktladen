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

      <Link style={{fontWeight:100, fontFamily:"Roboto Slab"}} to="/ausstellung" activeClassName="active" aria-label="Ausstellungen">
        Ausstellung
      </Link>

      <Link style={{fontWeight:100, fontFamily:"Roboto Slab"}} to="/ueber_uns" activeClassName="active" aria-label="Über uns">
        Über uns
      </Link>
      <Link style={{fontWeight:100, fontFamily:"Roboto Slab"}} to="/termine" activeClassName="active" aria-label="Termine">
        Termine
      </Link>
      <Link style={{fontWeight:100, fontFamily:"Roboto Slab"}} to="/archiv" activeClassName="active" aria-label="Archiv">
      Archiv
      </Link>
      <Link style={{fontWeight:100, fontFamily:"Roboto Slab"}} to="/foerderer" activeClassName="active" aria-label="Förderer">
    Förderer
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
