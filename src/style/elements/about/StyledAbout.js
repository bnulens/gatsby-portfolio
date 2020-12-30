import styled from "styled-components"

export const StyledAboutList = styled.ul`
    display: block;
    
    .list-item__card {
        display: block;
        margin-bottom: 148px;

        .list-item__article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            .list-item__image {
                display: block;
                width: 10vw;
            }
            .list-item__title {
                display: block;
                font-size: 4vw;
                font-weight: 400;
            }
            .list-item__text {
                display: inline-block;
                text-align: left;
            }
        }
    }
`

export const StyledAboutContent = styled.section`
    position: relative;
    display: flex;
    width: 100vw;
    color: white;
    background-color: var(--color-marine);
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    .content-container {
        margin: 0 auto;
        width: 100%;
        max-width: 80vw;

        .content-left {
            display: block;
            position: sticky;
            position: -webkit-sticky;
            top: 40px;
            margin: 80px 0 240px 0;
            width: 40%;

            h1 {
                font-size: 4vw;
                font-weight: 400;
            }
        }
        
        .content-right {
            display: inline-block;
            width: 60%;
            margin-left: 50%;
        }
    }
`
