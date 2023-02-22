import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $MobileHeaderContainer = styled.div`
  display: none;

  ${MOBILE_VIEW} {
    width: 50%;
    display: flex;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  button {
    font-size: 14px !important;
    font-weight: ${FONT_WEIGHT_BOLD};
    position: relative !important;
    color: ${COLOR_BLACK};
  }

  .bm-overlay {
    background: ${COLOR_ORANGE} !important;
    position: absolute !important;
    width: 50% !important;
    right: 0;
    height: ${(props) => props.showOverlay || 'auto'} !important;
  }

  .bm-item-list {
    margin-top: 35%;

    button {
      width: 90%;
      margin: 0 5% 10%;

      span {
        font-size: 20px;
      }
    }
  }

  .bm-cross-button {
    width: auto !important;
    top: -2px !important;
  }

  .bm-menu {
    overflow: hidden !important;
  }

  .bm-burger-bars {
    display: none;
  }
`;
