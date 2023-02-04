import styled from 'styled-components';
import { MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

export const $JoinLeagueWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    text-align: center;
    width: 35%;

    ${RESPONSIVE_VIEW} {
      width: 50%;
    }

    ${MOBILE_VIEW} {
      width: 100%;
    }
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
