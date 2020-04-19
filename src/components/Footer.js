import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'

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


          <Twitter />
          <GitHub />
        </div>

    </Container>
  </footer>
)

export default Footer
