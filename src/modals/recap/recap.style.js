import { FONT_SIZE_GIGANTIC } from 'Styles/global.style';
import styled from 'styled-components';

export const $RecapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  &.btn {
    margin-bottom: 0;
  }
`;

export const $RecapWeek = styled.div`
  font-size: ${FONT_SIZE_GIGANTIC};
`;

export const $RecapAgainst = styled.div`
  margin-bottom: 5%;
  font-style: italic;
`;
