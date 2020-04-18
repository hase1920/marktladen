import React from 'react'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from './Hero'
const MLayout = ({children}) => {
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
        <Layout site={data.site} >
          <Hero text=" Hallo "
          titel="Markt1"
          />
            <Container>
        {children}
        </Container>
        </Layout>
    )
}

export default MLayout
