import styled from '@emotion/styled'

export default styled.figure`
  display:flex;
  flex-direction: column;
  
  width:100%;
  figcaption {
    color: red;
  }
  @media(max-width:800px){
    width:100%;
  }
`
