import styled, { createGlobalStyle } from 'styled-components';

export const $GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    min-width: 960px;
    max-width: 1200px;
    font-family: Arial, sans-serif;
  }

  button {
    cursor: pointer;
    font-family: Arial, sans-serif;
  }
`;

export const $GlobalContainer = styled.div`
  padding: 2%;

  &.grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const $GlobalLink = styled.div`
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  margin-top: 30px;
  text-align: center;
  color: rgb(27, 5, 246);
  text-decoration-line: underline;
`;

export const $GlobalTitle = styled.div`
  font-weight: 700;
  margin-bottom: 5%;
  font-size: 30px;
  text-align: center;
`;

export const $GlobalSubTitle = styled.div`
  margin-bottom: 5%;
  font-size: 20px;
  text-align: center;
`;

export const $GlobalCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;

  &.fire {
    background-color: #cc0000;
  }

  &.arcane {
    background-color: #999;
  }

  &.darkness {
    background-color: #000;
  }

  &.water {
    background-color: rgb(27, 5, 246);
  }

  &.ice {
    background-color: rgb(137, 196, 244);
  }

  &.electric {
    background-color: #cc0000;
  }
`;

export const $GlobalCenterContent = styled.div`
  margin-top: 35%;
  margin-bottom: 50%;
`;
