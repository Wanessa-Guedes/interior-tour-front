import styled from "styled-components"

export const ConfirmButton = styled.button`
    width: 134px;
    height: 37px;
    background: #1877F2;
    border-radius: 5px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    border: none;
    margin: 47px 13px;
    cursor: pointer;
`
export const CancelButton = styled.button`
    width: 134px;
    height: 37px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #1877F2;
    border: none;
    margin: 47px 13px;
    cursor: pointer;
`
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
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
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
        width: 597,
        height: 262,
        color: '#ffffff',
        backgroundColor: '#333333',
        borderRadius: '50px',
        position: 'absolute',
        top: '35%',
        left: '35%',
        padding: '38px 120px',
        overflow: 'hidden'
    }
}