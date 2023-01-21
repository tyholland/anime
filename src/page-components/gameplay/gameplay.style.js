import { createGlobalStyle } from 'styled-components';
import { COLOR_BLACK, FONT_WEIGHT_BOLD } from 'Styles/global.style';

export const $GameplayStyles = createGlobalStyle`
  .Collapsible {
    padding: 2%;
    border: 1px solid ${COLOR_BLACK};
    border-bottom: none;

    div[role="button"] {
      font-weight: ${FONT_WEIGHT_BOLD};
      font-size: 18px;
      cursor: pointer;
    }
  }

  .Collapsible:last-child {
    border-bottom: 1px solid ${COLOR_BLACK};
  }
`;
