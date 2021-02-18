import React from "react"
import { useTranslation } from "react-i18next"

import { navLinks } from "../info/textContents"
import { StyledHeader, NavLink } from "../style/elements/StyledHeader"

import LanguageSwitcher from "./LanguageSwitcher"

const Header = () => {
  const { t } = useTranslation()
  return (
    <StyledHeader>
      <div className="header__inner-wrapper">
        <LanguageSwitcher />
        <nav className="header__site-nav">
          {navLinks.site.map((item) => {
            return (
              <NavLink to={`#${t(item)}`} key={t(item)}>
                {t(item)}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </StyledHeader>
  )
}

export default Header
