import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_BLACK_DISABLED,
  COLOR_BLUE_HOVER,
  COLOR_GREY,
  COLOR_OFF_ORANGE,
  COLOR_ORANGE,
  COLOR_ORANGE_DISABLED,
  COLOR_RED,
  COLOR_RED_LIGHT,
  COLOR_WHITE,
  COLOR_YELLOW,
  COLOR_YELLOW_LIGHT,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const Btn = styled.button`
  border-radius: 10px;
  padding: 3%;
  margin-top: 10px;
  width: 100%;
  border: 2px solid ${COLOR_WHITE};

  &.primary {
    background-color: ${COLOR_ORANGE};

    span {
      color: ${COLOR_BLACK};
    }

    &:hover {
      background-color: ${COLOR_OFF_ORANGE};
    }
  }

  &.tertiary {
    background-color: ${COLOR_YELLOW};

    span {
      color: ${COLOR_BLACK};
    }

    &:hover {
      background-color: ${COLOR_YELLOW_LIGHT};
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
    margin: 1% 0 0;

    span {
      font-size: ${FONT_SIZE_EXTRA_SMALL};
      color: ${COLOR_BLACK};
    }
  }

  &.small {
    width: auto;
    padding: 5px 15px;
    position: relative;
    margin: 2% 0 0 2%;

    span {
      font-size: ${FONT_SIZE_EXTRA_SMALL};
    }
  }

  &.medium {
    width: 350px;
    padding: 15px;

    span {
      font-size: ${FONT_SIZE_SMALL};
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
      font-size: ${FONT_SIZE_SMALL};
    }
  }

  &.edit {
    & span {
      color: ${COLOR_BLUE_HOVER};
    }
  }

  &.text {
    background: transparent;
    border-radius: 0;
    border: none;
    margin: 0 0 0 2%;
    padding: 0;
    width: auto;

    &span {
      font-size: ${FONT_SIZE_MEDIUM};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &.cancel {
    background-color: ${COLOR_RED};

    &span {
      color: ${COLOR_WHITE};
    }

    &:hover {
      background-color: ${COLOR_RED_LIGHT};

      &span {
        color: ${COLOR_BLACK};
      }
    }
  }

  &.secondary {
    background-color: ${COLOR_BLACK};

    span {
      color: ${COLOR_WHITE};
    }

    &:hover {
      background-color: ${COLOR_YELLOW};

      span {
        color: ${COLOR_BLACK};
      }
    }
  }

  &.header {
    margin: 0 10px;
    width: 80px;
  }

  &.disabled {
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

export const BtnText = styled.span`
  text-align: center;
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_BLACK};
`;
