
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
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
  const title = mdx.frontmatter.title
  const banner = mdx.frontmatter.banner
  //const thick=fonts.bold;
  const theme =useTheme()


  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />


        <Container
          css= {css`
          padding:0 35px;
            @media(max-width:800px){
              padding:0;
              margin:0;
            }
            `}
        >

        {banner && (

            <Img css={css`
              objectFit:cover;
              objectPosition: 50% 50%;
              max-height: 420px;
            `

            }
              fluid={banner.childImageSharp.fluid}
              alt={site.siteMetadata.keywords.join(', ')}
            />

        )}
        <br />
          <h1
            css={css`
              text-align: center;
              margin-top: 10px;
              margin-bottom: 20px;
              font-weight:500;
              letter-spacing:0.05rem;
              font-size:${theme.fontsizes.xgreat};
              @media(max-width:550px){
                font-size:${theme.fontsizes.xgreat};
              }
            `}
          >
            {title.toUpperCase()}
          </h1>


          <div css={css`
            @media(max-width:800px) {
              ul,ol,p,a,h1,h2,h3 {
                padding:20px;
              }
            }


            `}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>

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
