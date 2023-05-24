import styled from 'styled-components';
import {
  FONT_SIZE_MEDIUM,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const GameplayCardSection = styled.div`
  margin-bottom: 20px;
  font-size: ${FONT_SIZE_MEDIUM};

  :last-child {
    margin: 0;
  }

  &.indent {
    margin-left: 2%;
  }
`;

export const GameplayCardTitle = styled.div`
  text-decoration: underline;
  margin-bottom: 10px;
  font-size: ${FONT_SIZE_MEDIUM};

  &.bold {
    text-decoration: none;
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;

export const GameplayCardHeader = styled.div`
  font-size: ${FONT_SIZE_MEDIUM};
  margin: 5% 0;
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const GameplayCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 75%;
  margin: 2% auto 5%;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  div {
    width: 100%;
    line-height: 20px;
  }
`;

export const GameplayCardContainer = styled.div`
  padding: 2%;

  ${RESPONSIVE_VIEW} {
    padding: 3%;
  }
`;

export const GameplayCardAccordian = styled.div`
  .collapseContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .down {
    rotate: 90deg;
  }

  .up {
    rotate: 270deg;
  }
`;

export const GameplayCardAffinity = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 2% 0;

  div {
    margin: 0 1%;
  }
`;
