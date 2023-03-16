import styled from 'styled-components';
import { COLOR_BLACK, MOBILE_VIEW } from 'Styles/global.style';

export const $BracketCreateSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  border-bottom: 1px solid ${COLOR_BLACK};
  padding-bottom: 1%;
  margin: 0 auto 1%;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  .space {
    width: 10%;

    ${MOBILE_VIEW} {
      width: 18%;
      text-align: center;
    }
  }
`;

export const $BracketCreatePlayer = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  justify-content: space-between;

  ${MOBILE_VIEW} {
    flex-direction: column;
  }

  > button {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 150px !important;
    text-align: left;
    margin: 0 !important;
  }

  .actionBtn {
    display: flex;
    align-items: center;
    margin-left: 5%;
    width: 150px;

    ${MOBILE_VIEW} {
      flex-direction: column;
    }
  }
`;

export const $BracketCreateWrapper = styled.div`
  margin: 3% 0;

  ${MOBILE_VIEW} {
    margin: 10% 0;
  }

  &.btn {
    text-align: center;
  }
`;
