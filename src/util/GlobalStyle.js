import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, p, h1, h2, h3, ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }
`

export default GlobalStyle