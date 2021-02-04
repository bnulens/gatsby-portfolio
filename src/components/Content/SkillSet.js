import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SkillGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 30px 30px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  width: 100%;
  margin-top: 32px;
`
const SkillInfo = styled.span`
  position: absolute;
  top: 120%;
  display: block;
  height: auto;
  width: 100px;
  margin: 0 auto;
  padding: 16px 8px 10px;
  transition: opacity ease-in 0.3s;
  opacity: 0;
  z-index: 50;
`
const SkillIcon = styled.img`
  display: block;
  width: 55px;
  z-index: 50;
`
const SkillItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${SkillIcon}:hover + ${SkillInfo} {
    opacity: 1;
  }
`
const SkillSet = () => {
  const data = useStaticQuery(graphql`
    query iconQuery {
      allFile(
        filter: { relativeDirectory: { eq: "developer/javascript-icons" } }
      ) {
        edges {
          node {
            base
            publicURL
          }
        }
      }
    }
  `)

  if (!data) {
    return <span>No icons found</span>
  }

  const icons = [...data.allFile.edges]
  const filteredIcons = []

  icons.forEach((icn) => {
    filteredIcons.push(icn.node)
  })

  return (
    <SkillGrid>
      {filteredIcons.map((icn, i) => {
        return (
          <SkillItem>
            <SkillInfo role="image">{icn.base}</SkillInfo>
            <SkillIcon src={icn.publicURL} alt={`skill-icon${i}`} key={i} />
          </SkillItem>
        )
      })}
    </SkillGrid>
  )
}

export default SkillSet
