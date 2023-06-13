import styled, { createGlobalStyle } from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  COLOR_ORANGE_LIGHT,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const PlayersStyles = createGlobalStyle`
  .react-grid-HeaderCell {
    background: ${COLOR_ORANGE} !important;
    border: 1px solid ${COLOR_BLACK} !important;
  }

  .react-grid-Grid,
  .react-grid-Cell {
    border: 1px solid ${COLOR_BLACK} !important;
  }

  .react-grid-Cell {
    width: 183px !important;
  }

  .react-grid-Row:first-child:hover > div,
  .react-grid-Row:not(:first-child):hover > div,
  .react-grid-Row:last-child:hover > div {
    font-weight: ${FONT_WEIGHT_BOLD};
    background: ${COLOR_ORANGE_LIGHT} !important;
    border-top: 1px solid ${COLOR_BLACK} !important;
    cursor: pointer;
  }

  .react-grid-Row:not(:first-child):hover > div {
    border-top: none !important;
  }

  .react-grid-Row:last-child:hover > div {
    border-bottom: none !important;
  }

  .react-grid-Main {
    outline: 0 !important;
  }

  .mobileGrid {
    display: none;
  }

  ${MOBILE_VIEW} {
    .desktopGrid {
      display: none;
    }

    .mobileGrid {
      display: block;
    }

    .fillGrid {
      grid-template-columns: 180px 80px 80px 0px !important;
    }

    .fillModal {
      grid-template-columns: 80px 80px 180px 0px !important;
    }

    .fillDraft {
      grid-template-columns: 180px 110px 100px 0px !important;
      height: 50vh;
    }

    .fillAdmin {
      grid-template-columns: 100px 100px 80px 80px !important;
    }
  }
`;

export const PlayersFilter = styled.div`
  display: flex;
  margin-bottom: 2%;
  width: 100%;
  justify-content: center;
  align-items: center;

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
  }

  label {
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  .rankFilter,
  .seriesFilter,
  .powerFilter {
    width: 30%;
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

  ${MOBILE_VIEW} {
    width: 100%;

    .seriesFilter {
      display: none;
    }

    .rankFilter,
    .powerFilter {
      display: flex;
      width: 90%;
      margin: 3% 0;
    }
  }
`;
