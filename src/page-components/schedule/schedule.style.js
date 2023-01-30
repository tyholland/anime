import styled from 'styled-components';
import { COLOR_BLACK, MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

export const $ScheduleWrapper = styled.div`
  margin-bottom: 2%;
  padding-bottom: 2%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  border-bottom: 1px solid ${COLOR_BLACK};

  ${RESPONSIVE_VIEW} {
    width: 65%;
  }

  ${MOBILE_VIEW} {
    width: 100%;
  }
`;

export const $ScheduleTeamSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2%;
`;

export const $ScheduleTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const $ScheduleTeamName = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 180px;

  ${RESPONSIVE_VIEW} {
    width: 150px;
  }

  ${MOBILE_VIEW} {
    width: 110px;
  }
`;
