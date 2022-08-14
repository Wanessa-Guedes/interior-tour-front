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
        width: 15%;
        border-radius: 5px;
    }

    span {
        margin-left: 2%;
        font-family: var(--normal-font);
        font-size: 20px;
    }
`

export const ContainCommentButtons = styled.div`
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 2%;
    background-color: #C294C2;
    word-break: normal;
    border-radius: 20px;

    span {
        font-family: var(--normal-font);
        font-size: 20px;
    }

    div {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        svg {
            padding: 2%;
            font-size: 20px;
        }
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }
`