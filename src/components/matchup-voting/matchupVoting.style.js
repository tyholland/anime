import styled from 'styled-components';
import { FONT_WEIGHT_BOLD, MOBILE_VIEW } from 'Styles/global.style';

export const $MatchupVotingCharacter = styled.div`
  font-size: 30px;
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const $MatchupVotingTeam = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
`;

export const $MatchupVotingVersus = styled.div`
  font-size: 20px;
  font-weight: ${FONT_WEIGHT_BOLD};
  margin: 40px 0;
  text-align: center;
`;

export const $MatchupVotingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3%;

  &.spacing {
    margin-bottom: 3%;
  }

  ${MOBILE_VIEW} {
    flex-direction: column;
  }
`;

export const $MatchupVotingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const $MatchupVotingImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 2%;
  filter: grayscale(100);
`;
