import React from 'react'
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./src/style/theme/global"

import Theme from "./src/style/theme/theme"
import Layout from "./src/style/theme/layout"


export const wrapRootElement = () => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Layout/>
    </ThemeProvider>
)