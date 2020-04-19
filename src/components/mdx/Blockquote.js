import styled from '@emotion/styled'

export default styled.blockquote`

border:none;
padding:0;

line-height: 2em;
padding: 30px 0;

p {
    font-family: 'Roboto Slab';
    color: #6e6e6e;
    font-size: 1.4em;
}

@media (max-width: 800px){
p {
  font-size: 1.2em;
}
  line-height: 0.5em;
  padding: 5px 0;
}`
