import React from "react";
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./src/style/theme/global";
import Layout from "./src/style/theme/layout";
import theme from "./src/style/theme/theme";

export const wrapRootElement = ({element}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout children={element}/>
        </ThemeProvider>
    )
}
