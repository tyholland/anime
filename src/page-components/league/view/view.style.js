import styled from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const $ViewLeagueEmptyTitle = styled.div`
  text-align: center;
  margin: 10% 0 3%;
  font-size: 18px;

  ${MOBILE_VIEW} {
    margin: 10% 0;
  }
`;

export const $ViewLeagueEmptyBtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  button {
    margin: 0 5%;
  }
`;
