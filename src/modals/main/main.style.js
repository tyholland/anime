import styled, { createGlobalStyle } from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const $MainGlobalStyles = createGlobalStyle`
  .ReactModal__Content {
    min-width: 40% !important;
    max-width: 85% !important;
    height: auto !important;
    width: auto !important;
  }

  ${MOBILE_VIEW} {
    .ReactModal__Content {
      width: 90% !important;
      height: calc(100vh + -40px) !important;
      padding: 5% !important;
      border-radius: 0 !important;
      max-width: 90% !important;
      inset: 50% auto auto 50% !important;
    }

    .ReactModal__Overlay {
      z-index: 2;
      height: 100vh;
    }

    .ReactModal__Body--open {
      overflow: hidden;
    }
  }
`;

export const $ChangeCharacterWrapper = styled.div`
  margin-bottom: 3%;
  text-align: center;
  line-height: 25px;
`;

export const $ChangeCharacterBio = styled.div`
  > div {
    width: 100%;

    ${MOBILE_VIEW} {
      flex-direction: row;
    }

    img {
      width: 100%;
    }
  }
`;

export const $ChangeCharacterBioBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 300px !important;
    margin: 10px;

    ${MOBILE_VIEW} {
      width: 100% !important;
      margin: 5px 0;
    }
  }

  &.solo {
    button {
      ${MOBILE_VIEW} {
        width: 300px !important;
      }
    }
  }

  ${MOBILE_VIEW} {
    flex-direction: column !important;
  }
`;
