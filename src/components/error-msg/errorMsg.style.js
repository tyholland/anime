import styled from 'styled-components';
import { COLOR_RED_ERROR, MOBILE_VIEW } from 'Styles/global.style';

export const $ErrorMsgWrapper = styled.div`
  background: ${COLOR_RED_ERROR};
  border-radius: 10px;
  padding: 5%;
  width: 300px;
  margin: 0 auto 2%;

  ${MOBILE_VIEW} {
    margin: 0 auto 5%;
  }
`;
