import styled, { createGlobalStyle } from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_WHITE_TRANSPARENT,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $PlayersStyles = createGlobalStyle`
  .fillGrid,
  .fillModal {
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
    grid-template-columns: 175px 150px 150px 175px !important;
    width: auto;
    height: 455px;
    margin-top: 2%;
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

    .fillGrid,
    .fillModal {
      grid-template-columns: 180px 80px 80px 0px !important;
    }
  }
`;

export const $PlayersFilter = styled.div`
  display: flex;
  margin-bottom: 2%;
  width: 800px;
  justify-content: center;
  align-items: center;

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
  .seriesFilter {
    width: 40%;
  }

  ${MOBILE_VIEW} {
    width: 100%;

    .seriesFilter {
      display: none;
    }
  }
`;
