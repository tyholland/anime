import styled from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const $BioReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  &.btn {
    margin-bottom: 0;
  }

  > div {
    width: 600px;

    ${MOBILE_VIEW} {
      width: 100%;
      flex-direction: row;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
