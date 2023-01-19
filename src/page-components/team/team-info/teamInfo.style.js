import styled from 'styled-components';
import { FONT_COLOR_BLACK } from 'Styles/global.style';

export const $TeamInfoContent = styled.div`
  border: 1px solid ${FONT_COLOR_BLACK};
  border-radius: 10px;
  height: 45px;
  padding: 0 10px;
  margin-top: 15px;
  font-size: 20px;
  width: 330px;
  line-height: 45px;
`;

export const $TeamInfoTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const $TeamInfoBtn = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const $TeamInfoStats = styled.div`
  margin-bottom: 10%;
  font-size: 20px;

  span {
    font-weight: 700;
  }
`;

export const $TeamInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
