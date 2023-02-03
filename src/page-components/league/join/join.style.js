import styled from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const $JoinLeagueWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    text-align: center;
  }

  &.spacing {
    button {
      margin-bottom: 5%;
    }
  }

  ${MOBILE_VIEW} {
    flex-direction: column;
  }
`;

export const $JoinLeagueImg = styled.img`
  width: 200px;
  height: auto;

  ${MOBILE_VIEW} {
    width: 30%;
    margin-top: 5%;
  }
`;
