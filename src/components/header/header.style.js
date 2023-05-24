import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  FONT_SIZE_EXTRA_LARGE,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLOR_ORANGE};
`;

export const HeaderTitle = styled.div`
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  color: ${COLOR_BLACK};
  font-weight: ${FONT_WEIGHT_BOLD};
  text-align: center;

  img {
    cursor: pointer;
    border-radius: 22px;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1% 2%;
`;

export const HeaderMenu = styled.div`
  display: block;

  ${MOBILE_VIEW} {
    display: none;
  }
`;
