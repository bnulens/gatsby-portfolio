import styled from "styled-components"
import { Image } from "cloudinary-react"

export const StyledPeerReview = styled.li`
    max-width: 75%;
    margin: 48px auto;
    -webkit-box-shadow: 0px 0px 18px -4px #E2E2E2;
    -moz-box-shadow: 0px 0px 18px -4px #E2E2E2;
    box-shadow: 0px 0px 18px -4px #E2E2E2;

    .review__container {
        display: flex;
        flex-direction: row;
        width: 75%;
        padding: 24px;
        margin: 0 auto;
        color: var(--color-grey);

        .review__profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 30%;
            padding: 16px;

            img:first-child {
                display: block;
                width: 100px;
                height: 100px;
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
            border-left: 2px solid var(--color-lightgrey);
            width: 70%;
            padding: 16px;

            .review__comment {
                font-style: italic;
                text-align: justify;
                color: grey;
            }
            .review__person {
                font-size: 12px;
                margin-top: 16px;
            }
            .review__job-title {
                font-size: 12px;
            }
        }
    }
    ::after {
        display: block;
        position: absolute;
        top: 50px;
        left: 0;
        height: 200px;
        width: 100%;
        background-color: grey;
    }

`

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
                font-size: 54px;
                font-weight: 400;
            }

            p {
                width: 75%;
                margin-top: 12px;
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