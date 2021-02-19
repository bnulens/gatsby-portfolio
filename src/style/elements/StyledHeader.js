import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  position: absolute;
  top: 5vh;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  z-index: 100;

  .header__inner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;

    @media ${(props) => props.theme.mediaQueries.medium} {
      margin: 0 auto;
      width: 90%;
      max-width: 1080px;
    }
  }
`

export const NavLink = styled(Link)`
  font-size: 12px;
  font-weight: 300;
  margin-right: 24px;
  color: var(--color-white);

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 16px;
  }
`
