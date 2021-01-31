import React from "react"
import styled from "styled-components"

const StyledItem = styled.li`
  margin-top: 24px;
`

const Academics = ({ education }) => {
  return (
    <ul className="list-item__studies">
      {education.map((s) => {
        return (
          <StyledItem key={s.title}>
            <div className="list-item__study-item-header">
              <h3>{s.title}</h3>
            </div>
            <div className="list-item__study-item-content">
              <p>
                {s.place} - {s.organisation}
              </p>
              <p>{s.success}</p>
            </div>
          </StyledItem>
        )
      })}
    </ul>
  )
}

export default Academics
