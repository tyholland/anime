import styled, { createGlobalStyle } from 'styled-components';
import {
  FONT_COLOR_BLACK,
  FONT_COLOR_WHITE_TRANSPARENT,
  FONT_WEIGHT_BOLD,
} from 'Styles/global.style';

export const $PlayersStyles = createGlobalStyle`
  .fillGrid,
  .fillModal {
    grid-template-columns: 250px 150px 150px 250px !important;
    width: auto;
    height: 100vh;
    --rdg-background-color: ${FONT_COLOR_WHITE_TRANSPARENT};
    --rdg-header-background-color: rgb(249,128,17);
    --rdg-color: ${FONT_COLOR_BLACK};
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

  div {
    width: 40%;
  }
`;
