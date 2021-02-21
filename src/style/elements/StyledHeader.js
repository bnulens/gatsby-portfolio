import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  position: absolute;
  top: 5vh;
  left: 0;
  width: 100vw;
  z-index: 100;

  .header__inner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;

    @media screen and (min-width: 1080px) {
      max-width: 1080px;
    }
  }
`

export const NavLink = styled(Link)`
  font-size: 12px;
  font-weight: 300;
  margin-left: 24px;
  color: var(--color-white);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
