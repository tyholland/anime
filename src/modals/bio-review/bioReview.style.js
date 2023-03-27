import styled from 'styled-components';
import { MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

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
    width: 500px;

    ${RESPONSIVE_VIEW} {
      width: 100%;
    }

    ${MOBILE_VIEW} {
      flex-direction: row;
    }

    img {
      width: 200px;
      height: 200px;

      ${MOBILE_VIEW} {
        width: 100%;
        height: auto;
      }
    }

    > div {
      ${MOBILE_VIEW} {
        width: 50%;
        margin: 0 2%;
      }
    }
  }
`;
