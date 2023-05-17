import styled from 'styled-components';
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_GIGANTIC,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_NORMAL,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $BioAffinity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;

  &.right {
    margin-right: 10px;
  }

  &.down {
    margin-bottom: 25px;
    flex-wrap: wrap;
    width: 100%;
  }

  &.last {
    margin-bottom: 4%;
  }
`;

export const $BioAffinityText = styled.div`
  margin-left: 5px;

  ${MOBILE_VIEW} {
    display: none;
  }

  &.percent {
    ${MOBILE_VIEW} {
      display: block;
    }
  }
`;

export const $BioTitle = styled.div`
  font-size: ${FONT_SIZE_GIGANTIC};
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-bottom: 5%;

  ${MOBILE_VIEW} {
    font-size: ${FONT_SIZE_EXTRA_LARGE};
  }
`;

export const $BioSubTitle = styled.div`
  font-size: ${FONT_SIZE_LARGE};
  color: #999;
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-bottom: 25px;

  span {
    font-weight: ${FONT_WEIGHT_NORMAL};
  }

  ${MOBILE_VIEW} {
    font-size: ${FONT_SIZE_MEDIUM};
  }
`;

export const $BioAttribute = styled.div`
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  font-weight: ${FONT_WEIGHT_BOLD};

  ${MOBILE_VIEW} {
    font-size: ${FONT_SIZE_LARGE};
  }
`;

export const $BioSubAttribute = styled.div`
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  margin-bottom: 25px;

  ${MOBILE_VIEW} {
    font-size: ${FONT_SIZE_SMALL};
  }
`;

export const $BioImage = styled.img`
  max-width: 250px;
  max-height: 200px;
  margin-bottom: 10%;
  width: auto;
`;

export const $BioWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: self-start;
  width: 70%;
  margin: 0 auto;

  ${MOBILE_VIEW} {
    flex-direction: column;
    width: 100%;
    margin-bottom: 10%;
  }

  > div {
    width: 40%;
    margin: 0 5%;

    ${MOBILE_VIEW} {
      width: 94%;
      margin: 0 3%;
    }
  }
`;

export const $BioAccordian = styled.div`
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
