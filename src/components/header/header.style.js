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

  img {
    width: 70px;
    height: auto;
  }
`;

export const $HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1% 2% 0;
`;

export const $HeaderBtn = Button;
