import styled from 'styled-components';
import { COLOR_BLACK, MOBILE_VIEW, RESPONSIVE_VIEW } from 'Styles/global.style';

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

  span {
    color: rgb(27, 5, 246);

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

    span {
      text-align: right;
    }

    ${MOBILE_VIEW} {
      margin: 0;
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
    display: none;
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
  color: rgb(27, 5, 246);

  &:hover {
    text-decoration: underline;
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
`;
