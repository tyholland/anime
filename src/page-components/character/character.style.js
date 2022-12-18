import styled, { createGlobalStyle } from 'styled-components';

export const $CharacterStyles = createGlobalStyle`
  .fillGrid {
    grid-template-columns: 250px 150px 150px 250px !important;
    width: auto;
    height: 100vh;
    --rdg-background-color: #ffffff95;
    --rdg-header-background-color: rgb(249,128,17);
    --rdg-color: #000;
    --rdg-row-hover-background-color: rgba(249,128,17,.6);
    --rdg-row-selected-background-color: none;
    --rdg-row-selected-hover-background-color: none;
    --rdg-selection-color: none;
    cursor: pointer;
  }

  .fillGrid > div:hover {
    font-weight: 700;
  }
`;

export const $CharacterFilter = styled.div`
  display: flex;
  margin-bottom: 2%;
  width: 100%;
  justify-content: center;

  label,
  select {
    position: relative;
  }

  select {
    margin-left: 2%;
  }

  label {
    font-weight: 700;
  }
`;
