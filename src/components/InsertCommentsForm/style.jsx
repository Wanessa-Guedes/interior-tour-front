import styled from "styled-components";


export const Form = styled.form`
        display: flex;
    flex-direction: column;
    text-align: center;
    gap: 13px;
    width: 90%;
    margin: 0 0 2% 2%;
    input {
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
`