import { createGlobalStyle } from 'styled-components';
import { MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

export const $MainGlobalStyles = createGlobalStyle`
  ${RESPONSIVE_VIEW} {
    .ReactModal__Content {
      min-width: 40% !important;
      max-width: 85% !important;
      height: auto !important;
      width: auto !important;
    }
  }

  ${MOBILE_VIEW} {
    .ReactModal__Content {
      width: 90% !important;
      height: calc(100vh + -40px) !important;
      padding: 5% !important;
      border-radius: 0 !important;
      max-width: 90% !important;
    }

    .ReactModal__Overlay {
      z-index: 2;
    }

    body {
      overflow-x: hidden;
    }
  }
`;
