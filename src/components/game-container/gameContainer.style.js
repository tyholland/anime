import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_BLUE_HOVER,
  COLOR_WHITE,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_NORMAL,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const $GameContainerWrapper = styled.button`
  margin-bottom: 2%;
  padding: 2%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  border: 1px solid ${COLOR_BLACK};
  border-radius: 10px;
  background: ${COLOR_WHITE};
  cursor: ${(props) => (props.isBye ? 'text' : 'pointer')};

  &:hover {
    font-weight: ${(props) => props.isBye ? FONT_WEIGHT_NORMAL : FONT_WEIGHT_BOLD};
    color: ${(props) => (props.isBye ? COLOR_BLACK : COLOR_BLUE_HOVER)};
  }

  ${RESPONSIVE_VIEW} {
    width: 65%;
  }

  ${MOBILE_VIEW} {
    width: 96%;
    margin-bottom: 5%;
  }
`;

export const $GameContainerTeamSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1% 0;
`;

export const $GameContainerTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
`;

export const $GameContainerTeamName = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 300px;
  text-align: left;

  ${RESPONSIVE_VIEW} {
    width: 250px;
  }

  ${MOBILE_VIEW} {
    width: 210px;
  }
`;

export const $GameContainerGame = styled.div`
  margin-bottom: 2%;
  font-weight: ${FONT_WEIGHT_BOLD};
`;
