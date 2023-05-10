import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  COLOR_ORANGE_DISABLED,
  COLOR_ORANGE_LIGHT,
  FONT_WEIGHT_BOLD,
  RESPONSIVE_VIEW,
  COLOR_WHITE,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $DraftSection = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  ${MOBILE_VIEW} {
    flex-wrap: wrap;
  }

  &.team {
    margin-top: 5%;

    ${MOBILE_VIEW} {
      flex-direction: column-reverse;
    }
  }

  &.recent,
  &.current {
    justify-content: flex-start;
    margin: 3% 0;
    padding: 2%;
    width: 96%;
    background-color: ${COLOR_ORANGE_DISABLED};

    > div {
      margin-right: 3%;
    }
  }

  &.current {
    background-color: ${COLOR_WHITE};
    font-weight: ${FONT_WEIGHT_BOLD};
    padding: 2% 2% 0 0;
  }
`;

export const $DraftTeamsList = styled.div`
  display: flex;
  width: 70%;

  ${MOBILE_VIEW} {
    width: 100%;
  }

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

  ${MOBILE_VIEW} {
    margin-bottom: 3%;
  }

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
  max-width: 600px;
  min-width: 400px;
  margin-right: 5%;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  > div {
    width: 100%;

    .powerFilter {
      width: 35%;

      ${MOBILE_VIEW} {
        width: 100%;
      }
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

  ${MOBILE_VIEW} {
    margin-bottom: 5%;
  }

  h2 {
    margin-top: 0;
  }

  > div {
    margin-bottom: 5%;
  }
`;

export const $DraftInactive = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: 25px;
  background-color: ${COLOR_WHITE};
  border-radius: 10px;
  padding: 3%;
  margin-top: 5%;

  ${MOBILE_VIEW} {
    width: 94%;
    font-size: 20px;
  }

  div {
    width: 100%;
    padding-bottom: 0;
  }

  button {
    margin-top: 5%;
  }
`;

export const $DraftResults = styled.div`
  margin: 3% 0;
`;

export const $DraftAccordian = styled.div`
  .collapseContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .down {
    rotate: 90deg;
  }

  .up {
    rotate: 270deg;
  }
`;
