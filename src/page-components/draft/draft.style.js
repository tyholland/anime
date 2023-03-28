import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  COLOR_ORANGE_DISABLED,
  COLOR_ORANGE_LIGHT,
  FONT_WEIGHT_BOLD,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const $DraftSection = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  &.team {
    margin-top: 5%;
  }

  &.recent {
    justify-content: flex-start;
    margin: 3% 0;
    padding: 2%;
    width: 96%;
    background-color: ${COLOR_ORANGE_DISABLED};

    > div {
      margin-right: 3%;
    }
  }
`;

export const $DraftTeamsList = styled.div`
  display: flex;
  width: 70%;

  > div {
    width: ${(props) => `calc(94% / ${props.teams})`};
    height: 90px;
    border: 1px solid ${COLOR_BLACK};
    margin: 0 1%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 3% 2%;
  }

  .highlight {
    border-color: ${COLOR_ORANGE};
    background-color: ${COLOR_ORANGE_LIGHT};

    .pick {
      margin-top: 20%;
      font-size: 20px;
      font-weight: ${FONT_WEIGHT_BOLD};
      text-align: center;
    }
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

  .timer {
    > div {
      width: 80px !important;
      height: 80px !important;

      svg {
        width: 80px;
        height: 80px;
      }
    }
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
  min-width: 230px;
  max-width: 400px;
  width: 100%;

  ${RESPONSIVE_VIEW} {
    width: auto;
  }

  h2 {
    margin-top: 0;
  }

  > div {
    margin-bottom: 5%;
  }
`;
