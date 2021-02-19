import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  margin: 0 auto;
  color: var(--color-white);

  .hero-title__wrapper {
    position: absolute;
    top: 40vh;
    left: 5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    max-width: 90%;
    margin: 0 auto;

    h1 {
      font-size: 48px;
      font-weight: 400;
      margin-bottom: 12px;
      line-height: 60px;
    }

    h2 {
      font-size: 18px;
      font-weight: 100;
      max-width: 520px;
      text-align: justify;
    }

    @media screen and (min-width: 768px) {
      left: -50%;
      right: -50%;
      padding: 24px;
      max-width: 1080px;

      h1 {
        font-size: 72px;
      }

      h2 {
        font-size: 20px;
      }
    }
  }
`

export const HeroImage = styled(BackgroundImage)`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
