import React from 'react'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
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
          <Hero
          publish="false"
          titel="#1"
          text="... "
          />
            <Container>
        {children}
        </Container>
        </Layout>
    )
}

export default MLayout
