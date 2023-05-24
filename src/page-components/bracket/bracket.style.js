import styled from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const BracketWrapper = styled.div`
  margin: 0 auto 2%;
  width: 97%;
  overflow-x: scroll;
  display: flex;
  justify-content: center;

  &.grid {
    ${MOBILE_VIEW} {
      justify-content: flex-start;
    }
  }

  &.voting {
    text-align: center;
  }
`;

export const BracketContainer = styled.div`
  margin-top: 5%;
`;

export const BracketViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
