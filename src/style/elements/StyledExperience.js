import styled from "styled-components"
import { Image } from "cloudinary-react"

export const StyledExperience = styled.section`
  position: relative;
  display: block;
  height: 100%;
  margin: 120px auto;

  .experience__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    max-width: 90%;

    .experience__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h3 {
        font-size: 42px;
        font-weight: 700;
      }

      p {
        margin-top: 12px;
        font-size: 18px;
        text-align: justify;
        color: var(--color-coal);
        line-height: 1.4;
      }
    }

    .experience__links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 24px auto 0px;
      width: 100%;

      a.link__record-store {
        color: white;
        border-radius: 4px;
        background-color: var(--color-purple);
        width: 50%;
        padding: 8px;
        margin-right: 12px;
        text-align: center;
        cursor: pointer;
      }

      a.link__motivation {
        color: var(--color-purple);
        border: 1px solid var(--color-purple);
        border-radius: 4px;
        width: 50%;
        padding: 8px;
        margin-left: 12px;
        text-align: center;
      }
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    position: relative;
    width: 100vw;

    .experience__container {
      width: 100%;
      max-width: 1080px;
      margin: 0 auto;

      .experience__header {
        text-align: justify;

        h3 {
          font-size: 56px;
        }

        p {
          width: 90%;
          max-width: 1080px;
          font-size: 24px;
          font-weight: 300;
        }
      }
      .experience__links {
        justify-content: center;
        margin-top: 48px;

        a.link__record-store {
          width: 25%;
        }
        a.link__motivation {
          width: 25%;
        }
      }
    }
  }
`

export const StyledPeerReview = styled.article`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 82px auto;
  color: var(--color-grey);
  -webkit-box-shadow: 0px 0px 18px -4px #e2e2e2;
  -moz-box-shadow: 0px 0px 18px -4px #e2e2e2;
  box-shadow: 0px 0px 18px -4px #e2e2e2;

  .review__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;

    img:first-child {
      display: block;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    img:last-child {
      display: block;
      width: 100px;
      height: 50px;
      margin-top: 12px;
    }
  }

  .review__text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    border-top: 2px solid var(--color-lightgrey);
    padding: 16px;
    font-size: 16px;

    .review__comment {
      font-style: italic;
      text-align: justify;
      color: grey;
    }
    .review__person {
      margin-top: 16px;
    }
    .review__job-title {
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    width: 90%;
    max-width: 1080px;

    .review__profile {
      width: 20%;
    }

    .review__text {
      border-top: none;
      border-left: 2px solid var(--color-lightgrey);
      width: 80%;
    }
  }
`

export const DefaultAvatar = styled(Image)`
  display: block;
`
export const DefaultCompany = styled.span`
  display: block;
  font-size: 12px;
`
export const PeerAvatar = styled(Image)`
  object-fit: contain;
`
export const CompanyLogo = styled(Image)`
  object-fit: contain;
`
