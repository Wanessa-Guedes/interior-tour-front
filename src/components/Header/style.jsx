import styled from "styled-components";


export const Container = styled.main `
    width: 100%;
    height: 10vh;
    background-color: red;
`

export const SiteIcon = styled.img`
    height: ${props => props.radius + 'px'};
    width: ${props => props.radius + 'px'};
`