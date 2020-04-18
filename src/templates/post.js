
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from 'components/SEO'
import { css} from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
//import  { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
//import { bpMaxSM } from '../lib/breakpoints'
import { useTheme } from 'components/Theming'

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  const author = mdx.frontmatter.author || config.author
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const banner = mdx.frontmatter.banner
  //const thick=fonts.bold;
  const theme =useTheme()


  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />


        <Container noVerticalPadding>
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
              font-size:${theme.fontsizes.xmiddle};
              @media(max-width:550px){
                font-size:${theme.fontsizes.middle};
              }
            `}
          >
            {title.toUpperCase()}
          </h1>

          {banner && (

              <Img css={css`
                objectFit:cover;
                max-height: 420px;
              `

              }
                sizes={banner.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(', ')}
              />

          )}
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
            <p> Artikel von {author}, {date?date:''}</p>
        </Container>
        {/* <SubscribeForm /> */}

      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        description
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        keywords
      }
      body
    }
  }
`
