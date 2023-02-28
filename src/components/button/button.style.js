import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_BLACK_DISABLED,
  COLOR_GREY,
  COLOR_ORANGE,
  COLOR_ORANGE_DISABLED,
  COLOR_RED,
  COLOR_WHITE,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const $Btn = styled.button`
  border-radius: 10px;
  padding: 3%;
  margin-top: 10px;
  width: 100%;

  &.primary {
    background-color: ${COLOR_ORANGE};

    span {
      color: ${COLOR_BLACK};
    }
  }

  &.secondary {
    background-color: ${COLOR_BLACK};

    span {
      color: ${COLOR_ORANGE};
    }
  }

  &.cancel {
    background-color: ${COLOR_RED};

    span {
      color: ${COLOR_WHITE};
    }
  }

  &.social {
    background-color: ${COLOR_WHITE};
    border-color: ${COLOR_BLACK};
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      margin-left: 2%;
      font-weight: ${FONT_WEIGHT_BOLD};
      color: ${COLOR_BLACK};
    }
  }

  &.share {
    background-color: ${COLOR_WHITE};
    border: none;
    border-radius: 0;
    width: 50px;
    height: 50px;
    margin: 0;
  }

  &.readMore {
    background-color: ${COLOR_GREY};
    width: auto;
    padding: 3px 5px;
    position: relative;
    margin: 0;
    border-color: ${COLOR_WHITE};

    span {
      font-size: 11px;
      color: ${COLOR_BLACK};
    }
  }

  &.small {
    width: auto;
    padding: 5px 15px;
    position: relative;
    margin: 2% 0 0 2%;
    border-color: ${COLOR_WHITE};

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

    ${RESPONSIVE_VIEW} {
      width: 130px;
    }

    ${MOBILE_VIEW} {
      width: 90px;
    }

    span {
      font-size: 15px;
    }
  }

  &.edit {
    & span {
      color: #06c;
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

  &:disabled {
    cursor: not-allowed;

    &.primary {
      background-color: ${COLOR_ORANGE_DISABLED} !important;
    }

    &.social {
      background-color: ${COLOR_BLACK_DISABLED} !important;
      border-color: ${COLOR_BLACK_DISABLED} !important;
    }
  }
`;

export const $BtnText = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_BLACK};
`;
