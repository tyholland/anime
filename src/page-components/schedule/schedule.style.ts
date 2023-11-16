import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_BLUE_HOVER,
  COLOR_WHITE,
  FONT_SIZE_MEDIUM,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const ScheduleWrapper = styled.button`
  margin-bottom: 2%;
  padding: 2%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  border: none;
  border-bottom: 1px solid ${COLOR_WHITE};
  background: ${COLOR_WHITE};
  color: ${COLOR_BLACK};
  border-radius: 20px;

  > div {
    font-size: ${FONT_SIZE_MEDIUM};
  }

  &:hover {
    color: ${COLOR_BLUE_HOVER};
  }

  &.noHighlight:hover {
    color: ${COLOR_BLACK};
    cursor: default;
  }

  ${RESPONSIVE_VIEW} {
    width: 65%;
  }

  ${MOBILE_VIEW} {
    width: 100%;
  }
`;

export const ScheduleTeamSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2%;

  &.winner {
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;

export const ScheduleTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const ScheduleTeamName = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 180px;
  text-align: left;

  ${RESPONSIVE_VIEW} {
    width: 150px;
  }

  ${MOBILE_VIEW} {
    width: 110px;
  }
`;
