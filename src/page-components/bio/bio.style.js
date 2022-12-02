import styled from "styled-components";

export const $BioAffinity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;

  &.right {
    margin-right: 10px;
  }

  &.down {
    margin-bottom: 25px;
  }

  &.last {
    margin-bottom: 4%;
  }
`;

export const $BioAffinityText = styled.div`
  margin-left: 5px;
`;

export const $BioTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 4%;
`;

export const $BioSubTitle = styled.div`
  font-size: 18px;
  color: #999;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const $BioAttribute = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const $BioSubAttribute = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;
