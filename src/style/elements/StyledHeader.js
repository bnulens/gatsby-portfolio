import styled from "styled-components"

export const StyledHeader = styled.header`
  position: absolute;
  top: 6%;
  left: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 80vw;
  z-index: 100;

  .header__inner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 80vw;
    margin: 0 auto;

    nav.header__social-nav {
      display: flex;
      width: 50%;
      a.header__social-link {
        margin-right: 20px;
        img.header__social-icon {
          display: block;
          height: 30px;
          width: 30px;
          transition: filter ease 0.4s;

          :hover {
            filter: invert(100%);
          }
        }
      }
    }

    .header__site-nav {
      display: flex;
      justify-content: flex-end;
      width: 50%;

      a.header__site-nav-link {
        position: relative;
        width: auto;
        margin-right: 14px;
        padding: 8px;
        color: white;
        background: linear-gradient(to left, transparent 50%, black 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all ease-in 0.4s;

        :hover {
          color: white;
          background-position: left bottom;
        }
      }
    }
  }
`
