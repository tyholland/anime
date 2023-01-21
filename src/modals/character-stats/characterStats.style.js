import styled from 'styled-components';
import { FONT_COLOR_BLACK, FONT_WEIGHT_BOLD } from 'Styles/global.style';

export const $CharacterStatsBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 2%;
  }
`;

export const $CharacterStatsScoring = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  &.total {
    border-top: 1px solid ${FONT_COLOR_BLACK};
    padding-top: 20px;
  }
`;

export const $CharacterStatsPoints = styled.div`
  text-align: left;
  width: 48%;
  padding-left: 2%;
  font-size: 20px;

  &.specific {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const $CharacterStatsLabel = styled.div`
  text-align: right;
  width: 48%;
  padding-right: 2%;
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: 20px;

  &.specific {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
