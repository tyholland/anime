import Button from 'Components/button';
import styled from 'styled-components';

export const $HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const $HeaderTitle = styled.div`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  text-align: center;
  margin-top: 2%;
`;

export const $HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2%;
`;

export const $HeaderBtn = Button;
