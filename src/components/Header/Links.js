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

      <Link style={{fontSize:"0.8rem",fontWeight:300, letterSpacing: "0.05rem"}} to="/datenschutz" activeClassName="active" aria-label="Datenschutzerklärung">
          Datenschutz
      </Link>
      <Link style={{fontSize:"0.8rem",fontWeight:300, letterSpacing: "0.05rem"}} to="/kontakt" activeClassName="active" aria-label="Kontakt">
        Kontakt
      </Link>
      <Link style={{fontSize:"0.8rem", fontWeight:300, letterSpacing: "0.05rem", marginBottom:50}} to="/impressum" activeClassName="active" aria-label="Impressum">
        Impressum
      </Link>
      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
