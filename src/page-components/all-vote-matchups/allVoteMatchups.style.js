import { FONT_SIZE_LARGE } from 'Styles/global.style';
import styled from 'styled-components';

export const $AllVoteMatchupsEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  .title {
    font-size: ${FONT_SIZE_LARGE};
    margin-bottom: 3%;
  }
`;
