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

            h1 {
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
                        margin-right: 24px;
                        font-weight: 100;
                        color: var(--color-white);
                    }

                    .content-left__bullet-link-inactive {
                        font-weight: 400;
                        color: var(--color-white);
                        filter: opacity(0.5);
                    }
                    .content-left__bullet-link-active {
                        font-weight: 700;
                        color: var(--color-white);
                    }

                }
            }
        }
        
        .content-right {
            display: inline-block;
            width: 60%;
            margin-left: 50%;
            margin-top: -550px;
            margin-bottom: 10%;
        }
    }
`

export const StyledAboutList = styled.ul`
    display: block;
    
    .list-item__card {
        position: relative;
        display: block;
        width: 100%;
        height: 100vh;
        padding: 12%;

        .list-item__card-marker {
            position: absolute;
            top: 25%;
            left: 0;
            height: 10%;
            width: 100%;
            /* border: 1px solid red; */
        }

        .list-item__article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: justify;
            
            .list-item__image {
                display: block;
                width: 10vw;
            }
            .list-item__title {
                display: block;
                font-size: 6vw;
                font-weight: 400;
            }
            .list-item__text {
                display: inline-block;
                text-align: left;
            }
        }
    }
`