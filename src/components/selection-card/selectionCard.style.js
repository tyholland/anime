import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_WHITE_TRANSPARENT,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const $SelectionCardBlock = styled.button`
  padding: 2%;
  margin: 2%;
  width: 280px;
  height: 280px;
  background-image: url("/assets/background/dragonball.webp");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  position: relative;

  ${RESPONSIVE_VIEW} {
    width: 215px;
    height: 215px;
  }

  ${MOBILE_VIEW} {
    width: 150px;
    height: 150px;
  }
`;

export const $SelectionCardText = styled.span`
  text-align: center;
  font-size: 30px;
  font-weight: ${FONT_WEIGHT_BOLD};
  background: ${COLOR_WHITE_TRANSPARENT};
  padding: 3% 4%;
  border-radius: 15px;
  width: min-content;
  color: ${COLOR_BLACK};

  ${RESPONSIVE_VIEW} {
    font-size: calc(100% + 16px);
  }

  ${MOBILE_VIEW} {
    font-size: calc(100% + 8px);
  }
`;
