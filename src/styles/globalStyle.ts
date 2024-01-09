import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {

    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    margin-right: 8px;
  }
`

export default GlobalStyle
