import React from "react"

import { StyledFooter } from "../style/elements/StyledFooter"
import { navLinks } from "../info/textContents"

const thisYear = new Date().getFullYear()

const Footer = () => (
  <StyledFooter>
    <div className="footer__wrapper">
      <section className="footer__brief">
        <h3>Alley-Oop</h3>
      </section>
      <section className="footer__social-media">
        <nav>
          {navLinks.social.map((item) => {
            return (
              <a
                className="footer-link"
                href={item.url}
                target="__blank"
                rel="norefferer noopener"
                key={item.title}
              >
                <img
                  className="footer__social-icon"
                  src={`../../svg/${item.title}.svg`}
                  alt={item.title}
                />
              </a>
            )
          })}
        </nav>
        <span>&copy; {thisYear}</span>
      </section>
    </div>
  </StyledFooter>
)

export default Footer
