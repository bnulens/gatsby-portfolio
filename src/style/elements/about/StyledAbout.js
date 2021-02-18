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
              font-weight: 400;
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
      @media ${(props) => props.theme.mediaQueries.medium} {
        display: block;
        position: sticky;
        position: -webkit-sticky;
        top: 20%;
        margin: 10% 0 25% 0;
        width: 40%;
        h1 {
          font-size: 34px;
        }
      }
    }

    .content-right {
      width: 100%;
      max-width: 100vw;

      @media ${(props) => props.theme.mediaQueries.medium} {
        display: block;
        width: 60%;
        margin: 0;
        margin-left: 50%;
        margin-top: -580px;
        margin-bottom: 10%;
      }
    }
  }
`

export const StyledAboutList = styled.ul`
  display: block;
  margin: 0 auto;

  .list-item__card {
    position: relative;
    display: block;
    margin: 100px 0px;

    .list-item__card-marker {
      display: none;
    }

    .list-item__article {
      display: flex;
      flex-direction: column;
      text-align: justify;
      margin-bottom: 24px;

      .list-item__image {
        display: block;
        margin: 0 auto;
      }
      .list-item__title {
        display: block;
        font-size: 10vw;
        font-weight: 300;
        margin-top: 24px;
      }
      .list-item__text {
        display: inline-block;
        font-size: 4vw;
        font-weight: 100;
        text-align: justify;
      }
    }

    @media ${(props) => props.theme.mediaQueries.medium} {
      padding: 0;
      margin-bottom: 100px;

      .list-item__card-marker {
        position: absolute;
        top: 25%;
        left: 0;
        height: 10%;
        width: 100%;
      }
      .list-item__article {
        .list-item__image {
          width: 25vw;
          margin-bottom: 2vh;
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
