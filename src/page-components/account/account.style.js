import styled from 'styled-components';

export const $AccountWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 3% auto;

  > div {
    width: 100%;
    text-align: center;

    input {
      width: 82%;
    }

    button {
      width: 89% !important;

      span {
        font-size: 12px !important;
      }
    }
  }

  &.column {
    flex-direction: column;
    font-size: 18px;
    align-items: center;

    button {
      width: 20%;
      margin-top: 3%;
    }

    input {
      width: 50%;
    }
  }
`;

export const $AccountSectionRight = styled.div`
  button {
    text-align: right;
    margin-top: 5% !important;
  }
`;

export const $AccountSectionLabel = styled.div`
  text-align: left;
  width: 90%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
`;
