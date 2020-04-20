import React from 'react'

import { css } from '@emotion/core'

import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'





const Hero = ({titel,text,publish,background,termin}) => {
  const theme = useTheme()
  if(publish)
  return (

    <div
      css={css`
        color: ${theme.colors.white};
        width: 48%;
        background: ${background};
        padding: 20px 0 30px 0;
        display: flex;
        margin: 1px auto 10px auto;
        max-height: 380px;
        @media(max-width:800px) {
          width:98%;
          margin: 1px auto;
        }
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
          padding:10px;
          ${bpMaxSM} {
            width:100%;
          }

        `}
      >



        <h1
          css={css`
            color: ${theme.colors.black};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(20)};
            font-weight: 500;
            font-size: ${theme.fontsizes.xgreat};
            ${bpMaxMD}{
              h1 {
                font-size: ${theme.fontsizes.small};
              }

            }
          `}
        >
          {titel}
        </h1>
  <span
   css={css`
    color:#000;

     `}

  >{text? text:""} </span>    <br/>



       <span css={css`
           color: ${theme.colors.white};
           font-size: 3rem;
           ${bpMaxMD}{
               font-size:2rem;
           }
         `}>   {termin? termin:""}
      </span>


      </Container>

    </div>

  )
  else {
    return ""
  }
}
export default Hero
