import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from './Theming'

import { TwitterShareButton, FacebookShareButton } from 'react-share'

const Share = ({ url, title, twitterHandle }) => {
  const theme = useTheme()
  return (
    <>

     
      <div
      css={css`
        display: flex;
        width:100%;
        justify-content:flex-end;
       
        `}>
           <span css={css`
           display:block;
        font-size:.8rem;
        padding-top:2px;
        padding-right:5px;
        color:${theme.colors.text};
        `
      }
      >Share article</span>

      &rarr;&nbsp;&nbsp;
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
      <span style={{fontSize:'.8rem'}}>Twitter</span>
      </TwitterShareButton>
      &nbsp;&nbsp;
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        css={css`
          cursor: pointer;
        `}
      >
      <span style={{fontSize:'.8rem'}}>Facebook</span>
      </FacebookShareButton>
    </div>
    </>
  )
}

export default Share
