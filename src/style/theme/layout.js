import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Header from "../../components/header"
import Footer from "../../components/footer"

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

