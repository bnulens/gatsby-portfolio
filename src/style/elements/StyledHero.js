import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const HeroImage = styled(BackgroundImage)`
  margin: 0 auto;
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
    width: 100%;
    height: 100%;
    max-width: 90%;
    margin: 0 auto;
  }
`

export const StyledHero = styled.div`
  height: 100vh;
  width: 100%;
  color: var(--color-white);

  h1 {
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 12px;
    line-height: 60px;
  }

  h2 {
    font-size: 12px;
    font-weight: 100;
    max-width: 520px;
    text-align: justify;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100vw;

    h1 {
      font-size: 72px;
    }

    h2 {
      font-size: 20px;
    }
  }
`
