import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from './Theming'

import { TwitterShareButton, FacebookShareButton } from 'react-share'

const Share = ({ url, title, twitterHandle }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        width:100%;
        justify-content:flex-end;
        `}>
       
      <span css={css`
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
      <p>  Twitter</p>
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
      <p>  Facebook</p>
      </FacebookShareButton>
    </div>
  )
}

export default Share
