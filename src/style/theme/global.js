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
        font-family: 'Inter';
        -webkit-font-smoothin: antialiased;
        -moz-osx-font-smoothing: grayscaled;
    }

    html {
        box-sizing: border-box;
        --color-white: ${(props) => props.theme.colors.white};
        --color-black: ${(props) => props.theme.colors.black};
        --color-darkgrey: ${(props) => props.theme.colors.darkgrey};
        --color-grey: ${(props) => props.theme.colors.grey};
        --color-silver: ${(props) => props.theme.colors.silver};
        --color-lightgrey: ${(props) => props.theme.colors.lightgrey};
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

    a, input, textarea,button {
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

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 100;
        font-display: swap;
        src:local("Inter-Inter-Thin"), url("Inter-Thin.woff2") format("woff2"),
           local("Inter-Inter-Thin"), url("Inter-Thin.woff") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 100;
        font-display: swap;
        src:local("Inter-Inter-ThinItalic"), url("Inter-ThinItalic.woff2") format("woff2"),
           local("Inter-Inter-ThinItalic"), url("Inter-ThinItalic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 200;
        font-display: swap;
        src:local("Inter-"), url("Inter-ExtraLight.woff2") format("woff2"),
           local("Inter-"), url("Inter-ExtraLight.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 200;
        font-display: swap;
        src:local("Inter-ExtraLightItalic"), url("Inter-ExtraLightItalic.woff2") format("woff2"),
           local("Inter-ExtraLightItalic"), url("Inter-ExtraLightItalic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 300;
        font-display: swap;
        src:local("Inter-Light"), url("Inter-Light.woff2") format("woff2"),
           local("Inter-Light"), url("Inter-Light.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 300;
        font-display: swap;
        src:local("Inter-LightItalic"), url("Inter-LightItalic.woff2") format("woff2"),
           local("Inter-LightItalic"), url("Inter-LightItalic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 400;
        font-display: swap;
        src:local("Inter-Regular.woff2") format("woff2"),
           local("Inter-Regular"), url("Inter-Regular.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 400;
        font-display: swap;
        src:local("Inter-Italic"), url("Inter-Italic.woff2") format("woff2"),
           local("Inter-Italic"), url("Inter-Italic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 500;
        font-display: swap;
        src:local("Inter-Medium"), url("Inter-Medium.woff2") format("woff2"),
           local("Inter-Medium"), url("Inter-Medium.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 500;
        font-display: swap;
        src:local("Inter-MediumItalic"), url("Inter-MediumItalic.woff2") format("woff2"),
           local("Inter-"), url("Inter-MediumItalic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 600;
        font-display: swap;
        src:local("Inter-SemiBold"), url("Inter-SemiBold.woff2") format("woff2"),
           local("Inter-SemiBold"), url("Inter-SemiBold.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 600;
        font-display: swap;
        src:local("Inter-SemiBoldItalic"), url("Inter-SemiBoldItalic.woff2") format("woff2"),
           local("Inter-SemiBoldItalic"), url("Inter-SemiBoldItalic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 700;
        font-display: swap;
        src:local("Inter-Bold"), url("Inter-Bold.woff2") format("woff2"),
           local("Inter-Bold"), url("Inter-Bold.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 700;
        font-display: swap;
        src:local("Inter-BoldItalic"), url("Inter-BoldItalic.woff2") format("woff2"),
           local("Inter-BoldItalic"), url("Inter-BoldItalic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 800;
        font-display: swap;
        src:local("Inter-ExtraBold"), url("Inter-ExtraBold.woff2") format("woff2"),
           local("Inter-ExtraBold"), url("Inter-ExtraBold.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 800;
        font-display: swap;
        src:local("Inter-ExtraBoldItalic"), url("Inter-ExtraBoldItalic.woff2") format("woff2"),
           local("Inter-ExtraBoldItalic"), url("Inter-ExtraBoldItalic.woff") format("woff");
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 900;
        font-display: swap;
        src:local("Inter-Black"), url("Inter-Black.woff2") format("woff2"),
           local("Inter-Black"), url("Inter-Black.woff") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style:  italic;
        font-weight: 900;
        font-display: swap;
        src:local("Inter-BlackItalic"), url("Inter-BlackItalic.woff2") format("woff2"),
           local("Inter-BlackItalic"), url("Inter-BlackItalic.woff") format("woff");
    }
`