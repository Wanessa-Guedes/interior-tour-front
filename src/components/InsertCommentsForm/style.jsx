import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    text-align: center;
    gap: 13px;
    width: 50%;
    margin: 0 0 2% 2%;
    input {
        height: 40px;
        width: 100%;
        border-radius: 6px;
        font-family: var(--normal-font) ;
        font-size: 17px;
        font-weight: 700;
        padding: 0 17px;
        border-width: 0 0 2px;
        border-color: var(--backgrund-title);
        ::placeholder {
            color: #9F9F9F;
        }
    }

    @media screen and (max-width: 900px) {
        width: 350px;
    }
`

export const ContainFormButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
        text-decoration: none;
        border: none;
        cursor: pointer;
    }
`