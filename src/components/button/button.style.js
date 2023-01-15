import styled from 'styled-components';

export const $Btn = styled.button`
  border-radius: 10px;
  padding: 3%;
  margin-top: 10px;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(249, 128, 17, 0.8) !important;
  }

  &.primary {
    background-color: rgb(249, 128, 17);

    span {
      color: #000;
    }
  }

  &.secondary {
    background-color: #000;

    span {
      color: rgb(249, 128, 17);
    }
  }

  &.cancel {
    background-color: #cc0000;

    span {
      color: #fff;
    }
  }

  &.social {
    background-color: #fff;
    border-color: #000;
  }

  &.small {
    width: auto;
    padding: 5px 15px;
    position: relative;
    margin: 2% 0 0 2%;
    border-color: #fff;

    span {
      font-size: 12px;
    }
  }

  &.medium {
    width: 350px;
    padding: 15px;

    span {
      font-size: 14px;
    }
  }

  &.space {
    margin: 2%;
  }

  &.leagues {
    margin: 10px;
    padding: 10px;
    width: 150px;

    span {
      font-size: 15px;
    }
  }

  &.text {
    background: transparent;
    border-radius: 0;
    border: none;
    margin: 0 0 0 2%;
    padding: 0;
    width: auto;

    & span {
      font-size: 16px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &.header {
    margin: 0 10px;
    width: 80px;
  }
`;

export const $BtnText = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;
