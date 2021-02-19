import styled from "styled-components"

export const StyledAboutContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: var(--color-marine);
  width: 100vw;

  .content-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 90%;

    .content-left {
      display: none;

      @media screen and (min-width: 768px) {
        display: block;
        position: sticky;
        position: -webkit-sticky;
        top: 25%;
        margin: 15% 0 25% 0;
        width: 50%;

        h3 {
          font-size: 48px;
          font-weight: 400;
        }

        .content-left__list {
          display: flex;
          flex-direction: column;

          .content-left__bullet {
            display: flex;
            align-items: center;
            font-size: 38px;

            .content-left__bullet-index {
              display: inline-block;
              margin-right: 24px;
              font-weight: 100;
              color: var(--color-silver);

              &.active {
                font-weight: 300;
                color: var(--color-white);
              }
              &.inactive {
                filter: opacity(0.5);
              }
            }

            .content-left__bullet-link {
              font-weight: 100;
              color: var(--color-silver);

              &.active {
                font-weight: 400;
                color: var(--color-white);
              }
              &.inactive {
                filter: opacity(0.5);
              }
            }
          }
        }
      }
    }

    .content-right {
      width: 100%;

      @media screen and (min-width: 768px) {
        display: block;
        max-width: 50%;
        margin: 0;
        margin-left: 48%;
        margin-top: -500px;
        margin-bottom: 10%;
      }
    }
    @media screen and (min-width: 768px) {
      width: 90%;
      max-width: 1080px;
    }
  }
`

export const StyledAboutList = styled.ul`
  display: block;
  margin: 0 auto;

  .list-item__card {
    position: relative;
    display: block;
    margin: 120px 0px;

    .list-item__card-marker {
      display: none;
    }

    .list-item__article {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: justify;
      margin-bottom: 24px;

      .list-item__image {
        display: block;
        width: 100%;
        margin: 0 auto;
      }
      .list-item__title {
        display: block;
        font-size: 42px;
        font-weight: 300;
        margin-top: 24px;
      }
      .list-item__text {
        display: inline-block;
        font-size: 14px;
        font-weight: 300;
        text-align: justify;
        color: var(--color-silver);
      }
    }

    @media screen and (min-width: 768px) {
      padding: 0;
      margin-bottom: 100px;

      .list-item__card-marker {
        display: block;
        position: absolute;
        top: 25%;
        left: 0;
        height: 10%;
        width: 100%;
      }
      .list-item__article {
        align-items: flex-start;
        margin-bottom: 200px;

        .list-item__image {
          display: block;
        }
        .list-item__title {
          font-size: 56px;
        }
        .list-item__text {
          display: inline-block;
          text-align: justify;
          font-size: 16px;
        }
      }
    }
  }
`
