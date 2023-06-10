import { FONT_SIZE_EXTRA_SMALL } from 'Styles/global.style';
import styled from 'styled-components';

export const ReadMoreWrapper = styled.div`
  padding: 3% 3% 2%;
  width: 94%;
  font-size: ${FONT_SIZE_EXTRA_SMALL};
`;

export const ReadMoreDisclaimer = styled.div`
  margin-top: 2%;

  > div {
    padding: 0;
    display: inline-block;

    div {
      font-size: ${FONT_SIZE_EXTRA_SMALL};
      margin-bottom: 1%;
    }
  }
`;
