import styled from 'styled-components';
import { COLOR_GREY, MOBILE_VIEW } from 'Styles/global.style';

export const $ReadMoreWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  left: 2%;
`;

export const $ReadMoreContent = styled.div`
  display: none;
  background: ${COLOR_GREY};
  padding: 1%;
  width: 50%;
  border-radius: 10px;

  ${MOBILE_VIEW} {
    padding: 3%;
    width: 90%;
  }

  &.show {
    display: block;
  }
`;

export const $ReadMoreNews = styled.div`
  margin-bottom: 2%;
`;
