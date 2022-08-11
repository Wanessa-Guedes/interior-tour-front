import styled from "styled-components";


export const Container = styled.div`
    width: 20%;
    // height: 200px;
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
    //border: solid green;
    display: flex;
    flex-wrap: wrap;
    //margin: 1% 1%;
    justify-content: flex-start;
    // background-color: var(--block-infos-city);
`

export const CityInfos = styled.div`
    width: 90%;
    height: 100%;

    a {
        text-decoration: none;
        color: white;
    }

    button {
        padding: 2%;
        margin-bottom: 1%;
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