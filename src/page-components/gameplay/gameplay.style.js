import { createGlobalStyle } from "styled-components";

export const $GameplayStyles = createGlobalStyle`
  .Collapsible {
    padding: 2%;
    border: 1px solid #000;
    border-bottom: none;

    div[role="button"] {
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .Collapsible:last-child {
    border-bottom: 1px solid #000;
  }
`;
