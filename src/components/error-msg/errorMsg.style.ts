import styled from 'styled-components';
import { COLOR_ERROR, MOBILE_VIEW } from 'Styles/global.style';

export const ErrorMsgWrapper = styled.div`
  background: ${COLOR_ERROR};
  border-radius: 10px;
  padding: 3%;
  width: 300px;
  margin: 0 auto 2%;

  ${MOBILE_VIEW} {
    padding: 5%;
    margin: 0 auto 5%;
  }
`;
