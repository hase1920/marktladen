import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import {Link} from 'gatsby'
import { Twitter, GitHub } from './Social'
import Container from './Container'

const Footer = ({ author }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        width:90%;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
     
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
            width:100%;
            ul {
              list-style:none;
              display:flex;
              justify-content:flex-start;
              
            }
            li a {
              color:black;
              padding-right:20px;
            }
            `}
        >
          <ul>
          <li><Link to="/datenschutz">Datenschutz</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/impressum">Impressum</Link></li>
          </ul>
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div style={{display:'flex'}}>
          <Twitter />
          <GitHub />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
