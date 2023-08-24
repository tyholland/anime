import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  COLOR_ORANGE_LIGHT,
  COLOR_WHITE_TRANSPARENT,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  FONT_SIZE_SMALL
} from 'Styles/global.style';

export const PlayersGrid = styled.div`
  width: 655px;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  &.desktopGrid {
    ${MOBILE_VIEW} {
      display: none;
    }
  }

  &.mobileGrid {
    display: none;

    ${MOBILE_VIEW} {
      display: block;
    }
  }

  &.roster {
    width: 495px;

    ${MOBILE_VIEW} {
      width: 100%;
    }
  }

  &.bracket {
    width: auto;

    ${MOBILE_VIEW} {
      width: 100%;
    }
  }
`;

export const PlayersRowHead = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  
  .name,
  .rank,
  .points,
  .series,
  .affinity {
    border: 1px solid ${COLOR_BLACK};
    border-right: none;
    padding: 5px;
    background: ${COLOR_ORANGE};
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  .name {
    width: 150px;

    ${MOBILE_VIEW} {
      width: 80px;
    }
  }

  .rank {
    width: 80px;

    ${MOBILE_VIEW} {
      width: 60px;
    }
  }

  .points {
    width: 80px;

    ${MOBILE_VIEW} {
      width: 60px;
    }
  }

  .series {
    width: 150px;
  }

  .affinity {
    width: 140px;
  }
  
  div:last-child {
    border-right: 1px solid ${COLOR_BLACK};
  }
`;

export const PlayersRow = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  border: none;
  background: none;
  text-align: left;
  padding: 0;
  color: ${COLOR_BLACK};
  font-size: ${FONT_SIZE_SMALL};

  .name,
  .rank,
  .points,
  .series,
  > .affinity {
    border: 1px solid ${COLOR_BLACK};
    border-bottom: none;
    border-right: none;
    padding: 5px;
    height: 25px;
    display: flex;
    align-items: center;
    text-align: left;
  }

  .name {
    width: 150px;

    span {
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 145px;
      overflow: hidden;

      ${MOBILE_VIEW} {
        width: 75px;
      }
    }

    ${MOBILE_VIEW} {
      width: 80px;
    }
  }

  .rank {
    width: 80px;

    ${MOBILE_VIEW} {
      width: 60px;
    }
  }

  .points {
    width: 80px;

    ${MOBILE_VIEW} {
      width: 60px;
    }
  }

  .series {
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
    overflow: hidden;

    span {
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 145px;
      overflow: hidden;
    }
  }

  > .affinity {
    width: 140px;
  }

  :last-child {
    .name,
    .rank,
    .points,
    .series,
    > .affinity {
      border-bottom: 1px solid ${COLOR_BLACK};
    }
  }
  
  > div:last-child {
    border-right: 1px solid ${COLOR_BLACK};
  }

  :hover {
    cursor: pointer;
    background: ${COLOR_ORANGE_LIGHT};
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;

export const PlayersRowSection = styled.div`
  position: relative;
  background: ${COLOR_WHITE_TRANSPARENT};
  overflow-y: scroll;
  height: 500px;

  &.roster {
    height: 400px;
  }
`;

export const PlayersFilter = styled.div`
  display: flex;
  margin-bottom: 2%;
  justify-content: center;
  align-items: center;
  width: 655px;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  &.special {
    justify-content: space-between;

    ${MOBILE_VIEW} {
      flex-direction: column;
      align-items: flex-start;
      width: 85%;
    }
  }

  label,
  select {
    position: relative;
  }

  select {
    margin-left: 2%;
    width: 100px;
  }

  label {
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  .rankFilter,
  .seriesFilter,
  .affinityFilter,
  .powerFilter {
    width: 30%;

    ${MOBILE_VIEW} {
      display: flex;
      width: 90%;
      margin: 3% 0;
    }
  }

  .seriesFilter {
    ${MOBILE_VIEW} {
      display: none;
    }
  }

  input {
    margin-top: 0;
    height: 25px;
    padding: 5px 10px;

    ${MOBILE_VIEW} {
      width: 200px;
    }
  }

  button {
    margin: 0 0 0 5% !important;
  }

  &.team {
    width: 80%;

    ${MOBILE_VIEW} {
      width: 85%;
    }
  }

  &.roster {
    width: 495px;
    
    ${MOBILE_VIEW} {
      width: 100%;
    }

    .rankFilter,
    .affinityFilter,
    .powerFilter {
      ${MOBILE_VIEW} {
        width: 100%;
      }
    }
  }
`;
