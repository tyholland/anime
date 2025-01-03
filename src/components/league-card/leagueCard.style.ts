import styled from 'styled-components';
import {
  COLOR_WHITE,
  FONT_SIZE_MEDIUM,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const LeagueCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${COLOR_WHITE};
  padding: 3% 0;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  ${MOBILE_VIEW} {
    width: 100%;
    flex-direction: column;
  }
`;

export const LeagueCardText = styled.div`
  margin: 5px 0;
  font-size: ${FONT_SIZE_MEDIUM};

  span {
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;

export const LeagueCardSection = styled.div`
  display: flex;
  flex-direction: column;

  &.actions {
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;

    ${RESPONSIVE_VIEW} {
      width: 55%;
    }

    ${MOBILE_VIEW} {
      width: 100%;
      justify-content: center;
      margin-top: 3%;
    }
  }
`;
