import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SkillGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  width: 100%;
  margin-top: 32px;
`
const SkillIcon = styled.img`
  display: block;
  width: 55px;
`
const SkillInfo = styled.span``
const SkillItem = styled.div``
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
