import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaSalmao: '#E66767',
  branco: '#FFFFFF',
  beige: '#FFEBD9',
  beigeClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.beigeClaro};
    color: ${cores.rosaSalmao};
  }

  .container {
   max-width: 1024px;
   width:100%;
   margin:0 auto;
}
`
