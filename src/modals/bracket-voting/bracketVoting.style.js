import styled from 'styled-components';
import { FONT_SIZE_EXTRA_LARGE, FONT_SIZE_GIGANTIC, FONT_WEIGHT_BOLD, MOBILE_VIEW } from 'Styles/global.style';

export const $BracketVotingCharacter = styled.div`
  font-size: ${FONT_SIZE_GIGANTIC};
  font-weight: ${FONT_WEIGHT_BOLD};

  ${MOBILE_VIEW} {
    font-size: ${FONT_SIZE_EXTRA_LARGE};
  }
`;

export const $BracketVotingVersus = styled.div`
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  font-weight: ${FONT_WEIGHT_BOLD};
  margin: 40px 0;
  text-align: center;

  ${MOBILE_VIEW} {
    width: auto !important;
    margin: 30px 0;
  }
`;

export const $BracketVotingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5% 0;
  width: 100%;

  &.spacing {
    margin-bottom: 3%;
  }

  &.duo {
    width: 700px;

    ${MOBILE_VIEW} {
      width: 100%;
    }
  }

  &.btn {
    ${MOBILE_VIEW} {
      margin-bottom: 10%;
    }
  }

  &.btnRedirect {
    width: 450px;
    margin: 3% auto 0;

    button {
      width: 200px;
    }

    ${MOBILE_VIEW} {
      margin: 5% 0;
      width: 100%;
    }
  }

  ${MOBILE_VIEW} {
    flex-direction: column;
    margin: 3% 0 10%;
    width: 100%;
  }
`;

export const $BracketVotingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  &.versus {
    width: 10%;
  }

  ${MOBILE_VIEW} {
    flex-direction: row;
    width: 100%;
  }

  > div {
    text-align: center;

    ${MOBILE_VIEW} {
      width: 50%;
    }
  }

  button {
    width: 200px !important;

    ${MOBILE_VIEW} {
      width: 90% !important;
    }
  }
`;

export const $BracketVotingImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 2%;

  ${MOBILE_VIEW} {
    width: 100%;
    height: auto;
  }
`;

export const $BracketVotingTotal = styled.div`
  justify-content: center;
  margin-top: 5%;
  display: flex;
`;
