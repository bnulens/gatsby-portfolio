import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const HeroWrapper = styled.div`
  position: relative;
  color: var(--color-white);
  width: 100vw;
  height: 100vh;

  .hero-title__wrapper {
    position: absolute;
    top: 30vh;
    left: 0;
    width: 100vw;

    .hero-title__inner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      max-width: 90%;
      margin: 0 auto;

      h1 {
        font-size: 42px;
        font-weight: 400;
        margin-bottom: 12px;
        line-height: 1.2;
      }

      h2 {
        font-size: 16px;
        font-weight: 300;
        text-align: justify;
        line-height: 1.4;
      }

      @media screen and (min-width: 768px) {
        margin: 0 auto;
        h1 {
          font-size: 6vw;
        }

        h2 {
          font-size: 2vw;
          width: 50%;
        }
      }
      @media screen and (min-width: 1080px) {
        width: 90%;
        max-width: 1080px;
        h1 {
          font-size: 56px;
        }
        h2 {
          font-size: 20px;
        }
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
