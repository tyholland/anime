import styled, { createGlobalStyle } from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_WHITE_TRANSPARENT,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $PlayersStyles = createGlobalStyle`
  .fillGrid,
  .fillModal,
  .fillDraft,
  .fillAdmin {
    grid-template-columns: 250px 150px 150px 250px !important;
    width: auto;
    height: 100vh;
    --rdg-background-color: ${COLOR_WHITE_TRANSPARENT};
    --rdg-header-background-color: rgb(249,128,17);
    --rdg-color: ${COLOR_BLACK};
    --rdg-row-hover-background-color: rgba(249,128,17,.6);
    --rdg-row-selected-background-color: none;
    --rdg-row-selected-hover-background-color: none;
    --rdg-selection-color: none;
    cursor: pointer;
  }

  .fillModal {
    grid-template-columns: 175px 120px 100px 300px !important;
    width: auto;
    height: 455px;
    margin-top: 2%;
  }

  .fillDraft {
    grid-template-columns: 180px 110px 110px 200px !important;
  }

  .fillAdmin {
    grid-template-columns: 180px 110px 110px 110px 180px !important;
  }

  .fillGrid > div:hover {
    font-weight: ${FONT_WEIGHT_BOLD};
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

export const $PlayersFilter = styled.div`
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
