import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2% 0 2% 0;
`

export const Input  = styled.input`
    height: 100%;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 2%;

    button {
        cursor: pointer;
        background-color: var(--main-background-color);
        border: none;
        border-radius: 10px;
        font-family: var(--normal-font);
    }
`