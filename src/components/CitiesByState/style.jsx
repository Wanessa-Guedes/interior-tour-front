import styled from "styled-components";


export const Container = styled.div`
    width: 20%;
    height: 20%;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 90%;
        height: 90%;
        margin-top: 1%;
        border-radius: 5px;
    }
`

export const MainInfo = styled.main`
    border: solid green;
    display: flex;
    flex-wrap: wrap;
    margin: 1% 1%;
    justify-content: flex-start;
`

export const CityInfos = styled.div`
    border: solid red;
`

export const Buttons = styled.div`
    border: solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerDown = styled.div`
    display: flex;
`

export const NoCitiesFound = styled.p`
    font-family: var(--normal-font);
    font-size: 20px;
    text-align: center;
`

export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--backgrund-title);
    margin-top: 25%;
`