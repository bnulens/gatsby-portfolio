import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { StyledPeerReview, DefaultAvatar, PeerAvatar, CompanyLogo, DefaultCompany } from "../../style/elements/experience/StyledExperience"
import { reviewContent } from '../../info/textContents'

const PeerReviews = () => {
    const data = useStaticQuery(graphql`
        query { allCloudinaryMedia(filter: {public_id: {glob: "gatsby-portfolio/reviews/*"}}) {
                edges {
                    node {
                        secure_url
                    }
                }
            }
        }
        `
    );

    const reviewImages = data.allCloudinaryMedia.edges;
    const filteredUrls = []

    reviewImages.forEach((item) => {
        filteredUrls.push(item.node.secure_url)
    });

    return (
        <ul className="review__list">
            {
                reviewContent.map(a => {
                    return (
                        <StyledPeerReview key={Math.random() * 10}>
                                <article className="review__container">
                                    <div className="review__profile">
                                        {a.images.avatar ? 
                                            <PeerAvatar
                                                cloudName="bnulens"
                                                publicId={`gatsby-portfolio/reviews/${a.images.avatar}`}
                                                secure="true"
                                                alt="peer-avatar"
                                            /> 
                                            :
                                            <DefaultAvatar
                                                cloudName="bnulens"
                                                publicId="gatsby-portfolio/reviews/default-avatar.jpg"
                                                secure="true"
                                                alt="default-avatar"
                                            />
                                        }
                                        {a.images.company ?
                                            <CompanyLogo
                                                cloudName="bnulens"
                                                publicId={`gatsby-portfolio/reviews/${a.images.company}`}
                                                secure="true"
                                                alt="peer-avatar"
                                            />
                                            :
                                            <DefaultCompany >no company specified {String.fromCodePoint(0x2753)}</DefaultCompany>
                                        }
                                    </div>
                                    <div className="review__text">
                                        <p className="review__comment">{`"${a.comment}"`}</p>
                                        <p className="review__person"><b>{a.reviewer}</b></p>
                                        <p className="review__job-title">{a.jobTitle} at {a.worksAt}</p>
                                    </div>
                                </article>
                        </StyledPeerReview>
                    )
                })
            }
        </ul>
    )
}   

export default PeerReviews