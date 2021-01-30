import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import FrontImage from "gatsby-background-image"

const StyledHero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: -12.5%;
  margin-right: -12.5%;
  background-color: blue;

  h1 {
    color: var(--color-white);
    font-size: 56px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  h2 {
    color: var(--color-white);
    font-size: 18px;
    font-weight: 400;
    max-width: 750px;
    text-align: justify;
  }
`

const Hero = (props) => {
  const { t } = useTranslation()

  return (
    <StyledHero>
      <h1>{t("test")}</h1>
      <h2>
        Welcome! My name is Brecht. I am a junior javascript developer with an
        interest in both frontend as backend work. For now, I work on personal
        projects, but I am keen to start a real job. My personal goal is to
        become the best web developer I can be.{" "}
      </h2>
    </StyledHero>
  )
}

export const data = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

export default Hero
