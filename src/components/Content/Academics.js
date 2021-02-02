import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import Graduation from "../../icons/graduation2.svg"

const StyledItem = styled.li`
  margin-top: 32px;
  font-weight: 100;

  .list-item__study-item-wrapper {
    display: flex;
    width: 100%;
    .list-item__study-item-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4 {
        font-size: 24px;
        font-weight: 100;
        margin-left: 20px;
        text-align: left;
      }
      p {
        color: var(--color-silver);
      }
    }
  }
`

const StyledHat = styled(Graduation)`
  display: block;
  width: 32px;
  path {
    fill: var(--color-silver);
  }
`

const Academics = ({ education }) => {
  const { t } = useTranslation()
  return (
    <ul className="list-item__studies">
      {education.map((s) => {
        return (
          <StyledItem key={s.title}>
            <div className="list-item__study-item-wrapper">
              {s.success ? <StyledHat /> : null}
              <div className="list-item__study-item-content">
                <h4>{s.title}</h4>
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
