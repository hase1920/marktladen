import React from 'react'
import {useTheme} from '../components/Theming'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'


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

        <Container>
          <h1 style={{fontSize:theme.fontsizes.middle}}>
        Kulturraum Markt 1
     </h1>
     <p>verantwortlich: Verschönerungsverein Bacharach 1873 e.V.</p>
     <p>55422 Bacharach<br/>
     Marktstraße 3</p>
     <p>Ansprechpartnerin Katrin Gloggengießer<br/>
Email: kontakt@markt1-bacharach.de
     </p>

        </Container>
        </Layout>

    )
}

export default Kontakt
