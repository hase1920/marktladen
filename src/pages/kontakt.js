import React from 'react'
import {useTheme} from '../components/Theming'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

const Kontakt = () => {
    const theme = useTheme()
    const data = useStaticQuery(graphql`
    query {
        site {
          ...site
          siteMetadata {
            title
          }
        }
    }
    `)
    return(
        <Layout site={data.site}>
        <Hero
          titel="Bacharach..."
          text="beim Sterben zusehen?"
        />

        <Container>
          <h1 style={{fontSize:theme.fontsizes.great}}>
        Markt 1
     </h1>
     <p>verantwortlich:<br/>Verschönerungsverein</p>
     <p>55422 Bacharach, Marktstr. 3</p>
     <p>Ansprechpartnerin Katrin Gloggengiesser</p>
        </Container>
        </Layout>

    )
}

export default Kontakt
