import styled from 'styled-components';
import { FONT_WEIGHT_NORMAL, MOBILE_VIEW } from 'Styles/global.style';

export const $AdminWrapper = styled.div`
  display: flex;
  width: 95%;
  margin: 3% auto;
  flex-wrap: wrap;
  flex-direction: column;

  &.column {
    font-size: 18px;
    align-items: center;

    ol {
      width: 90%;
    }
  }

  .team {
    margin-bottom: 2%;

    button {
      margin-left: 5%;

      span {
        font-size: 12px;
      }
    }
  }
`;

export const $AdminSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 2%;

  ${MOBILE_VIEW} {
    margin-bottom: 5%;
    width: 100%;
  }

  button {
    text-align: right;
    margin: 0 0 0 5% !important;

    span {
      font-size: 14px !important;
    }
  }

  select,
  input {
    width: 50%;
    font-size: 16px;
    height: 30px;
    margin: 0;
  }

  &.delete {
    justify-content: flex-end;
    width: 100%;

    button {
      margin: 3% 0 0 0 !important;

      span {
        font-size: 12px !important;
        font-weight: ${FONT_WEIGHT_NORMAL};
      }
    }
  }

  &.start {
    justify-content: center;
    width: 100%;

    button {
      text-align: center;
      margin: 3% 0 0 !important;
    }
  }
`;
