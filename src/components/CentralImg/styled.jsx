import styled from "styled-components";

export const Img = styled.img`
    width: 100%;
    max-height: 30vh;
    position: relative;
`

export const Container = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        position: absolute;
        font-family: var(--title-font);
        font-size: 50px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 900px) {
        h3 {
            font-size: 30px;
        }
    }
    @media screen and (max-width: 650px) {
        h3 {
            font-size: 20px;
        }
    }
`