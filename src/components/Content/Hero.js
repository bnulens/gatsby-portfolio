import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const HeroImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .hero-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 80%;
  }
`

const StyledHero = styled.div`
  height: 650px;
  min-height: 100vh;
  background-color: blue;
  color: var(--color-white);

  h1 {
    font-size: 72px;
    font-weight: 400;
    margin-bottom: 24px;
    line-height: 72px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    max-width: 350px;
  }
`

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
      <StyledHero>
        <h1>{t("header.mainTitle")}</h1>
        <h2>{t("header.catchTitle")}</h2>
      </StyledHero>
    )
  }

  const imageData = data.file.childImageSharp.fluid

  return (
    <StyledHero>
      <HeroImage fluid={imageData} effect="sharpened">
        <div className="hero-wrapper">
          <h1>{t("header.mainTitle")}</h1>
          <h2>{t("header.catchTitle")}</h2>
        </div>
      </HeroImage>
    </StyledHero>
  )
}

export default Hero
