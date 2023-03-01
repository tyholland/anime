import styled from 'styled-components';
import { COLOR_BLACK } from 'Styles/global.style';

export const $BracketCreateSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  border-bottom: 1px solid ${COLOR_BLACK};
  padding-bottom: 1%;
  margin: 0 auto 1%;
`;

export const $BracketCreatePlayer = styled.div`
  display: flex;
  align-items: center;

  > button {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 150px !important;
    text-align: left;
    margin: 0 !important;
  }

  .actionBtn {
    display: flex;
    align-items: center;
    margin-left: 5%;
  }
`;

export const $BracketCreateWrapper = styled.div`
  margin-bottom: 3%;

  &.btn {
    text-align: center;
  }
`;
