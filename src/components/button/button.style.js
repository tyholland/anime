import styled from 'styled-components';

export const $BtnWrapper = styled.div`
  margin-top: 5px;
`;

export const $Btn = styled.button`
  border-radius: 10px;
  padding: 3%;
  margin-top: 10px;
  width: 100%;

  &.orange {
    background-color: rgb(249, 128, 17);
  }
  
  &.yellow {
    background-color: rgb(250, 179, 28);
  }
  
  &.blue {
    background-color: rgb(27, 5, 246);
  }
  
  &.black {
    background-color: #000;
  }
  
  &.red {
    background-color: #cc0000;
  }

  &.small {
    width: 8%;
    padding: 1%;

    span {
      font-size: 12px;
    }
  }

  &.leagues {
    margin-bottom: 10px;
    padding: 15px;

    span {
      font-size: 15px;
    }
  }
`;

export const $BtnText = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;

  &.whiteText {
    color: #fff;
  }
  
  &.blackText {
    color: #000;
  }
  
  &.yellowText {
    color: rgb(250, 179, 28);
  }
`;  
