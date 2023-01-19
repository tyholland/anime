import styled from 'styled-components';
import { FONT_COLOR_BLACK, FONT_COLOR_ORANGE } from 'Styles/global.style';

export const $HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${FONT_COLOR_ORANGE};
`;

export const $HeaderTitle = styled.div`
  font-size: 20px;
  color: ${FONT_COLOR_BLACK};
  font-weight: 700;
  text-align: center;

  img {
    width: 70px;
    height: auto;
    cursor: pointer;
  }
`;

export const $HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1% 2%;
`;
