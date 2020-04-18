import styled from '@emotion/styled'

export default styled.a`
  text-align: left;
  line-height: 1.5;
  font-size:1.2rem;
  margin:0 20px;
  padding:0;
  :hover{
    color:blue;
  }
  :after {
    content: ' ->';
  }

  @media(max-width:800px){
    font-size:1rem;
  }
`
