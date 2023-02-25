import styled from 'styled-components';
import { MOBILE_VIEW } from 'Styles/global.style';

export const $PodcastService = styled.div`
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MOBILE_VIEW} {
    margin-bottom: 10%;
  }

  button {
    margin: 0 !important;

    ${MOBILE_VIEW} {
      width: 250px !important;
    }

    span {
      font-size: 16px !important;

      ${MOBILE_VIEW} {
        font-size: 18px !important;
        line-height: 28px;
      }
    }
  }
`;
