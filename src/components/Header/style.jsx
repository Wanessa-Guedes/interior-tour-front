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
    justify-content: center;

    svg{
        height: 50%;
        width: 30%;
        cursor: pointer;
    }
`

export const ContainNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 0 8px 0 8px;
    z-index: 5;
    width: 15%;
    margin-left: 85%;
    cursor: pointer;
    position: fixed;
    top: 80px;
`

export const ContainLogoTitle = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2% 0 2%;

    h3 {
        margin: 0 10% 0 10%;
    }
`

export const SiteIcon = styled.img`
    height: ${props => props.radius + 'px'};
    width: ${props => props.radius + 'px'};
`

export const Title = styled.h3`
    font-family: 'Square Peg', cursive;
    font-size: 30px;
`