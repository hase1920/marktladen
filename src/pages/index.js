/** @jsx */
import React from 'react'
import { graphql} from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

import Img from 'gatsby-image'

import Hero from '../components/Hero'







/* const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
  font-size:1.15rem;
` */

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()


  return (
    <Layout site={site}>


      <Container noHorizontalPadding noVerticalPadding
        css={css`
padding: 0; margin:0 auto 0 auto;
          display:flex;
          flex-wrap: wrap;
          @media(max-width:796px){
            flex-direction: column;
          }
        `}
      >

      <Hero
        titel="Finissage 13.6.2020"
        text="Bacchanale. Retrospektive."
        termin="2.5.–13.6.2020"
        background="#00ff33"
        publish="true"
      />
      <Hero
        titel="Vernissage 20.6.2020"
        text="Urban Scetchers Rhein-Main"
        termin="20.6.–18.7.2020"
        background="#df01d7"
        publish="true"
      />
        {allMdx.edges.map(({ node: post }) => (

          <div
            key={post.id}
            css={css`
              border-top:1px black solid;
              padding-bottom: 0;
              margin-bottom: 40px;
              max-width:48%;
              min-width:48%;
              margin:1% auto 30px auto;
              @media(max-width:796px){
                min-width:98%;
                    margin:1% 1% 0px 1%;
              }
            `}
          >
            <div>
            <h2
              css={css({
                fontWeight:400,

                fontSize: theme.fontsizes.h2small,
                padding:0,
                margin:8,
                letterSpacing:'.05rem',
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title.toUpperCase()}
              </Link>
            </h2>
            <Link
              style={{cursor:'pointer'}}
              to={post.frontmatter.slug}
                 aria-label={`View ${post.frontmatter.title}`}
              >
            <Img css={css`
              object-fit:cover;

              max-height: 220px;
              `}
              fluid={post.frontmatter.banner.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(', ')}
              />
             </Link>
            </div>
            </div>


        ))}
      <Container css={css`
        width:90%;
      `}>

      </Container>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 7
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 0)
          id
          fields {
            title
            slug
            date

          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
              fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
