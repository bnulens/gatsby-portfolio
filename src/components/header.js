import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { navLinks } from "../info/textContents"

import LanguageSwitcher from "./LanguageSwitcher"

const Nav = styled.header`
  position: absolute;
  top: 6%;
  left: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 80vw;
  z-index: 100;
`
const NavListSocial = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  a {
    display: block;
    margin-right: 24px;
    cursor: pointer;

    img {
      display: block;
      height: 20px;
      width: auto;
      transition: 0.4s all ease;

      :hover {
        filter: invert(1);
      }
    }
  }
`
const NavList = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`
const NavLink = styled(Link)`
  color: var(--color-white);
  margin-left: 24px;
`

const NavItems = () => {
  return (
    <Nav>
      <NavListSocial>
        {navLinks.social.map((item) => {
          return (
            <a
              className="header__social-link"
              href={item.url}
              target="__blank"
              rel="norefferer noopener"
              key={item.title}
            >
              <img
                className="header__social-icon"
                src={`../../svg/${item.title}.svg`}
                alt={item.title}
              />
            </a>
          )
        })}
      </NavListSocial>
      <LanguageSwitcher />
      <NavList>
        {navLinks.site.map((item) => {
          return (
            <NavLink to={`#${item}`} key={item}>
              {item}
            </NavLink>
          )
        })}
      </NavList>
    </Nav>
  )
}

export default NavItems
