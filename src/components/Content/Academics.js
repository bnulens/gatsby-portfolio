import React from "react"
import styled from "styled-components"

import Graduation from "../../assets/icons/misc/graduation2.svg"

const StyledHat = styled(Graduation)``

const StyledItem = styled.li`
  margin-top: 24px;

  .list-item__study-item-wrapper {
    display: flex;
    justify-content: space-between;

    .list-item__study-item-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 90%;

      h4 {
        font-size: 24px;
        font-weight: 300;
        text-align: left;
      }

      p {
        font-size: 18px;
        font-weight: 300;
        color: var(--color-silver);
        filter: opacity(0.8);
      }

      @media screen and (min-width: 768px) {
        h4 {
          font-size: 32px;
        }

        p {
          font-size: 24px;
        }
      }
    }

    ${StyledHat} {
      display: block;
      width: 10%;
      height: auto;

      path {
        fill: var(--color-silver);
      }
    }

    .blank {
      display: inline-block;
      width: 10%;
      height: auto;
    }
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
                <h4>{s.title}</h4>
                <p>
                  {s.place} - {s.organisation}
                </p>
              </div>
              {s.success ? <StyledHat /> : <span className="blank"></span>}
            </div>
          </StyledItem>
        )
      })}
    </ul>
  )
}

export default Academics
