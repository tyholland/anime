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

  &.duo {
    border: none;
  }

  &.reverse {
    flex-direction: row-reverse;
  }
`;

export const $MatchupHeadliner = styled.div`
  width: 50%;
`;

export const $MatchupCharacter = styled.div`
  margin: 5px 0 0 10%;

  &.reverse {
    margin: 5px 10% 0 0;
    text-align: right;
  }
`;

export const $MatchupAffinity = styled.div`
  margin: 15px 0 0 10%;
  width: 25px;

  &.reverse {
    margin: 15px 5% 0 0;
    position: relative;
    right: -75%;
  }
`;

export const $MatchupPower = styled.button`
  width: 50%;
  margin: 15px 0;
  padding-right: 5%;
  border: none;
  background: transparent;

  &.reverse {
    padding-right: 0;
    padding-left: 5%;
  }
`;

export const $MatchupPowerText = styled.div`
  text-align: right;
  color: rgb(27, 5, 246);

  &.reverse {
    text-align: left;
  }
`;
