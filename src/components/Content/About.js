import React, { useEffect, useState } from "react"
import { Image } from "cloudinary-react"
import { useTranslation } from "react-i18next"

import ScrollProgress from "./ScrollProgress"
import Academics from "./Academics"

import { listContent } from "../../info/textContents"
import {
  StyledAboutContent,
  StyledAboutList,
} from "../../style/elements/about/StyledAbout"
import SkillSet from "./SkillSet"

const About = () => {
  const { t } = useTranslation()
  const cardRef = listContent.map((a) => {
    a = React.createRef()
    return a
  })

  const academics = [...listContent[0].studies]
  const [activeLink, setActiveLink] = useState(0)

  // Index of clicked target toggles active class
  const handleClick = (e, i) => {
    if (e.target.value !== activeLink) {
      e.preventDefault()
      e.stopPropagation()
      setActiveLink(i)
      cardRef[i].current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isElementInViewport = (el) => {
    let rect = el.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  useEffect(() => {
    const handleScroll = (e) => {
      if (typeof window !== undefined) {
        e.preventDefault()
        const markers = [
          ...document.getElementsByClassName("list-item__card-marker"),
        ]

        if (isElementInViewport(markers[0])) {
          setActiveLink(0)
        } else {
          markers.forEach((m, i) => {
            switch (isElementInViewport(m) && i !== activeLink) {
              case true:
                setActiveLink(i)
                break
              case false:
                // console.log(i)
                break
              default:
                setActiveLink(0)
                break
            }
          })
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: false })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeLink])

  return (
    <StyledAboutContent id={t("navbar.about")}>
      <ScrollProgress />
      <div className="content-container">
        <div className="content-left">
          <h3>{t("about.whyMe")}</h3>
          <ul>
            {listContent.map((a, i) => {
              return (
                <li className="content-left__bullet" key={i}>
                  <h3
                    className={`content-left__bullet-index ${
                      activeLink === i ? "active" : "inactive"
                    }`}
                  >{`0${i + 1}`}</h3>
                  <a
                    className={`content-left__bullet-link ${
                      activeLink === i ? "active" : "inactive"
                    }`}
                    href={`/#${a.tag}`}
                    key={a.tag}
                    value={i}
                    onClick={(e) => handleClick(e, i)}
                  >
                    {t(a.title)}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="content-right">
          <StyledAboutList>
            {listContent.map((a, i) => {
              return (
                <li
                  className="list-item__card"
                  key={Math.random() * 10}
                  ref={cardRef[i]}
                >
                  <div className="list-item__card-marker"></div>
                  <article className="list-item__article">
                    <Image
                      cloudName="bnulens"
                      publicId={`gatsby-portfolio/about/${a.image}.png`}
                      secure="true"
                      format="png"
                      width="150"
                      alt={a.image}
                    />
                    <h3 className="list-item__title">{t(a.title)}</h3>
                    <p className="list-item__text">{t(a.comment)}</p>
                    {i === 0 ? (
                      <Academics education={academics} />
                    ) : (
                      <span></span>
                    )}
                    {i === 1 ? <SkillSet /> : <span></span>}
                  </article>
                </li>
              )
            })}
          </StyledAboutList>
        </div>
      </div>
    </StyledAboutContent>
  )
}

export default About
