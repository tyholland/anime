import styled from 'styled-components';
import {
  COLOR_BLACK,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $TeamEditWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  margin: 0 auto;

  &.return {
    margin-top: 3%;
  }
`;

export const $TeamEditBtn = styled.div`
  display: flex;
  justify-content: center;
  height: 35px;
  padding: 2% 0;
  align-items: center;
  border-bottom: 1px solid ${COLOR_BLACK};
  width: 100%;

  &.decision {
    margin-top: 3%;
  }

  ${MOBILE_VIEW} {
    width: 180px;
    height: 31px;
  }
`;

export const $TeamEditGrid = styled.div`
  width: 100%;

  .bold {
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  &.mobile {
    display: none;

    ${MOBILE_VIEW} {
      display: block;
    }
  }

  &.desktop {
    ${MOBILE_VIEW} {
      display: none;
    }
  }
`;

export const $TeamEditSection = styled.div`
  height: 35px;
  padding: 2% 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLOR_BLACK};
  width: 100%;

  > button {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 150px !important;
    text-align: left;
  }

  ${MOBILE_VIEW} {
    width: 80px;
  }
`;
