import styled from 'styled-components';
import { RESPONSIVE_VIEW } from 'Styles/global.style';

export const $NotificationMsg = styled.div`
  margin-bottom: 10%;
  font-size: 16px;

  ${RESPONSIVE_VIEW} {
    margin-bottom: 0;
  }
`;
