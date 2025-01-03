import styled from 'styled-components';
import { COLOR_BLACK, COLOR_WHITE, FONT_SIZE_GIGANTIC, FONT_SIZE_LARGE, MOBILE_VIEW } from 'Styles/global.style';

export const NotUserContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: ${FONT_SIZE_LARGE};
  background-color: ${COLOR_WHITE};
  border-radius: 10px;
  padding: 3%;
  color: ${COLOR_BLACK};

  ${MOBILE_VIEW} {
    width: 94%;
  }

  div {
    width: 100%;
    margin-bottom: 3%;
  }

  h3 {
    margin-top: 0;
    font-size: ${FONT_SIZE_GIGANTIC};
  }
`;

export const NotUserBtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  padding: 3% 0;

  ${MOBILE_VIEW} {
    flex-direction: column;
    width: 100%;
  }

  button {
    span {
      font-size: ${FONT_SIZE_GIGANTIC} !important;
    }

    ${MOBILE_VIEW} {
      width: 100% !important;
      margin: 3%;
    }
  }
`;
