import { createGlobalStyle } from 'styled-components'
import { light } from './themes'

const GlobalStyle = createGlobalStyle`
    html { background: ${light.colors.background} }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        font-family: 'Spartan', sans-serif;
    }
    
    #root {
        width: 100%;
        color: ${light.colors.text};
    }
`

export default GlobalStyle
