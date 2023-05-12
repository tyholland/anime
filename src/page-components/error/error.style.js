import styled from 'styled-components';
import { COLOR_WHITE, FONT_SIZE_EXTRA_LARGE, FONT_SIZE_GIGANTIC, MOBILE_VIEW } from 'Styles/global.style';

export const $ErrorContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: ${FONT_SIZE_GIGANTIC};
  background-color: ${COLOR_WHITE};
  border-radius: 10px;
  padding: 3%;

  ${MOBILE_VIEW} {
    width: 94%;
    font-size: ${FONT_SIZE_EXTRA_LARGE};
  }

  div {
    width: 100%;
  }
`;

export const $ErrorBtnWrapper = styled.div`
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
    width: 30% !important;

    ${MOBILE_VIEW} {
      width: 100% !important;
      margin: 3%;
    }
  }
`;
