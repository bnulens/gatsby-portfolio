import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        font-family: 'Epilogue', 'Fraunces', sans-serif;
        -webkit-font-smoothin: antialiased;
        -moz-osx-font-smoothing: grayscaled;
    }

    html {
        box-sizing: border-box;
        --color-white: ${(props) => props.theme.colors.white};
        --color-black: ${(props) => props.theme.colors.black};
        --color-coal: ${(props) => props.theme.colors.coal};
        --color-darkgrey: ${(props) => props.theme.colors.darkgrey};
        --color-grey: ${(props) => props.theme.colors.grey};
        --color-silver: ${(props) => props.theme.colors.silver};
        --color-lightgrey: ${(props) => props.theme.colors.lightgrey};
        --color-purple: ${(props) => props.theme.colors.purple};
        --color-marine: ${(props) => props.theme.colors.marine};
        --color-blue: ${(props) => props.theme.colors.blue};
        --color-green: ${(props) => props.theme.colors.green};
        --color-danger: ${(props) => props.theme.colors.danger};
    }

    body {
        line-height: 1.6;
    }

    main {
        position: relative;
        display: block;
        margin: 0 auto;
    }

    a, input, textarea, button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
        color: var(--color-grey);
        :focus {
            outline: none;
        }
    } 

    ol, ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, 
    blockquote:after,
    q:before, 
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    p {
        line-height: 1.8;
    }
`
