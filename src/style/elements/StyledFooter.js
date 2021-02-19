import styled from "styled-components"

export const StyledFooter = styled.footer`
  height: 200px;
  padding: 32px;
  color: white;
  background-color: var(--color-black);

  .footer__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    height: 100%;

    .footer__brief {
      h3 {
        font-size: 32px;
        font-weight: 100;
        text-decoration: underline;
      }

      p {
        font-weight: 100;
      }
    }

    .footer__social-media {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      nav {
        display: flex;
        justify-content: space-between;

        a.footer-link {
          display: block;
          margin-right: 12px;

          img.footer__social-icon {
            display: block;
            width: 20px;
          }
        }
      }
    }
    @media ${(props) => props.theme.mediaQueries.medium} {
      max-width: 1080px;
    }
  }
`
