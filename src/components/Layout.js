import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { lighten } from 'polished'
import { Global, css } from '@emotion/core'
import { ThemeProvider, themes } from './Theming'
import { bpMaxSM } from '../lib/breakpoints'
import mdxComponents from './mdx'
import Header from './Header'
import reset from '../lib/reset'
import { fonts } from '../lib/typography'
import config from '../../config/website'
import Footer from '../components/Footer'
import Container from './Container'
import Link from './Link'


const getGlobalStyles = theme => {
  return css`
    body {
      background: ${theme.colors.bodyBg};
      color: ${theme.colors.text};
    }
    &::selection {
      color: ${theme.colors.blue};
      background-color: ${theme.colors.primary};
    }
    a {
      color: ${theme.colors.link};
      text-decoration: none;
      &:hover,
      &:focus {
        color: ${theme.colors.green};
      }

    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.text};
      a {
        color: ${theme.colors.text};
        &:hover,
        &:focus {
          color: ${theme.colors.green};
        }
      }
    }
    ${bpMaxSM} {

      p,
      em,
      strong {
        font-size: 90%;
      }
      h1 {
        font-size: 1.3rem;
      }
      h2 {
        font-size: 1.1rem;

      }
    }
    hr {
      margin: 50px 0;
      border: none;
      border-top: 1px solid ${theme.colors.gray};
      background: none;
    }
    em {
      font-family: ${fonts.regularItalic};
    }
    strong {
      em {
        font-family: ${fonts.semiboldItalic};
      }
    }
    input {
      border-radius: 4px;
      border: 1px solid ${theme.colors.gray};
      padding: 5px 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      font-family: ${fonts.regular};
      margin-top: 5px;
      ::placeholder {
        opacity: 0.4;
      }
    }

    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: 0;
      object-fit:cover;
      max-heigth:30px;
    }
    button {
      border-radius: 4px;
      background-color: ${theme.colors.primary};
      border: none;
      color: ${theme.colors.white};
      padding: 5px 10px;
      cursor: pointer;
      border: 1px solid ${theme.colors.primary};
      transition: all 150ms;
      :hover {
        background: ${lighten(0.05, theme.colors.primary)};
        outline:none;
      }
    }
    pre {
      background-color: #061526 !important;
      border-radius: 4px;
      font-size: 16px;
      padding: 10px;
      overflow-x: auto;
      /* Track */
      ::-webkit-scrollbar {
        width: 100%;
        height: 5px;
        border-radius: 0 0 5px 5px;
      }
      ::-webkit-scrollbar-track {
        background: #061526;
        border-radius: 0 0 4px 4px;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }
    }

    
    /* ----------- iPhone 4 and 4S ----------- */
    
    /* Portrait and Landscape */
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2) {
    
    }
    
    /* Portrait */
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait) {
    }
    
    /* Landscape */
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape) {
    
    }
    
    /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
    
    /* Portrait and Landscape */
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2) {
    
    }
    
    /* Portrait */
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait) {
    }
    
    /* Landscape */
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape) {
    
    }
    
    /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
    
    /* Portrait and Landscape */
    @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 667px) 
      and (-webkit-min-device-pixel-ratio: 2) { 
    
    }
    
    /* Portrait */
    @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 667px) 
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: portrait) { 
    
    }
    
    /* Landscape */
    @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 667px) 
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape) { 
    
    }
    
    /* ----------- iPhone 6+, 7+ and 8+ ----------- */
    
    /* Portrait and Landscape */
    @media only screen 
      and (min-device-width: 414px) 
      and (max-device-width: 736px) 
      and (-webkit-min-device-pixel-ratio: 3) { 
    
    }
    
    /* Portrait */
    @media only screen 
      and (min-device-width: 414px) 
      and (max-device-width: 736px) 
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait) { 
    
    }
    
    /* Landscape */
    @media only screen 
      and (min-device-width: 414px) 
      and (max-device-width: 736px) 
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: landscape) { 
    
    }
    
    /* ----------- iPhone X ----------- */
    
    /* Portrait and Landscape */
    @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 812px) 
      and (-webkit-min-device-pixel-ratio: 3) { 
    
    }
    
    /* Portrait */
    @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 812px) 
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait) { 
    
    }
    
    /* Landscape */
    @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 812px) 
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: landscape) { 
    
    }
    
    @media only screen() and orientation: landscape){
                  a{color:yellow !important;}
    }




  `
}

export default ({
  site,
  frontmatter = {},
  children,
  noFooter,
  noSubscribeForm,
}) => {
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    } else {
      return 'default'
    }
  }

  const [themeName, setTheme] = useState(initializeTheme)
  const [hinweis, setHinweis] = useState(true)

 const Meldung = ()=>(
      <Container >
        <h1>Hinweis zur Datenerhebung</h1>
        <p>Diese Seite ist im Testmodus</p>
        <p>Persönliche Daten erheben wir deshalb nicht, es werden für den Serverbetreiber nur die
          zum Betrieb notwendigen technischen Log-Daten für eine kurze Zeit gespeichert.
          Die benutzten Cookies dienen nur zum Steuern der Webseite und beinhalten keine Daten,
          die in irgendeinem persönlichen Zusammenhang mit Ihnen gebracht werden können.

        </p>
          <button onClick={()=>mach()}>einverstanden</button>
      </Container>

 )
  useEffect(() => {
    if(typeof window ==='undefined') return
    localStorage.setItem('theme', themeName)
  }, [themeName])

  function mach(){
   setHinweis(true)
   if(typeof window==='undefined') return
   localStorage.setItem('hinweis',true)
  }

  useEffect(()=>{
    if(typeof window!=='undefined') {
      let g= localStorage.getItem('hinweis')
      if(g===null || g===false){
        setHinweis(false)
      }
      else {
        setHinweis(true)
      }
    }
  },[])
  const toggleTheme = name => setTheme(name)
  const theme = {
    ...themes[themeName],
    toggleTheme: toggleTheme,
  }
  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <ThemeProvider theme={theme}>

      <Fragment>
        <Global styles={reset()} />
        <Global styles={getGlobalStyles(theme)} />
        <Container noHorizontalPadding
          css={css`
            display: flex;
            flex-direction: column;
            width:100%;
            margin:auto;
            min-height: 100vh;
            max-width:1200px;
            border-left:40px #00ff33 solid;
            border-right:40px #00ff33 solid;
            @media(max-width:800px){
             width:100%;
              margin:auto;
              border-left:30px #00ff33 solid;
            border-right:30px #00ff33 solid;
            }
            @media(max-width:325px){
              width:100%;
               margin:auto;
               border-left:4px #00ff33 solid;
             border-right:4px #00ff33 solid;
             }

          `}
        >
          <Helmet
            title={config.siteTitle}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="en" />
            <noscript>This site runs best with JavaScript enabled.</noscript>
          </Helmet>
          <Header />

          { !hinweis?
          <Meldung />
         : null
        }


          <MDXProvider components={mdxComponents}>
            <Fragment>{children}</Fragment>
          </MDXProvider>
          <Container css={css`
          display:flex;
         margin:auto;
         width:90%;
         justify-content:space-between;
          ${bpMaxSM}{
            flex-direction:column;
            a{
              text-align:center;
            }
          }
        `}>

        {!noFooter && (
          <Footer
            author={site.siteMetadata.author.name}
            noSubscribeForm={noSubscribeForm}
          />
        )}
          <Link style={{fontSize:"0.9rem",fontWeight:300, letterSpacing: "0.05rem"}} to="/datenschutz" activeClassName="active" aria-label="Datenschutzerklärung">
          Datenschutz
      </Link>
      <Link style={{fontSize:"0.9rem",fontWeight:300, letterSpacing: "0.05rem"}} to="/kontakt" activeClassName="active" aria-label="Kontakt">
        Kontakt
      </Link>
      <Link style={{fontSize:"0.9rem", fontWeight:300, letterSpacing: "0.05rem", marginBottom:50}} to="/impressum" activeClassName="active" aria-label="Impressum">
        Impressum
      </Link>
      </Container>

        </Container>
      </Fragment>


    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
