import React from "react"
import styled from "styled-components"

import Flex from "../../../style/theme/Flex"
import NavItems from "./NavItems/NavItems"

const StyledHeader = styled.header`
  position: absolute;
  z-index: 30;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  max-width: 100vw;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`
const NavWrapper = styled(Flex)`
  height: 15vh;
  min-height: 50px;
  max-width: 80vw;
  margin: 0 auto;
`
const Navbar = () => {
  return (
    <StyledHeader>
      <NavWrapper justifyContent="space-between" alignItems="center">
        <NavItems />
      </NavWrapper>
    </StyledHeader>
  )
}

export default Navbar
