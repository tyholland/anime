import styled from "styled-components";

export const $GameplayCardSection = styled.div`
  margin-bottom: 20px;
  font-size: 14px;

  :last-child {
    margin: 0;
  }

  &.indent {
    margin-left: 2%;
  }
`;

export const $GameplayCardTitle = styled.div`
  text-decoration: underline;
  margin-bottom: 10px;
  font-size: 14px;

  &.bold {
    text-decoration: none;
    font-weight: 700;
  }
`;

export const $GameplayCardHeader = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const $GameplayCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 65%;
  margin: 0 auto;

  div {
    width: 100%;
    line-height: 20px;
  }
`;
