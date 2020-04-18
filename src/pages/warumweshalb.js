import React from 'react'
import {useTheme} from '../components/Theming'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

const WarumWeshalb = () => {
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
          text="... wir revitalisieren "
        />
     
        <Container>
          <h1 style={{fontSize:theme.fontsizes.great}}>
        Die Ziele von Markt 1
     </h1>
     <p>verantwortlich:<br/>Verschönerungsverein</p>
     asaddf as asdfa sdfa sd
     
        </Container>
        </Layout>
     
    )
}

export default WarumWeshalb


