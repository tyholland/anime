import styled, { createGlobalStyle } from 'styled-components';

export const $GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export const $GlobalContainer = styled.div`
  padding: 5%;
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

export const $GlobalRight = styled.div`
  text-align: right;
`;

export const $GlobalCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
`;

export const $GlobalFireAffinity = styled.div`
  background-color: #cc0000;
`;

export const $GlobalArcaneAffinity = styled.div`
  background-color: #999;
`;

export const $GlobalDarknessAffinity = styled.div`
  background-color: #000;
`;

export const $GlobalWaterAffinity = styled.div`
  background-color: rgb(27, 5, 246);
`;

export const $GlobalIceAffinity = styled.div`
  background-color: rgb(137, 196, 244);
`;

export const $GlobalElectricAffinity = styled.div`
  background-color: #cc0000;
`;

export const $GlobalCenterContent = styled.div`
  margin-top: 35%;
  margin-bottom: 50%;
`;
