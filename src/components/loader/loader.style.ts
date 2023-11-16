import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  flex-direction: column;

  &.small {
    margin-top: 0;
  }
`;

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  div {
    margin-bottom: 5%;
  }
`;
