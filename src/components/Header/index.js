import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import {FaRegEnvelope} from 'react-icons/fa'
import MobileMenu from './MobileMenu'
import Links from './Links'
import Logo from './logo.png'
import Container from '../Container'


const Header = ({ site,siteTitle }) => {
  const theme = useTheme()
  console.log(theme)
  return (
    <Container noVerticalPadding>
        <div css={css`
         display:flex;
         justify-content:flex-end;
         padding-top:0px;
       `}><span style={{padding:0,margin:'0 -4px 0 0'}}> <a href="mailto:kontakt@markt1-bacharach.de?subject=Anfrage"><FaRegEnvelope fontSize="1.9rem" color="#000"/></a> </span></div>
        <nav
          css={css`
            width: 100%;
            padding:0px 0 20px 0;
            display: flex;
            justify-content:space-between;
          `}
        >
          <div>
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`

             display:flex;
              margin-left: -3px;
              padding-left:0;
              flex-basis:1;
              margin-top:-30px;
              font-size: ${theme.fontsizes.xmiddle};
             letter-spacing:.09rem;
              img {
                width:130px;
                height:auto;
                object-fit:contain;
              }
               @media(max-width:800px){
                margin-left:0px;
                width:110px;
                margin-top:-35px;
              }


            `}
          >
            {theme.themeName==="dark"?
            <h2 css={css`
             color:theme.color.text`}>Markt 1</h2>
             :
             <img  src={Logo}  alt="Logo" />

             }

          </Link>
          </div>


         <div css={css`
           flex-basis:1;
           a:hover{
            color:green;
          }
         `}>
           {typeof window!=='undefined' && window.location.pathname==='/aktuell' ?
             <Link to="/">Home &rarr;</Link>
             :
           <div>
              <MobileMenu>
             <Links />
             </MobileMenu>
           </div>
           
           

           }



         </div>
         </nav>
      </Container>

  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
