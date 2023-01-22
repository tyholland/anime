import { createGlobalStyle } from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const $MainGlobalStyles = createGlobalStyle`
  ${MOBILE_VIEW} {
    .ReactModal__Content {
      width: 90% !important;
      height: calc(100vh + -45px) !important;
      padding: 5% !important;
      border-radius: 0 !important;
    }
  }
`;
