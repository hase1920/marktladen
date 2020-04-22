import styled from '@emotion/styled'

export default styled.blockquote`

border:none;

margin:0 auto 1rem auto;
padding:0;
width: 98%;
p {
    padding:10px 10px 10px 20px;
    font-family: 'Roboto Slab';
    color: #6e6e6e;
    color:#fff;
    font-size: 1.4em;
    background: rgba(80,122,122,.4);
}

@media (max-width: 800px){
p {
  font-size: 1.2em;
    margin:0;
}
}`
