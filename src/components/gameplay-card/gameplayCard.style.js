import styled from 'styled-components';
import { FONT_WEIGHT_BOLD } from 'Styles/global.style';

export const $GameplayCardSection = styled.div`
  margin-bottom: 20px;
  font-size: 14px;

  :last-child {
    margin: 0;
  }

  &.indent {
    margin-left: 2%;
  }
`;

export const $GameplayCardTitle = styled.div`
  text-decoration: underline;
  margin-bottom: 10px;
  font-size: 14px;

  &.bold {
    text-decoration: none;
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;

export const $GameplayCardHeader = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const $GameplayCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 65%;
  margin: 0 auto;

  div {
    width: 100%;
    line-height: 20px;
  }
`;
