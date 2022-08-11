import styled from "styled-components";


export const NavHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;

    a {
        font-family: var(--default-font);
        font-size: 20px;
        color: black;
        text-decoration: none;
    }

    li {
        font-family: var(--default-font);
        font-size: 20px;
        color: black;
    }
`