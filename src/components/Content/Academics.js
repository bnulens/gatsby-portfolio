import React from "react"
import styled from "styled-components"

import Graduation from "../../assets/icons/misc/graduation2.svg"

const StyledItem = styled.li`
  margin-top: 32px;
  font-weight: 100;

  .list-item__study-item-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    .list-item__study-item-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4 {
        position: relative;
        font-size: 24px;
        font-weight: 100;
        text-align: left;
      }
      p {
        color: var(--color-silver);
      }
    }
  }
`

const StyledHat = styled(Graduation)`
  position: absolute;
  top: 2px;
  right: -45px;
  display: block;
  width: 32px;
  path {
    fill: var(--color-silver);
  }
`

const Academics = ({ education }) => {
  return (
    <ul className="list-item__studies">
      {education.map((s) => {
        return (
          <StyledItem key={s.title}>
            <div className="list-item__study-item-wrapper">
              <div className="list-item__study-item-content">
                <h4>
                  {s.title}
                  {s.success ? <StyledHat /> : null}
                </h4>
                <p>
                  {s.place} - {s.organisation}
                </p>
              </div>
            </div>
          </StyledItem>
        )
      })}
    </ul>
  )
}

export default Academics
