import {
  COLOR_BLACK,
  COLOR_DISCLAIMER,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';
import styled from 'styled-components';

export const DisclaimerWrapper = styled.div`
  width: 96%;
  background-color: ${COLOR_DISCLAIMER};
  color: ${COLOR_BLACK};
  font-size: ${FONT_SIZE_SMALL};
  padding: 2%;
  margin: 2% 0;
  border-radius: 15px;
  font-weight: ${FONT_WEIGHT_BOLD};
  line-height: 25px;

  ${MOBILE_VIEW} {
    margin: 5% 0;
  }
`;
