import styled from 'styled-components';
import {
  COLOR_BLACK,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $TeamEditWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;

  &.return {
    margin-top: 3%;
  }

  ${MOBILE_VIEW} {
    width: 100%;
  }
`;

export const $TeamEditBtn = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding: 2% 0;
  align-items: center;
  border-bottom: 1px solid ${COLOR_BLACK};
  width: 100%;

  &.decision {
    margin-top: 3%;
  }

  ${MOBILE_VIEW} {
    width: 180px;
  }
`;

export const $TeamEditGrid = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .bold {
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;

export const $TeamEditSection = styled.div`
  padding: 2% 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLOR_BLACK};
  width: 100%;
  height: 70px;

  &.character {
    flex-direction: column;
    align-items: flex-start;
  
    button {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 150px !important;
      text-align: left;
      padding-bottom: 3%;
    }

    .affinities {
      display: flex;
      align-items: center;
      padding-bottom: 3%;
    }

    .points {
      font-size: ${FONT_SIZE_SMALL};
    }
  }

  &.mobile {
    display: none;

    ${MOBILE_VIEW} {
      display: flex;
      width: 40%;
    }
  }

  &.desktop {
    width: 70%;

    ${MOBILE_VIEW} {
      display: none;
    }
  }
`;
