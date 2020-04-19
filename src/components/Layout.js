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
        color: ${theme.colors.white};
      }
      &:hover {
        color: #red;
      }
    }
  ul {
    text-align: left;
    line-height: 1.5;
    font-size:1rem;
    margin:0;
    padding:4px;
    list-style:none;

  }
li {

      padding:0;
      margin:0;
     color:black;

  }
    h2 {
      text-align: left;
      font-size: 1.3rem;
      margin-top: 20px;
      margin-bottom: 0px;
      font-weight: 500;
      line-height: 2;
      color:black;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
    }
    p{
      text-align: left;
      line-height: 1.5;
      font-size: 1.rem;
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
          color: ${theme.colors.text};
        }
      }
    }
    ${bpMaxSM} {


      strong {
        font-size: 90%;
      }
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size:1.2rem;
        line-height: 1;

      }
      li a {
        font-size:1rem;
        padding:0;
        margin:0;

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

              margin:auto;
              border-left:30px #00ff33 solid;
            border-right:30px #00ff33 solid;
            }
            @media(max-width:320px){
             width:100%
              margin:auto;
              border-left:30px #00ff33 solid;
            border-right:30px #00ff33 solid;
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
          {!noFooter && (
            <Footer
              author={site.siteMetadata.author.name}
              noSubscribeForm={noSubscribeForm}
            />
          )}
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
