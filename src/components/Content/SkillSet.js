import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SkillGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px 40px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  width: 100%;
  margin-top: 32px;
`
const SkillInfo = styled.span`
  position: absolute;
  bottom: -35px;
  display: inline-block;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: var(--color-purple);
  transition: opacity ease-in 0.3s;
  opacity: 0;
  z-index: 1000;
`
const SkillIcon = styled.img`
  display: block;
  width: 45px;
  z-index: 50;
`
const SkillItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${SkillInfo} {
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
          <SkillItem key={i}>
            <SkillInfo role="image">{icn.base.replace(".svg", "")}</SkillInfo>
            <SkillIcon src={icn.publicURL} alt={`skill-icon${i}`} key={i} />
          </SkillItem>
        )
      })}
    </SkillGrid>
  )
}

export default SkillSet
