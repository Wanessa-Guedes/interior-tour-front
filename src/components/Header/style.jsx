import styled from "styled-components";


export const Container = styled.header `
    height: 10vh;
    border: solid red;
    display: flex;
    justify-content: space-between;
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
    align-items: flex-end;
    justify-content: center;
    background-color: white;
    z-index: 5;
    width: 20%;
    margin-left: 79%;
    cursor: pointer;
    position: absolute;
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