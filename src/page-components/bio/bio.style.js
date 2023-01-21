import styled from 'styled-components';
import { FONT_WEIGHT_BOLD, FONT_WEIGHT_NORMAL } from 'Styles/global.style';

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
    flex-wrap: wrap;
    width: 100%;
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
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-bottom: 5%;
`;

export const $BioSubTitle = styled.div`
  font-size: 18px;
  color: #999;
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-bottom: 25px;

  span {
    font-weight: ${FONT_WEIGHT_NORMAL};
  }
`;

export const $BioAttribute = styled.div`
  font-size: 22px;
  font-weight: ${FONT_WEIGHT_BOLD};
`;

export const $BioSubAttribute = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;

export const $BioImage = styled.img`
  width: 100%;
  filter: grayscale(100);
  margin-bottom: 10%;
`;

export const $BioWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: self-start;
  width: 70%;
  margin: 0 auto;

  > div {
    width: 40%;
    margin: 0 5%;
  }
`;
