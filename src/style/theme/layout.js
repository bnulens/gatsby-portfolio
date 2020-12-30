import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Navigation from "../../components/Navigation/Navbar/Navbar"
import SideNav from "../../components/Navigation/Navbar/SideNav/SideNav"
import Footer from "../../components/footer"

const Container = styled.div`
  margin: 0 auto;
  max-width: 80vw;
`

export default function Layout ({ children }) {
  return (
    <>
      <Navigation/>
      <SideNav/>
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
