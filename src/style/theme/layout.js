import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import "../../i18n"

import Navigation from "../../components/header"
import Footer from "../../components/footer"

const Container = styled.div`
  margin: 0 auto;
  max-width: 80%;
`

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
