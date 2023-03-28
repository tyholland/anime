import styled from 'styled-components';
import { COLOR_BLACK, FONT_WEIGHT_BOLD } from 'Styles/global.style';

export const $DraftSection = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  &.team {
    margin-top: 5%;
  }
`;

export const $DraftTeamsList = styled.div`
  display: flex;
  width: 70%;

  > div {
    width: ${(props) => `calc(94% / ${props.teams})`};
    height: 80px;
    border: 1px solid ${COLOR_BLACK};
    margin: 0 1%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 3% 2%;
  }
`;

export const $DraftRound = styled.div`
  font-size: 25px;
  font-weight: ${FONT_WEIGHT_BOLD};
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    margin-bottom: 10%;
  }
`;

export const $DraftPlayerGrid = styled.div`
  width: 600px;

  > div {
    width: 100%;

    .powerFilter {
      width: 35%;
    }
  }
`;

export const $DraftTeamGrid = styled.div`
  width: 230px;

  h2 {
    margin-top: 0;
  }

  > div {
    margin-bottom: 5%;
  }
`;
