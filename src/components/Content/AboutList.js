import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { StyledAboutList } from '../../style/elements/about/StyledAbout'

const AboutList = ({ listContent }) => {
    const data = useStaticQuery(graphql`
        query CloudinaryImages {
                allCloudinaryMedia(filter: {public_id: {glob: "gatsby-portfolio/about/*"}}) {
                    edges {
                        node {
                            secure_url
                        }
                    }
                }
            }
        `
    );
    const clImages = data.allCloudinaryMedia.edges;

    const filteredUrls = [];

    if (!clImages || clImages === undefined || clImages === null){
        return (
            <StyledAboutList>
                {
                    listContent.map(a => {
                        return (
                            <li className="list-item__card" key={Math.random() * 10}>
                                <article className="list-item__article">
                                    <img src="" alt="item" className="list-item__image"/>
                                    <h3 className="list-item__title">{a.title}</h3>
                                    <p className="list-item__text">{a.comment}</p>
                                </article>
                            </li>
                        ) 
                    })
                }
            </StyledAboutList>
        )
    } else {
        clImages.forEach((item) => {
            filteredUrls.push(item.node.secure_url)
        });
    }

    return (
        <>
            <StyledAboutList>
                {
                    listContent.map((a, i) => {
                        return (
                            <li className="list-item__card" key={Math.random() * 10}>
                                <article className="list-item__article">
                                    <img src={filteredUrls[i]} alt="item" className="list-item__image"/>
                                    <h3 className="list-item__title">{a.title}</h3>
                                    <p className="list-item__text">{a.comment}</p>
                                </article>
                            </li>
                        ) 
                    })
                }
            </StyledAboutList>
        </>
    )
}

export default AboutList