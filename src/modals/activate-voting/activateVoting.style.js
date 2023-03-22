import styled from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const $ActivateVotingBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6%;

  button {
    margin: 0 2% !important;
    width: 200px !important;
  }
`;

export const $ActivateVotingSection = styled.div`
  margin: 0 auto 2%;
  display: flex;
  align-items: center;
  width: 80%;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  button {
    margin: 0 2% 0 0 !important;
  }
`;
