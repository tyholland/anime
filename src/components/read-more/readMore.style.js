import styled from 'styled-components';
import { COLOR_WHITE } from 'Styles/global.style';

export const $ReadMoreWrapper = styled.div`
  position: relative;
`;

export const $ReadMoreContent = styled.div`
  display: none;
  background: ${COLOR_WHITE};
  margin-top: 1%;
  padding: 1%;

  &.show {
    display: block;
  }
`;
