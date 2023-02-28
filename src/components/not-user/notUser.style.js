import styled from 'styled-components';
import { COLOR_WHITE, MOBILE_VIEW } from 'Styles/global.style';

export const $NotUserContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: 25px;
  background-color: ${COLOR_WHITE};
  border-radius: 10px;
  padding: 3%;

  ${MOBILE_VIEW} {
    width: 94%;
    font-size: 20px;
  }

  div {
    width: 100%;
  }
`;

export const $NotUserBtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  padding: 3% 0;

  ${MOBILE_VIEW} {
    flex-direction: column;
  }

  button {
    width: 30% !important;

    ${MOBILE_VIEW} {
      width: 50% !important;
    }
  }
`;
