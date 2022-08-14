import styled from "styled-components";


export const MainContain = styled.main`
    display: flex;
    align-items: center;
`
export const ContainInfos = styled.ul`
    width: 50%;
    height: 10rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;
    border-radius: 10px;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-right: 5%;
    }
`

export const ContainImgTxt = styled.li`
    font-family: var(--normal-font);
    background-color: #C294C2;
    word-break: normal;
    border-radius: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        margin: 0 10% 0 2%;
        padding: 2%;
    }

    img {
        width: 7%;
    }
`

export const Title = styled.h1`
    text-align: center;
    font-family: var(--title-font);
    margin-top: 10%;
    color: black;
`