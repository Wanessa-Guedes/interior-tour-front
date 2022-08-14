import styled from 'styled-components'

const AppContainer = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200;300;400;500;600;700&family=Passion+One:wght@400;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  --main-background-color: #C1DBFF;
  --block-card-color:#FFE7FF;
  --block-buttons-color: #88EAE4;
  --backgrund-title: #FBCAFB;
  --header-color: #FFE7FF50;
  --title-font: 'Indie Flower', cursive;
  --normal-font: 'Oswald', sans-serif;
  --default-font: 'Square Peg', cursive;
`

export default AppContainer;

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

    p {
        width: 65%;
        word-break: normal;
        font-family: var(--normal-font);
        font-size: 13px;
    }

    h6 {
        font-family: var(--normal-font);
        font-size: 12px;
        font-weight: bold;
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