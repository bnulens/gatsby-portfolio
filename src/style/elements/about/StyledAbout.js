import styled from "styled-components"

export const StyledAboutContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: white;
  background-color: var(--color-marine);
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  .content-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 80vw;

    .content-left {
      display: block;
      position: sticky;
      position: -webkit-sticky;
      top: 25%;
      margin: 10% 0 25% 0;
      width: 40%;

      h3 {
        font-size: 4vw;
        font-weight: 400;
      }

      ul {
        display: flex;
        flex-direction: column;
        margin-top: 40px;

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
        position: relative;
        width: 100%;

        h1 {
          font-size: 8vw;
        }

        ul {
          display: none;
        }
      }
    }

    .content-right {
      display: inline-block;
      width: 60%;
      margin-left: 50%;
      margin-top: -550px;
      margin-bottom: 10%;

      @media ${(props) => props.theme.mediaQueries.medium} {
        display: block;
        width: 100%;
        margin: 0;
      }
    }
  }
`

export const StyledAboutList = styled.ul`
  display: block;

  .list-item__card {
    position: relative;
    display: block;
    min-height: 500px;
    padding: 0 24px;
    margin-bottom: 100px;

    .list-item__card-marker {
      position: absolute;
      top: 25%;
      left: 0;
      height: 10%;
      width: 100%;
    }

    .list-item__article {
      display: flex;
      flex-direction: column;
      text-align: justify;
      margin-bottom: 24px;

      .list-item__image {
        display: block;
        width: 10vw;
      }
      .list-item__title {
        display: block;
        font-size: 4vw;
        font-weight: 400;
        margin-top: 24px;
      }
      .list-item__text {
        display: inline-block;
        text-align: left;
      }
    }

    @media ${(props) => props.theme.mediaQueries.medium} {
      padding: 0;
      margin-bottom: 100px;

      .list-item__article {
        .list-item__image {
          width: 25vw;
          margin-bottom: 2vh;
        }
        .list-item__title {
          font-size: 12vw;
        }
        .list-item__text {
          display: inline-block;
          text-align: justify;
        }
      }
    }
  }
`
