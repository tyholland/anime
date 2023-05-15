import styled from 'styled-components';
import {
  COLOR_SUCCESS,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $AccountWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 3% auto;

  .pwd {
    width: 100%;
    text-align: center;
  }

  &.column {
    flex-direction: column;
    font-size: ${FONT_SIZE_LARGE};
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
  width: 100%;
  text-align: center;

  input {
    width: 50%;
    
    ${MOBILE_VIEW} {
      width: 90%;
    }
  }

  button {
    text-align: right;
    margin-top: 5% !important;
    width: 89% !important;

    span {
      font-size: ${FONT_SIZE_EXTRA_SMALL} !important;
    }
  }
`;

export const $AccountSectionLabel = styled.div`
  text-align: left;
  width: 90%;
  margin: 0 auto;
  font-size: ${FONT_SIZE_MEDIUM};
  font-weight: bold;
`;

export const $AccountPwdSuccess = styled.div`
  color: ${COLOR_SUCCESS};
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-top: 3%;
`;

export const $AccountContainer = styled.div`
  .collapseContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .down {
    rotate: 90deg;
  }

  .up {
    rotate: 270deg;
  }
`;
