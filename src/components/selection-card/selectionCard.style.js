import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_WHITE_TRANSPARENT,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_GIGANTIC,
  FONT_SIZE_MEDIUM,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const SelectionCardBlock = styled.button`
  padding: 1%;
  margin: 1%;
  width: 200px;
  height: 200px;
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

  ${MOBILE_VIEW} {
    width: 150px;
    height: 150px;
  }
`;

export const SelectionCardText = styled.span`
  text-align: center;
  font-size: ${FONT_SIZE_GIGANTIC};
  font-weight: ${FONT_WEIGHT_BOLD};
  background: ${COLOR_WHITE_TRANSPARENT};
  padding: 3% 4%;
  border-radius: 15px;
  width: min-content;
  color: ${COLOR_BLACK};

  ${RESPONSIVE_VIEW} {
    font-size: calc(100% + ${FONT_SIZE_MEDIUM});
  }

  ${MOBILE_VIEW} {
    font-size: calc(100% + ${FONT_SIZE_EXTRA_SMALL});
  }
`;
