import styled from "styled-components"

export const NameAndButtons = styled.div`
    display: flex;
    justify-content: space-between;
`
export const EditAndDel = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    width: 50px;
`
export const Input  = styled.input`
    height: 100%;
`
export const ContentModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    font-family: var(--normal-font);
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 41px;
    text-align: center;
    word-break: normal;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    @media screen and (max-width: 900px) {
        font-size: 20px;
    }
`
export const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    content: {
        width: "40%",
        height: "25%",
        color: '#ffffff',
        backgroundColor: "#79A9E8",
        borderRadius: '50px',
        position: 'absolute',
        top: '35%',
        left: '35%',
        overflow: 'hidden'
    }
}

export const Button = styled.button`
    width: 30% ;
    height: 30%;
    border: none;
    border-radius: 5px;
    background-color: var(--buttons);
    cursor: pointer;

    span {
        font-family: var(--normal-font);
        color: #FFFF;
        font-size: 20px;
    }
`