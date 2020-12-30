import React from "react"

import PeerReviews from "./PeerReviews"
import { StyledExperience } from "../../style/elements/experience/StyledExperience"

const Experience = () => {
    return (
        <StyledExperience id="experience">
            <div className="experience__container">
                <div className="experience__header">
                    <h3>Ready to rebound</h3>
                    <p>After a couple attempts in finding a proper field of education, I am convinced I now am on the right track. I feel ready to strike and make this the greatest rebound of my life.</p>
                </div>
                <div className="experience__links">
                    <a className="link__record-store" href="https://app.netlify.com/sites/epic-galileo-8a7f26/overview" target="_blank" rel="noopener noreferrer">Record store</a>
                    <a className="link__motivation" href="https://unruffled-bartik-c63ef3.netlify.app/" target="_blank" rel="noopener noreferrer">Motivation</a>
                </div>
            </div>
            <PeerReviews/>
        </StyledExperience>
    )
}

export default Experience