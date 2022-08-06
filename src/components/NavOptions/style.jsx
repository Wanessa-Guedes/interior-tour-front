import styled from "styled-components";


export const NavHeader = styled.nav`
    display: flex;
`

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;

    a {
        font-size: 20px;
        color: black;
        text-decoration: none;
    }

    li {
        font-size: 20px;
        color: black;
    }
`