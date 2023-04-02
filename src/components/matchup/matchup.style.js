import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_BLUE_HOVER,
  COLOR_RED,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
  RESPONSIVE_VIEW,
} from 'Styles/global.style';

export const $MatchupColumn = styled.div`
  width: 46%;
`;

export const $MatchupSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${COLOR_BLACK};
  height: 80px;
  justify-content: space-between;

  &.duo {
    border: none;
  }

  &.reverse {
    flex-direction: row-reverse;
  }
`;

export const $MatchupHeadliner = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const $MatchupCharacterBtn = styled.button`
  border: none;
  background: transparent;
  width: auto;
  padding: 0;
  margin: 5px 0 0 5%;
  display: flex;
  justify-content: start;
  font-size: 14px;

  > span {
    color: ${COLOR_BLUE_HOVER};

    &:hover {
      text-decoration: underline;
    }

    ${RESPONSIVE_VIEW} {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 83px;
      text-align: left;
    }
  }

  &.reverse {
    justify-content: end;
    margin: 5px 5% 0 0;

    > span {
      justify-content: flex-end;

      ${RESPONSIVE_VIEW} {
        text-align: right;
      }
    }

    ${MOBILE_VIEW} {
      margin: 0 6% 0;
    }
  }

  &.disable {
    cursor: text;

    span {
      color: ${COLOR_BLACK};
      font-size: 16px;

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${MOBILE_VIEW} {
    margin: 0;
  }
`;

export const $MatchupAffinity = styled.div`
  margin: 15px 0 0 5%;
  width: auto;
  display: flex;
  flex-direction: row;

  &.reverse {
    margin: 15px 5% 0 0;
    position: relative;
    justify-content: end;

    .team {
      margin-right: 0;
      margin-left: 5px;
    }
  }

  ${MOBILE_VIEW} {
    flex-wrap: wrap;
  }
`;

export const $MatchupPower = styled.button`
  width: auto;
  margin: 0 5% 0 0;
  padding: 0;
  border: none;
  background: transparent;

  &.reverse {
    margin: 0 0 0 5%;
  }
`;

export const $MatchupPowerText = styled.div`
  text-align: right;
  color: ${(props) => (props.noCharacter ? COLOR_BLACK : COLOR_BLUE_HOVER)};
  font-size: ${(props) => (props.noCharacter ? '16px' : '14px')};
  cursor: ${(props) => (props.noCharacter ? 'text' : 'pointer')};

  &:hover {
    text-decoration: ${(props) => (props.noCharacter ? 'none' : 'underline')};
  }

  &.reverse {
    text-align: left;
  }
`;

export const $MatchupCharacterBtnWrapper = styled.div`
  display: flex;
  justify-content: start;

  &.reverse {
    justify-content: end;
  }

  ${MOBILE_VIEW} {
    margin-left: 6%;
  }
`;

export const $MatchupAsterik = styled.span`
  color: ${COLOR_RED};
  margin-right: 5px;
  font-weight: ${FONT_WEIGHT_BOLD};
`;
