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
  :nth-child(even) {
    background: #df01d7;
  }
  :nth-child(odd) {
    background: #00ff33;
  }
  @media(max-width:796px){
    width:98%;
    padding:0;
    margin:1px 1%;

  }
`
