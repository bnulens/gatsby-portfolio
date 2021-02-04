import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import {
  StyledPeerReview,
  DefaultAvatar,
  PeerAvatar,
  CompanyLogo,
  DefaultCompany,
} from "../../style/elements/experience/StyledExperience"
import { reviewContent } from "../../info/textContents"

const PeerReviews = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryMedia(
        filter: { public_id: { glob: "gatsby-portfolio/reviews/*" } }
      ) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const reviewImages = data.allCloudinaryMedia.edges
  const filteredUrls = []

  reviewImages.forEach((item) => {
    filteredUrls.push(item.node.secure_url)
  })

  return (
    <StyledPeerReview>
      <div className="review__profile">
        {reviewContent[0].images.avatar ? (
          <PeerAvatar
            cloudName="bnulens"
            publicId={`gatsby-portfolio/reviews/${reviewContent[0].images.avatar}`}
            secure="true"
            alt="peer-avatar"
          />
        ) : (
          <DefaultAvatar
            cloudName="bnulens"
            publicId="gatsby-portfolio/reviews/default-avatar.jpg"
            secure="true"
            alt="default-avatar"
          />
        )}
        {reviewContent[0].images.company ? (
          <CompanyLogo
            cloudName="bnulens"
            publicId={`gatsby-portfolio/reviews/${reviewContent[0].images.company}`}
            secure="true"
            alt="peer-avatar"
          />
        ) : (
          <DefaultCompany>
            no company specified {String.fromCodePoint(0x2753)}
          </DefaultCompany>
        )}
      </div>
      <div className="review__text">
        <blockquote className="review__comment">
          {t(reviewContent[0].comment)}
        </blockquote>
        <p className="review__person">
          <b>{reviewContent[0].reviewer}</b>
        </p>
        <p className="review__job-title">
          {reviewContent[0].jobTitle} at {reviewContent[0].worksAt}
        </p>
      </div>
    </StyledPeerReview>
  )
}

export default PeerReviews
