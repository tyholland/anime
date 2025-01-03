import styled from 'styled-components';
import { FONT_SIZE_LARGE, MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

export const ViewLeagueEmptyTitle = styled.div`
  text-align: center;
  margin: 10% 0 3%;
  font-size: ${FONT_SIZE_LARGE};

  ${MOBILE_VIEW} {
    margin: 10% 0;
  }
`;

export const ViewLeagueEmptyBtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  button {
    margin: 0 5%;
  }
`;

export const ViewLeaguePast = styled.div`
  margin-top: 5%;

  ${RESPONSIVE_VIEW} {
    margin-top: 10%;
  }

  ${MOBILE_VIEW} {
    margin-top: 20%;
  }
`;
