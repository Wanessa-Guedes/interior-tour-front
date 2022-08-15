import styled from "styled-components";


export const CityTitle = styled.h1`
    font-family: 'Square Peg', cursive;
    font-size: 40px;
    text-align: center;
    word-break: normal;

    @media screen and (max-width: 900px) {
        font-size: 30px;
    }
`

export const ImgCity = styled.img`
    width: 30%;
    border-radius: 5%;

    @media screen and (max-width: 900px) {
        width: 50%;
    }

`

export const CityDescription = styled.h3`
    width: 90%;
    font-family: var(--default-font);
    font-size: 30px;
    text-align: center;
    word-break: normal;

    
    @media screen and (max-width: 900px) {
        font-size: 20px;
    }
`

export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;

    @media screen and (max-width: 900px) {
        margin-top: 11%;
    }
`

export const CommentsText = styled.h3`
    font-family: var(--default-font);
    font-size: 40px;
    text-align: center;
    margin-top: -1%;
`

export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--backgrund-title);
    margin-top: 25%;
`