import styled from 'styled-components';
import {
  COLOR_WHITE,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_NORMAL,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const TeamInfoStats = styled.div`
  margin-bottom: 10%;
  font-size: ${FONT_SIZE_EXTRA_LARGE};

  span {
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  button {
    display: flex;
    justify-content: flex-end;
    width: 98% !important;

    span {
      font-size: ${FONT_SIZE_SMALL} !important;
      font-weight: ${FONT_WEIGHT_NORMAL};
      color: ${COLOR_WHITE};
    }
  }
`;

export const TeamInfoWrapper = styled.div`
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
    justify-content: flex-start;
    height: 30px;
    align-items: center;

    > div {
      margin: 0;
    }

    input {
      margin: 6% 0 0 0;

      ${MOBILE_VIEW} {
        width: 45%;
      }
    }

    button {
      display: flex;
      margin: 2px 0 0 5%;

      &.change {
        margin-top: 6%;
      }
    }

    ${MOBILE_VIEW} {
      width: 100%;
    }
  }
`;
