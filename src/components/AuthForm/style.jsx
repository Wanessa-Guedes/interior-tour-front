import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 13px;
    padding: 5%;
    width: 100%;
    input {
        height: 40px;
        border-radius: 6px;
        font-family: 'Square Peg', cursive ;
        font-size: 27px;
        font-weight: 700;
        padding: 0 17px;
        border-width: 0 0 2px;
        border-color: var(--block-buttons-color);
        ::placeholder {
            color: #9F9F9F;
        }
    }

    a {
        margin-top: 5px;
        font-size: 20px;
        color: black;
        text-decoration: none;
    }
    @media screen and (max-width: 1000px) {
        input, button {
            height: 55px;
            font-size: 22px;
        }
        a {
            font-size: 17px
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: var(--block-infos-city);
    border-radius: 30px 10px;
    margin-left: 25%;
`

export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--backgrund-title);
`

