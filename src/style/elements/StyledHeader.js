import styled from "styled-components"

export const StyledHeader = styled.header`
    height: 100px;
    border: 1px solid orange;

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
                margin-right: 12px;
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
                margin-right: 14px;
                padding: 8px;
                transition: all ease-in 0.2s;

                :hover {
                    color: white;
                    background-color: var(--color-black);
                }
            }
        }
    }
`
