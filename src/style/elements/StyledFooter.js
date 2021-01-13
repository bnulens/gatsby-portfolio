import styled from "styled-components"

export const StyledFooter = styled.footer`
    height: 300px;
    width: 100%;
    padding: 32px;
    color: white;
    background-color: var(--color-coal);

    .footer__inner-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80vw;
        margin: 0 auto;

        .footer__brief {
            h3 {
                font-size: 40px;
                font-weight: 100;
                text-decoration: underline;
            }

            p {
                font-weight: 100;
            }
        }

        .footer__social-media {
            nav {
                display: flex;
                justify-content: space-between;
                width: 100px;

                a.footer-link {
                    display: block;
                    width: 10px;

                    img.footer__social-icon {
                        display: block;
                        width: 25px;
                    }
                }
            }
        }
    }
`