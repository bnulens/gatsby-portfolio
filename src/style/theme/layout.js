import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import "../../i18n"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ClientOnly from "../../components/ClientOnly"

const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;

  @media screen and (min-width: 768px) {
    max-width: 80%;
  }
`

const Layout = ({ children }) => {
  return (
    <ClientOnly>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </ClientOnly>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
