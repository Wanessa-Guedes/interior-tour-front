import styled from "styled-components";


export const CommentsInfo = styled.ul`
    width: 20%;
    border-bottom: 2px solid var(--block-card-color);
    margin-left: 2%;
`

export const ContainerComments = styled.div`
   // background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ContainPicName = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    img {
        width: 10%;
        border-radius: 2px;
    }
`

export const ContainCommentButtons = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: var(--backgrund-title);
    border-radius: 10px;

    svg {
        margin: 2%;
    }
`