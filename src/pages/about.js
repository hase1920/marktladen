import React from 'react'

import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/core'


const slidein = keyframes`
    0% {
      opacity:0
    }
   
    99% {
      opacity:1;
    }
  }`
  const MyDiv = styled("div")`
 
 animation: ${slidein} 1s ease;
`
const About = () => {
    
    
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
          titel="Aktuell..."
          text="Bacharach ist gestorben"
         />
     
        <Container>
          <MyDiv>
          <h1 style={{fontSize:20}}>
        Markt 1
     </h1>
     <p>verantwortlich:<br/>Verschönerungsverein</p>
     
     </MyDiv>
        </Container>
        </Layout>
     
    )
}

export default About


