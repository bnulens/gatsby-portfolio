import React from "react"
import styled from "styled-components"

const StyledItem = styled.li`
  margin-top: 32px;
  font-weight: 100;

  h4 {
    font-size: 24px;
    font-weight: 100;
  }

  p {
    color: var(--color-silver);
  }
`

const Academics = ({ education }) => {
  return (
    <ul className="list-item__studies">
      {education.map((s) => {
        return (
          <StyledItem key={s.title}>
            <div className="list-item__study-item-header">
              <h4>{s.title}</h4>
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
