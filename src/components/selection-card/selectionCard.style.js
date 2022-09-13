import styled from 'styled-components';

export const $SelectionCardBlock = styled.button`
  border-radius: 10px;
  padding: 3%;
  margin: 2%;
  width: 350px;
  height: 400px;
  background-image: url("/assets/abz-logo.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 50% 15%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &.orange {
    background-color: rgba(249, 128, 17, .6);
  }
  
  &.yellow {
    background-color: rgba(250, 179, 28, .6);
  }
  
  &.blue {
    background-color: rgba(27, 5, 246, .6);
  }
  
  &.black {
    background-color: #00000060;
  }
  
  &.red {
    background-color: #cc000060;
  }
`;

export const $SelectionCardText = styled.span`
  text-align: center;
  font-size: 35px;
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
