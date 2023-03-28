import styled from 'styled-components';
import { COLOR_BLACK } from 'Styles/global.style';

export const $DraftSection = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  &.team {
    margin-top: 5%;
  }

  .playerGrid {
    width: 600px;

    > div {
      width: 100%;

      .powerFilter {
        width: 35%;
      }
    }
  }

  .teamGrid {
    width: 230px;

    h2 {
      margin-top: 0;
    }

    > div {
      margin-bottom: 5%;
    }
  }
`;

export const $DraftTeamsList = styled.div`
  display: flex;
  width: 70%;

  > div {
    width: ${(props) => `calc(94% / ${props.teams})`};
    height: 100px;
    border: 1px solid ${COLOR_BLACK};
    margin: 0 1%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 3% 2%;
  }
`;
