import styled from 'styled-components';
import {
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_NORMAL,
  MOBILE_VIEW,
} from 'Styles/global.style';

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

  .editName {
    display: flex;
    width: 45%;
    justify-content: space-around;
    height: 30px;
    align-items: center;
    margin-top: 1%;

    > div,
    input {
      margin: 0;
    }

    button {
      display: flex;
    }
  }
`;
