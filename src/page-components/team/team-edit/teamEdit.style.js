import styled from 'styled-components';
import { FONT_COLOR_BLACK, FONT_WEIGHT_BOLD } from 'Styles/global.style';

export const $TeamEditWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  margin: 0 auto;

  div {
    width: 100%;

    &.position {
      font-weight: ${FONT_WEIGHT_BOLD};
    }

    div {
      height: 35px;
      padding: 2% 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${FONT_COLOR_BLACK};
      width: 100%;
    }
  }
`;

export const $TeamEditBtn = styled.div`
  display: flex;
  justify-content: center;

  &.decision {
    margin-top: 3%;
  }
`;

export const $TeamEditError = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  color: red;
  font-weight: ${FONT_WEIGHT_BOLD};
`;
