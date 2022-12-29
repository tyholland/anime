import styled from 'styled-components';

export const $TeamCardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #000;

  &.header {
    background-color: rgba(249, 128, 17, 0.3);
    border-bottom: none;
    margin-top: 20px;
  }
`;

export const $TeamCardPosition = styled.div`
  width: 5%;
  padding: 18px 0;
  font-weight: 600;
  color: rgb(249, 128, 17);
  text-align: center;
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.8);

  &.none {
    background-color: rgba(0, 0, 0, 0);
  }

  &.duo {
    padding: 36px 0;
  }
`;

export const $TeamCardDuoSpace = styled.div`
  padding: 5px 0 0 0;
  cursor: pointer;

  &.right {
    text-align: right;
  }

  &.text {
    color: rgb(27, 5, 246);
  }

  &.noLink {
    cursor: default;
    font-weight: 700;
  }
`;

export const $TeamCardCharacterWrapper = styled.div`
  width: 30%;
  margin: 15px 0 15px 5px;

  &.duo {
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 5px;
  }
`;

export const $TeamCardCharacterHeader = styled.div`
  color: #000;
  text-align: left;
  width: 30%;
  margin: 15px 0 15px 7px;
  font-weight: 700;
`;

export const $TeamCardCharacter = styled.button`
  color: #000;
  background: transparent;
  border: none;
  text-align: left;

  &.noLink {
    cursor: default;
    font-weight: 700;
  }
`;

export const $TeamCardCharacterTxt = styled.span`
  color: rgb(27, 5, 246);
`;

export const $TeamCardAffinity = styled.div`
  width: 30%;
  margin: 15px 0;
  font-weight: 700;
  color: #000;
  display: flex;
  align-items: center;
`;

export const $TeamCardPower = styled.div`
  width: 30%;
  text-align: right;
  margin: 15px 0;
  padding-right: 10px;
  font-weight: 700;
  color: #000;
`;
