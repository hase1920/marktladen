import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'
import { FaHome } from 'react-icons/fa'
import { css} from '@emotion/core'

export default () => {
  const theme = useTheme()
  return (
    <div 
      css={css`
      position:fixed;
      overflow:scroll;
      height:100%;
      top:0;
      left:0;
      right:0;
      display:flex;
      padding:50px 0;
      justify-content:center;
      background:blue;
      flex-direction:column;
      a {
        text-align:center;
        padding-left:0;
       
      }
      @media (max-width:800px) (orientation: landscape){
        padding-top:40px;
        body {
          font-size:12px;
        }
       
      a {
        font-size: .9rem;
         color:white;
         padding:0;
         margin:0;
         background:red;
         
         
      }
      }
      `
    }>
      <Link
        
      to="/" activeClassName="active" aria-label="Zur Homeseite">
       <FaHome />
      </Link>

      <Link 
    
       to="/ausstellung" activeClassName="active" aria-label="Ausstellungen">
        Ausstellung
      </Link>

      <Link to="/ueber_uns" activeClassName="active" aria-label="Über uns">
        Über uns
      </Link>
      <Link  to="/termine" activeClassName="active" aria-label="Termine">
        Termine
      </Link>
      <Link to="/archiv" activeClassName="active" aria-label="Archiv">
      Archiv
      </Link>
      <Link to="/foerderer" activeClassName="active" aria-label="Förderer">
    Förderer
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </div>
  )
}
