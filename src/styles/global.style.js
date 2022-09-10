import { createGlobalStyle } from 'styled-components';

export const $GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
  
  .container {
    padding: 5%;
  }

  .link {
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;
    margin-top: 30px;
    text-align: center;
    color: rgb(27, 5, 246);
    text-decoration-line: underline;
  }

  .title {
    font-weight: 700;
    margin-bottom: 5%;
    font-size: 30px;
    text-align: center;
  }

  .subTitle {
    margin-bottom: 5%;
    font-size: 20px;
    text-align: center;
  }

  .right {
    text-align: right;
  }

  .circle {
    width: 15px;
    height: 15px;
    border-radius: 10px;
  }

  .fireAffinity {
    background-color: #cc0000;
  }

  .arcaneAffinity {
    background-color: #999;
  }

  .darknessAffinity {
    background-color: #000;
  }

  .waterAffinity {
    background-color: rgb(27, 5, 246);
  }

  .iceAffinity {
    background-color: rgb(137, 196, 244);
  }

  .electricAffinity {
    background-color: #cc0000;
  }

  .centerContent {
    margin-top: 35%;
    margin-bottom: 50%;
  }
`;
