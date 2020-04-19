import styled from '@emotion/styled'

export default styled.article`
  display:flex;
  flex-direction: column;
  justifyContent: flex-start;
  h2 {
    color: black;font-size:.9rem;
  }
  width:48%;
  padding: 15px;
:nth-child(even) {background: #df01d7}
:nth-child(odd) {background: #00ff33}
  img {
    padding-bottom:0;
    margin-bottom:0;
  }
  margin:0 1% 0 0;
  @media(max-width:800px){
    width:100%;
  }
  p {
color: black;

  }
  h2 {
    font-size: 2rem;
color: white;

  }
`
