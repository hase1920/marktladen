import React, { useState } from 'react'
import { css } from '@emotion/core'
import Container from '../Container'

//import { bpMaxSM } from '../../lib/breakpoints'

import { useTheme } from '../Theming'

const Toggle = ({ children }) => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => {
    setToggle(!isToggledOn)
    if(window)
    window.scroll(0,0)
  }
  const theme = useTheme()
  const color = theme.colors.white

  return (
    <div css={css`
       display:flex;
       flex-direction:column;
       justify-content:flex-end;
       flex-basis:10px;
       
       padding:0 20px;
       margin-top:20px;
       @media(max-width:900px){
         height:15px;
         padding-right:20px;
         
       }
       @media(max-width:325px){
         height:8px;
         padding-right:20px;
       }
    `}>

      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
        css={css`
          z-index: 30;

          position: relative;
          background: transparent;
          border: 2px;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 34px;
            height: 4px;
            background: ${color};
            position: fixed;
            display:flex;
            flex-shrink:0;


            @media(max-width:796px){

            }
            ${isToggledOn ? 'background: transparent' : `background: #00ff33`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 34px;
              height: 4px;

              background: #00ff33;
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 34px;
              height: 4px;
              background: #00ff33;
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            padding:20px;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: ${theme.colors.headerBg};
          `}
        >
          <Container
            css={css`
              ;
              padding-top:30px;
              bottom:0;
              flex-direction: column;
              align-items: center;
              overflow:scroll;
              justify-content: space-evenly;
              a {
                color: white;
                font-size: 22px;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                :hover {
                  background: rgba(0, 0, 0, 0.2);
                }
                
              }
              .active {
                opacity:  0.4;
              }
              @media(max-width:450px){
               position:absolute;
               top:0;
               left:0;
               right:0; 
               a {
                 font-size:1rem;
               }
              }
             `}
              >
             
              
           
          
            {children}
          </Container>
        </div>
      )}
    </div>
  )
}

export default Toggle
