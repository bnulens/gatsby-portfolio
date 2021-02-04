import styled from "styled-components"
import { Image } from "cloudinary-react"

export const StyledExperience = styled.section`
  display: block;
  margin: 56px 0;

  .experience__container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .experience__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h3 {
        font-size: 4vw;
        font-weight: 400;
        max-width: 700px;
      }

      p {
        max-width: 750px;
        margin-top: 12px;
        color: var(--color-black);
      }
    }

    .experience__links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 24px auto 0px;
      width: 50%;

      a.link__record-store {
        color: white;
        border-radius: 4px;
        background-color: var(--color-purple);
        width: 100%;
        padding: 8px;
        margin-right: 12px;
        text-align: center;
        cursor: pointer;
      }

      a.link__motivation {
        color: var(--color-purple);
        border: 1px solid var(--color-purple);
        border-radius: 4px;
        width: 100%;
        padding: 8px;
        margin-left: 12px;
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    margin: 8vh 0;

    .experience__container {
      .experience__header {
        text-align: justify;
      }
      .experience__links {
        width: 100%;
      }
    }
  }
`

export const StyledPeerReview = styled.article`
  display: flex;
  flex-direction: row;
  width: 75%;
  padding: 24px;
  margin: 0 auto;
  color: var(--color-grey);
  max-width: 75%;
  margin: 48px auto;
  -webkit-box-shadow: 0px 0px 18px -4px #e2e2e2;
  -moz-box-shadow: 0px 0px 18px -4px #e2e2e2;
  box-shadow: 0px 0px 18px -4px #e2e2e2;

  .review__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 16px;

    img:first-child {
      display: block;
      width: 120px;
      height: 120px;
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
    border-left: 2px solid var(--color-lightgrey);
    width: 700px;
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

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10vh auto;
    max-width: 100%;

    .review__profile {
      width: 100%;
    }

    .review__text {
      border-top: 2px solid var(--color-lightgrey);
      border-left: none;
      width: 100%;
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
