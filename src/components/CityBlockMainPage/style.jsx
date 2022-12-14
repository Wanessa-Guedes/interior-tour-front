import styled from "styled-components";


export const Container = styled.div`
    max-width: 300px;
    min-height: 350px;
    background-color: var(--block-card-color);
    border-radius: 5px;
    box-shadow: 5px 10px #888888;
    margin-left: 2%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :hover {
        transform: scale(1.1);
    }

    img {
        width: 90%;
        height: 90%;
        margin-top: 1%;
        border-radius: 10px;
    }
`

export const MainInfo = styled.main`
    //max-width: 100%;
    max-height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2%;
`

export const CityInfos = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: white;
    }

    button {
        padding: 2%;
        margin-bottom: 1%;
    }

    p {
        width: 65%;
        word-break: normal;
        font-family: var(--normal-font);
        font-size: 13px;
    }

    h6 {
        font-family: var(--title-font);
        font-size: 20px;
        font-weight: 700;
        margin: -2% 0 -2% 0;
    }
`

export const Buttons = styled.div`
    //border: solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--block-buttons-color);
    padding: 5%;
    margin: 2% 0 2% 0;
    border-radius: 20px 5px;
`
export const ContainerDown = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    word-break: break-word;
`

export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--backgrund-title);
    margin-top: 25%;
`
export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: var(--buttons);
    cursor: pointer;
`