import styled from 'styled-components';

export const $TeamCardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #000;

  &.header {
    background-color: rgba(249, 128, 17, .3);
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
  background-color: rgba(0, 0, 0, .8);

  &.none {
    background-color: rgba(0, 0, 0, 0);
  }

  &.duo {
    padding: 36px 0;
  }
`;

export const $TeamCardDuoSpace = styled.div`
  padding: 5px 0;

  &.right {
    text-align: right;
  }

  &.text {
    color: rgb(27, 5, 246);
  }
`;

export const $TeamCardCharacter = styled.div`
  width: 30%;
  margin: 15px 0 15px 5px;
  font-weight: 700;
  color: #000;
`;

export const $TeamCardCharacterTxt = styled.span`
  color: rgb(27, 5, 246);
`;

export const $TeamCardAffinity = styled.div`
  width: 30%;
  margin: 15px 0;
  font-weight: 700;
  color: #000;
`;

export const $TeamCardPower = styled.div`
  width: 30%;
  text-align: right;
  margin: 15px 0;
  padding-right: 10px;
  font-weight: 700;
  color: #000;
`;
