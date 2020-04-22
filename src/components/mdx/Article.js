import styled from '@emotion/styled'

export default styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:48%;
  padding: 15px;
  margin:0 2px;
  p {
    color: black;
  }
  h2 {
    font-size: 2rem;
    color: white;
    line-height:2.2rem;
  }
  :nth-of-type(even) {
    background: #df01d7;
  }
  :nth-of-type(odd) {
    background: #00ff33;
  }
  @media(max-width:320px){
    width:98%;
    padding:0;
    margin:1px 1%;
    h2 {
      font-size:1.4rem;
    }

  }
  @media(max-width:796px){
    width:98%;
    padding:0;
    margin:1px 1%;

  }
  
`
