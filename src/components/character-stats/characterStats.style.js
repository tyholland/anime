import styled from 'styled-components';

export const $CharacterStatsContainer = styled.div`
  padding: 5%;
`;

export const $CharacterStatsBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const $CharacterStatsScoring = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  &.total {
    border-top: 1px solid #000;
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
    color: rgba(0, 0, 0, .5);
  }
`;

export const $CharacterStatsLabel = styled.div`
  text-align: right;
  width: 48%;
  padding-right: 2%;
  font-weight: 700;
  font-size: 20px;

  &.specific {
    font-size: 14px;
    color: rgba(0, 0, 0, .5);
  }
`;
