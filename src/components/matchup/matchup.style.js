import styled from 'styled-components';

export const $MatchupColumn = styled.div`
  width: 46%;
`;

export const $MatchupSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #000;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const $MatchupCharacterBtn = styled.button`
  border: none;
  background: transparent;
  width: auto;
  padding: 0;
  margin: 5px 0 0 10%;
  display: flex;
  justify-content: start;

  &.reverse {
    justify-content: end;
    margin: 5px 10% 0 0;
  }

  span {
    color: rgb(27, 5, 246);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const $MatchupAffinity = styled.div`
  margin: 15px 0 0 10%;
  width: auto;
  display: flex;
  flex-direction: row;

  &.reverse {
    margin: 15px 10% 0 0;
    position: relative;
    justify-content: end;

    .team {
      margin-right: 0;
      margin-left: 5px;
    }
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
