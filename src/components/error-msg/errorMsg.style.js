import styled from 'styled-components';
import { COLOR_RED_ERROR, MOBILE_VIEW } from 'Styles/global.style';

export const $ErrorMsgWrapper = styled.div`
  background: ${COLOR_RED_ERROR};
  border-radius: 20px;
  padding: 2%;
  width: 300px;
  margin: 0 auto 2%;

  ${MOBILE_VIEW} {
    padding: 5%;
    margin: 0 auto 5%;
  }
`;
