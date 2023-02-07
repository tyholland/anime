import styled from 'styled-components';
import {
  COLOR_BLACK,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_NORMAL,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $TeamInfoContent = styled.div`
  border: 1px solid ${COLOR_BLACK};
  border-radius: 10px;
  height: 45px;
  padding: 0 10px;
  margin-top: 15px;
  font-size: 20px;
  width: 330px;
  line-height: 45px;
`;

export const $TeamInfoTitle = styled.div`
  font-size: 20px;
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const $TeamInfoBtn = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const $TeamInfoStats = styled.div`
  margin-bottom: 10%;
  font-size: 20px;

  span {
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  button {
    display: flex;
    justify-content: flex-end;
    width: 100% !important;

    span {
      font-size: 14px !important;
      font-weight: ${FONT_WEIGHT_NORMAL};
    }
  }
`;

export const $TeamInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  ${MOBILE_VIEW} {
    flex-direction: column;

    > div {
      margin-bottom: 10%;
    }
  }
`;
