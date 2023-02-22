import styled from 'styled-components';
import {
  COLOR_SUCCESS,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $AccountWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 3% auto;

  > div {
    width: 100%;
    text-align: center;

    input {
      width: 82%;
    }

    button {
      width: 89% !important;

      span {
        font-size: 12px !important;
      }
    }
  }

  &.column {
    flex-direction: column;
    font-size: 18px;
    align-items: center;

    button {
      width: 200px;
      margin-top: 3%;
    }

    input {
      width: 50%;

      ${MOBILE_VIEW} {
        width: 90%;
      }
    }
  }
`;

export const $AccountSectionRight = styled.div`
  button {
    text-align: right;
    margin-top: 5% !important;
  }
`;

export const $AccountSectionLabel = styled.div`
  text-align: left;
  width: 90%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
`;

export const $AccountPwdSuccess = styled.div`
  color: ${COLOR_SUCCESS};
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-top: 3%;
`;
