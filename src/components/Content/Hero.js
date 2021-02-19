import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { HeroImage, HeroWrapper } from "../../style/elements/StyledHero"

const Hero = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query socialIconsQuery {
      file(relativePath: { eq: "portfolio-hero.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return (
      <HeroWrapper>
        <div className="hero-title__wrapper">
          <h1>{t("header.mainTitle")}</h1>
          <h2>{t("header.catchTitle")}</h2>
        </div>
      </HeroWrapper>
    )
  }

  const imageData = data.file.childImageSharp.fluid

  return (
    <HeroWrapper>
      <HeroImage fluid={imageData} effect="sharpened" />
      <div className="hero-title__wrapper">
        <h1>{t("header.mainTitle")}</h1>
        <h2>{t("header.catchTitle")}</h2>
      </div>
    </HeroWrapper>
  )
}

export default Hero
