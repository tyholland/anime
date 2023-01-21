import styled from 'styled-components';
import { FONT_COLOR_BLACK, FONT_WEIGHT_BOLD } from 'Styles/global.style';

export const $LeagueCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${FONT_COLOR_BLACK};
  padding: 3% 0;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export const $LeagueCardText = styled.div`
  margin: 5px 0;
  font-size: 14px;

  &.league {
    font-weight: ${FONT_WEIGHT_BOLD};
    font-size: 16px;
  }
`;

export const $LeagueCardSection = styled.div`
  display: flex;
  flex-direction: column;

  &.actions {
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;
  }
`;
