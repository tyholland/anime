import styled from 'styled-components';

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
    width: 70px;
    padding: 5px;

    span {
      font-size: 12px;
    }
  }

  &.medium {
    width: 350px;
    padding: 15px;

    span {
      font-size: 14px;
    }
  }

  &.space{
    margin: 2%;
  }

  &.leagues {
    margin-bottom: 10px;
    padding: 10px;
    width: 150px;

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
