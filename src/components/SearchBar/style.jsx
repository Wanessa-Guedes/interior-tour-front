import styled from "styled-components"

export const SBWithDropdown = styled.section`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 650px) {
        width: 100%;
        max-width: 600px;
    }
`

export const SearchBarContainer = styled.form`
    height: 45px;
    width: 563px;
    border-radius: 8px;
    display: flex;
    button {
        border: none;
        background-color: #FFFF;
        border-radius: 0 8px 8px 0;
        height: 47px;
    }
    @media screen and (max-width: 900px) {
        width: 350px;
    }
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const SearchBarInput = styled.input`
    border: none;
    height: 100%;
    width: 0;
    flex-grow: 1;
    border-radius: 8px 0 0 8px;
    padding-left: 14px;
    font-size: 19px;
    ::placeholder {
        color: #C6C6C6;
    }
`
export const SearchBarDropdown = styled.div`
    width: 100%;
    background-color: #E7E7E7;
    position: absolute;
    top: 8px;
    transform: translateY(${props => props.state ? '29px' : '0'});
    z-index: -1;
    padding-top: 8px;
    border-radius: 0 0 8px 8px;
`

export const Button = styled.div`
    cursor: pointer;
`

export const SearchBarButtonResult = styled(Button)`
    padding: 8px 17px;
    width: 100%;
    display: flex;
    gap: 12px;
    font-size: 19px;
    color: #515151;
    align-items: center;
    span {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
    small {
        font-size: 19px;
        color: #C5C5C5;
    }
`

export const SearchBarUnclickableButton = styled(SearchBarButtonResult)`
    cursor: default;
`