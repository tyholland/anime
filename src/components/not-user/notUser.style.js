import styled from 'styled-components';
import { COLOR_WHITE } from 'Styles/global.style';

export const $NotUserContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  font-size: 25px;
  background-color: ${COLOR_WHITE};
  border-radius: 10px;
  padding: 3%;
  top: 20%;

  div {
    margin-bottom: 10px;
    width: 100%;
  }
`;
