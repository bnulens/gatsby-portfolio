import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { StyledFooter } from "../style/elements/StyledFooter"
import { navLinks } from "../info/textContents"

const thisYear = new Date().getFullYear()

const Footer = () => {
  const data = useStaticQuery(graphql`
    query socialIconQuery {
      allFile(filter: { relativeDirectory: { eq: "social" } }) {
        edges {
          node {
            base
            publicURL
          }
        }
      }
    }
  `)

  if (!data.allFile?.edges) {
    return <span>No icons found</span>
  }

  const icons = [...data.allFile.edges]
  const filteredIcons = []

  icons.forEach((icn) => {
    filteredIcons.push(icn.node)
  })

  return (
    <StyledFooter>
      <div className="footer__wrapper">
        <section className="footer__brief">
          <h3>Alley-Oop</h3>
        </section>
        <section className="footer__social-media">
          <nav>
            {navLinks.social.map((item, i) => {
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
                    src={filteredIcons[i].publicURL}
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
}

export default Footer
