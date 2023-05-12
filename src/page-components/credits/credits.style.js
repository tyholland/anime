import styled, { createGlobalStyle } from 'styled-components';
import { FONT_SIZE_EXTRA_SMALL, FONT_WEIGHT_BOLD, MOBILE_VIEW } from 'Styles/global.style';

export const $CreditsGlobalStyles = createGlobalStyle`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;

    li {
      margin: 0 1%;

      a {
        cursor: pointer;
      }
    }

    ${MOBILE_VIEW} {
      padding: 0;
    }
  }
`;

export const $CreditsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2% auto 0;
  width: 100%;
`;

export const $CreditsItem = styled.div`
  margin: 1%;
  height: 265px;
`;

export const $CreditsText = styled.div`
  font-size: ${FONT_SIZE_EXTRA_SMALL};
  margin-top: 2%;

  span {
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;
