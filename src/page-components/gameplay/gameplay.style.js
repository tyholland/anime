import { createGlobalStyle } from 'styled-components';
import { FONT_COLOR_BLACK } from 'Styles/global.style';

export const $GameplayStyles = createGlobalStyle`
  .Collapsible {
    padding: 2%;
    border: 1px solid ${FONT_COLOR_BLACK};
    border-bottom: none;

    div[role="button"] {
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .Collapsible:last-child {
    border-bottom: 1px solid ${FONT_COLOR_BLACK};
  }
`;
