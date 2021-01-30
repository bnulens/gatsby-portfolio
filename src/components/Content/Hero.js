import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const HeroImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const StyledHero = styled.div`
  height: 100vh;
  margin-left: -12.5%;
  margin-right: -12.5%;
  background-color: blue;

  h1 {
    font-size: 56px;
    font-weight: 400;
    color: var(--color-white);
    margin-bottom: 24px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    max-width: 750px;
    color: var(--color-white);
    text-align: justify;
  }
`

const Hero = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "portfolio-hero-2.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            src
          }
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.fluid
  return (
    <StyledHero>
      <HeroImage fluid={imageData} effect="sharpened">
        <h1>{t("test")}</h1>
        <h2>
          Welcome! My name is Brecht. I am a junior Javascript developer with an
          interest in both frontend as backend work. For now, I work on personal
          projects, but I am keen to start a real job. My personal goal is to
          become the best web developer I can be.
        </h2>
      </HeroImage>
    </StyledHero>
  )
}

export default Hero
