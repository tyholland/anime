import styled from 'styled-components';
import {
  FONT_COLOR_BLACK,
  FONT_COLOR_ORANGE,
  FONT_COLOR_RED,
  FONT_COLOR_WHITE,
} from 'Styles/global.style';

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
    background-color: ${FONT_COLOR_ORANGE};

    span {
      color: ${FONT_COLOR_BLACK};
    }
  }

  &.secondary {
    background-color: ${FONT_COLOR_BLACK};

    span {
      color: ${FONT_COLOR_ORANGE};
    }
  }

  &.cancel {
    background-color: ${FONT_COLOR_RED};

    span {
      color: ${FONT_COLOR_WHITE};
    }
  }

  &.social {
    background-color: ${FONT_COLOR_WHITE};
    border-color: ${FONT_COLOR_BLACK};
  }

  &.small {
    width: auto;
    padding: 5px 15px;
    position: relative;
    margin: 2% 0 0 2%;
    border-color: ${FONT_COLOR_WHITE};

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
  color: ${FONT_COLOR_BLACK};
`;
