import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { StyledPeerReview, DefaultAvatar, PeerAvatar, CompanyLogo, DefaultCompany } from "../../style/elements/experience/StyledExperience"

const reviewContent = [
    {
        reviewer: "Geert Van Campenhout",
        comment: "I have worked with Brecht on two projects. He is eager to learn and a high potential. In the short amount of time he has been developing, he has picked up a lot of skills and is on track to become a great addition to any development team.",
        jobTitle: "Full stack developer",
        worksAt: "StriveCloud - scalable gamification software",
        images: {
            avatar: "geert-lion.jpg",
            company: "strivecloud-full.png"
        }
    },
    {
        reviewer: "John Doe",
        comment: "New to the business but already showing a lot of potential",
        jobTitle: "Front end developer",
        worksAt: "Free float stocks",
        images: {
            avatar: undefined,
            company: undefined
        }
    },
    {
        reviewer: "Jane Doe",
        comment: "Keen eyed guy",
        jobTitle: "HR director",
        worksAt: "Generic Example 2",
        images: {
            avatar: undefined,
            company: undefined
        }
    }
]

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