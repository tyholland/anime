import styled from 'styled-components';

export const SwapPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const SwapPlayerSection = styled.div`
  margin: 3% 0;
  width: 100%;

  &.orig {
    text-align: center;
    margin-bottom: 5%;
  }
`;

export const SwapPlayerCharacter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 3% 0 5%;

  div {
    margin-left: 5%;
  }

  button {
    margin-top: 0 !important;
  }

  &.noSwap {
    justify-content: center;
  }
`;
