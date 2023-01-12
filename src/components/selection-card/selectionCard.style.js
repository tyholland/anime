import styled from 'styled-components';

export const $SelectionCardBlock = styled.button`
  padding: 2%;
  margin: 2%;
  width: 280px;
  height: 280px;
  background-image: url("/assets/background/dragonball.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  position: relative;
`;

export const $SelectionCardText = styled.span`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  background: #ffffff99;
  padding: 3% 4%;
  border-radius: 15px;
  width: min-content;
  color: #000;
`;
