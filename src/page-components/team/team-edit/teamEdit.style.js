import styled from 'styled-components';

export const $TeamEditWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  margin: 0 auto;

  div {
    width: 100%;

    &.position {
      font-weight: 700;
    }

    div {
      height: 35px;
      padding: 2% 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #000;
      width: 100%;
    }
  }
`;
