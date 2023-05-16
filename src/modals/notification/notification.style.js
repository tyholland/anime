import styled from 'styled-components';
import { FONT_SIZE_MEDIUM, RESPONSIVE_VIEW } from 'Styles/global.style';

export const $NotificationMsg = styled.div`
  margin-bottom: 3%;
  font-size: ${FONT_SIZE_MEDIUM};

  ${RESPONSIVE_VIEW} {
    margin-bottom: 0;
  }
`;
