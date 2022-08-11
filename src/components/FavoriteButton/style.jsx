import styled from "styled-components";

export const IconsPopUp = styled.div`

    .hdg-label-popup {
    display: none;
    position: absolute;
    width: 20%;
    background-color: rgba(96, 96, 102, 0.2);
    font-size: 10px;
    text-align: center;
  }
  
  svg:hover~.hdg-label-popup {
    display: block;
  }
`
