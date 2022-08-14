import styled from "styled-components";


export const CommentsInfo = styled.ul`
    // background-color: red;
    display: flex;
    flex-direction: column;
    //width: 20rem;
    align-items: flex-start;
    justify-content: center;
`

export const ContainerComments = styled.div`

`

export const ContainPicName = styled.div`
    width: 20rem;
    display: flex;
    align-items: center;
img {
        width: 10%;
        border-radius: 5px;
    }
`

export const ContainCommentButtons = styled.div`
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    margin-left: 2%;
    background-color: #C294C2;
    word-break: break-all;
    border-radius: 20px;

    span {
        margin-left: 2%;
    }

    svg {
        margin: 2%;
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }
`