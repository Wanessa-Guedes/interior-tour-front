import styled from "styled-components";


export const Container = styled.header `
    //height: 10vh;
    //border: solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--header-color);
    position: fixed;
    top: 0; 
    width: 100%;
    padding: 1%;
    z-index: 1;
`

export const ContainImages = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 1%;

    svg{
        height: 35px;
        width: 50px;
        cursor: pointer;

        :hover {
            color: var(--backgrund-title);
        }
    }
`

export const ContainNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 30px;
    font-family: var(--normal-font);
    border-radius: 0 8px 0 8px;
    z-index: 5;
    width: 15%;
    margin-left: 85%;
    cursor: pointer;
    position: fixed;
    top: 80px;

    @media screen and (max-width: 900px) {
        top: 60px;
        font-size: 10px;
        width: 25%;
        margin-left: 75%;
    }

    @media screen and (max-width: 600px) {
        top: 50px;
    }
`

export const ContainLogoTitle = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2% 0 2%;
    cursor: pointer;

    h3 {
        margin: 0 10% 0 10%;
    }

    @media screen and (max-width: 760px) {
        h3 {
            display: none;
        }

        img {
            width: 20px;
            height: 20px;
        }

        width: 10%;
    }
`

export const SiteIcon = styled.img`
    height: ${props => props.radius + 'px'};
    width: ${props => props.radius + 'px'};
`

export const Title = styled.h3`
    font-family: var(--title-font);
    font-size: 20px;
    width: 20%;
`