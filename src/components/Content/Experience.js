import React from "react"

import PeerReviews from "./PeerReviews"
import { StyledExperience } from "../../style/elements/StyledExperience"
import { useTranslation } from "react-i18next"

const Experience = () => {
  const { t } = useTranslation()
  return (
    <StyledExperience id={t("navbar.experience")}>
      <div className="experience__container">
        <div className="experience__header">
          <h3>{t("experience.headingTitle")}</h3>
          <p>{t("experience.heading")}</p>
        </div>
        <div className="experience__links">
          <a
            className="link__record-store"
            href="https://epic-galileo-8a7f26.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("experience.links.recordStore")}
          </a>
          <a
            className="link__motivation"
            href="https://elated-hypatia-859418.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("experience.links.motivation")}
          </a>
        </div>
      </div>
      <PeerReviews />
    </StyledExperience>
  )
}

export default Experience
