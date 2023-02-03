import styled from 'styled-components';
import { FONT_WEIGHT_NORMAL, MOBILE_VIEW } from 'Styles/global.style';

export const $AdminWrapper = styled.div`
  display: flex;
  width: 95%;
  margin: 3% auto;
  flex-wrap: wrap;

  ${MOBILE_VIEW} {
    flex:direction: column;
  }

  &.column {
    flex-direction: column;
    font-size: 18px;
    align-items: center;

    ol {
      width: 90%;
    }
  }
`;

export const $AdminSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

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
`;
