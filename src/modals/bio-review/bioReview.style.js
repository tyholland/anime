import styled from 'styled-components';
import { MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

export const $BioReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;

  ${MOBILE_VIEW} {
    width: auto;
  }

  &.btn {
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-around;

    ${MOBILE_VIEW} {
      flex-direction: column;
    }

    button {
      width: 200px;
    }
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
