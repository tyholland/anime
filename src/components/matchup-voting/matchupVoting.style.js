import styled from 'styled-components';
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_GIGANTIC,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_NORMAL,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const MatchupVotingCharacter = styled.div`
  font-size: ${FONT_SIZE_GIGANTIC};
  font-weight: ${FONT_WEIGHT_BOLD};

  ${MOBILE_VIEW} {
    font-size: ${FONT_SIZE_EXTRA_LARGE};
  }

  &.details {
    font-size: ${FONT_SIZE_SMALL};
    font-weight: ${FONT_WEIGHT_NORMAL};
    margin: 4% 2% 0;
    display: inline-block;
  }
`;

export const MatchupVotingVersus = styled.div`
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  font-weight: ${FONT_WEIGHT_BOLD};
  margin: 40px 0;
  text-align: center;

  ${MOBILE_VIEW} {
    width: auto !important;
    margin: 30px 0;
  }
`;

export const MatchupVotingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3%;

  &.spacing {
    margin-bottom: 3%;
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
  }
`;

export const MatchupVotingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${MOBILE_VIEW} {
    flex-direction: row;
  }

  > div {
    text-align: center;

    ${MOBILE_VIEW} {
      width: 50%;
    }
  }

  button {
    ${MOBILE_VIEW} {
      width: 90% !important;
    }
  }
`;

export const MatchupVotingImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 2%;

  ${MOBILE_VIEW} {
    width: 100%;
    height: 150px;
  }
`;

export const MatchupVotingTotal = styled.div`
  justify-content: center;
  margin-top: 5%;
  display: flex;
`;
