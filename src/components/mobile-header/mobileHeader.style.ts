import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_OVERLAY,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';
import { MobileHeaderStyledProps } from 'Utils/types';

export const MobileHeaderContainer = styled.div<MobileHeaderStyledProps>`
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
    font-size: ${FONT_SIZE_SMALL} !important;
    font-weight: ${FONT_WEIGHT_BOLD};
    position: relative !important;
    color: ${COLOR_BLACK};
  }

  .bm-overlay {
    height: ${(props) => props.showOverlay || 'auto'} !important;
    background: ${COLOR_OVERLAY} !important;
    position: absolute !important;
    right: 0;
    top: 0;
  }

  .bm-item-list {
    margin-top: 35%;

    button {
      width: 90%;
      margin: 0 5% 10%;
      text-align: left;

      span {
        font-size: ${FONT_SIZE_EXTRA_LARGE};
      }
    }
  }

  .bm-cross-button {
    width: auto !important;
    top: 30px !important;
  }

  .bm-menu {
    overflow: hidden !important;
    top: 32px;
    position: absolute;
  }

  .bm-burger-bars {
    display: none;
  }

  .bm-menu-wrap {
    width: 55% !important;
    top: 0;
    background: rgb(249, 128, 17);
  }
`;
