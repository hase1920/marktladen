import React from 'react'

import { css } from '@emotion/core'

import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'

import HBild from './bsp.jpg'




const Hero = ({titel,text,publish}) => {
  const theme = useTheme()
  if(publish)
  return (
    
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: url(${HBild}) no-repeat;
        background-size: cover;
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
          ${bpMaxSM} {
            width:100%;
          }
          
        `}
      >
       
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(20)};
            font-size: ${theme.fontsizes.xgreat};
            ${bpMaxMD}{
                font-size: ${theme.fontsizes.great};
            }
          `}
        >
          {titel}
        </h1>
        {text? text:""}
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
    
  )
  else {
    return ""
  }
}
export default Hero