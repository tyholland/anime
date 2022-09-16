import styled from 'styled-components';

export const $ViewMatchupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const $ViewMatchupPositionSection = styled.div`
  border-bottom: 1px solid #000;
  height: 80px;

  &.duo {
    height: 160px;
  }
`;

export const $ViewMatchupTeamSplit = styled.div`
  border-top: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

export const $ViewMatchupPositionColumn = styled.div`
  width: 8%;
`;

export const $ViewMatchupPosition = styled.div`
  width: 100%;
  font-weight: 600;
  color: rgb(249, 128, 17);
  text-align: center;
  background-color: rgba(0, 0, 0, .8);
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.duo {
    font-size: 12px;
  }
`;

export const $ViewMatchupTeamContent = styled.div`
  width: 50%;
`;

export const $ViewMatchupTeamName = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

export const $ViewMatchupTeamTotal = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, .5);
  text-align: center;
  margin-top: 15px;
`;
