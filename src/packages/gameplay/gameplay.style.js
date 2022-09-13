import { createGlobalStyle } from 'styled-components';

export const $GameplayStyles = createGlobalStyle`
  .Collapsible {
    padding: 2%;
    border: 1px solid #000;
    border-bottom: none;
    font-weight: 700;
  }

  .Collapsible:last-child {
    border-bottom: 1px solid #000;
  }
`;
