import styled from 'styled-components';
import {
  COLOR_BLUE_HOVER,
  COLOR_WHITE,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const TeamTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TeamInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TeamContent = styled.div`
  margin-left: 10px;
`;

export const TeamInfoTxt = styled.div`
  color: ${COLOR_BLUE_HOVER};
  text-align: right;
`;

export const TeamName = styled.div`
  font-size: ${FONT_SIZE_LARGE};
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const TeamLeague = styled.div`
  font-size: ${FONT_SIZE_SMALL};
  color: ${COLOR_WHITE};
`;

export const TeamTotalText = styled.div`
  width: 65%;
  margin: 15px 0 15px 5px;
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_WHITE};
  text-align: right;
`;

export const TeamTotalAmount = styled.div`
  width: 30%;
  text-align: right;
  margin: 15px 0 15px -3px;
  padding-right: 10px;
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_WHITE};
`;

export const TeamBtnSection = styled.div`
  display: flex;

  ${MOBILE_VIEW} {
    flex-direction: column;
  }

  button {
    width: 140px !important;
    padding: 5px 15px !important;
    margin: 0 3% 10px 0;
  }
`;
