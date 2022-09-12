import styled from "styled-components";

export const $NavContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const $NavBtn = styled.button`
  padding: 1% 5%;
  background-color: rgb(249, 128, 17);
  border: none;

  &.selected {
    background-color: #fff;
  }
`;

export const $NavText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: 700;

  &.selected {
    color: rgb(249, 128, 17);
  }
`;
