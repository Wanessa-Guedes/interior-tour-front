import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 13px;
    width: 90%;
    margin-left: 2%;
    input, button {
        height: 40px;
        border-radius: 6px;
        font-family: 'Square Peg', cursive ;
        font-size: 27px;
        font-weight: 700;
        padding: 0 17px;
        border-width: 0 0 2px;
        border-color: #7618f2;
        ::placeholder {
            color: #9F9F9F;
        }
    }
    button {
        width: 50%;
        margin-left: 25%;
        background-color: #7618f2;
        color: white;
        cursor: pointer;
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