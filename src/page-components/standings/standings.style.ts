import styled from 'styled-components';
import { COLOR_WHITE, MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

export const StandingsWrapper = styled.div`
  margin-bottom: 2%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  border-bottom: 1px solid ${COLOR_WHITE};

  ${RESPONSIVE_VIEW} {
    width: 65%;
  }

  ${MOBILE_VIEW} {
    width: 96%;
    margin-bottom: 5%;
  }
`;

export const StandingsTeamSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1% 0;
`;

export const StandingsTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5%;
`;

export const StandingsTeamName = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 300px;

  ${RESPONSIVE_VIEW} {
    width: 250px;
  }

  ${MOBILE_VIEW} {
    width: 210px;
  }
`;
