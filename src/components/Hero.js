import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledHero = styled.div`
    img {
        display: block;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        width: 100vw;
        max-width: 100vw;
        max-height: 100vh;
        object-fit: cover;
    }
    h2 {
        position: absolute;
        top: 30%;
        left: 0;
        color: var(--color-white);
        font-size: 4vw;
        font-weight: 200;
    }
`

const Hero = () => {
    const data = useStaticQuery(graphql`
        query CloudinaryImage {
            cloudinaryMedia(public_id: {eq: "gatsby-portfolio/portfolio-hero-2"}) {
                secure_url
            }
        }
        `
    );
    const clImage = data.cloudinaryMedia.secure_url
    if (!clImage) {
        return <div className="default-hero">Picture not found</div>
    }

    return (
        <StyledHero hasHero>
            <img src={clImage} alt="cloudinary-hero"/>
            <h2>Lining up a shot</h2>
        </StyledHero>
    )
}

export default Hero
