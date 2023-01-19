import styled from 'styled-components';
import { FONT_COLOR_BLACK, FONT_COLOR_ORANGE } from 'Styles/global.style';

export const $TeamCardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${FONT_COLOR_BLACK};

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
  color: ${FONT_COLOR_ORANGE};
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

  &.right {
    text-align: right;
  }

  &.text {
    color: rgb(27, 5, 246);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &.noLink {
    cursor: default;
    font-weight: 700;
  }

  &.duo {
    display: flex;
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
  color: ${FONT_COLOR_BLACK};
  text-align: left;
  width: 30%;
  margin: 15px 0 15px 7px;
  font-weight: 700;
`;

export const $TeamCardCharacter = styled.button`
  color: ${FONT_COLOR_BLACK};
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

  &:hover {
    text-decoration: underline;
  }
`;

export const $TeamCardAffinity = styled.div`
  width: 30%;
  margin: 15px 0;
  font-weight: 700;
  color: ${FONT_COLOR_BLACK};
  display: flex;
  align-items: center;

  &.duo {
    display: block;
  }
`;

export const $TeamCardPower = styled.div`
  width: 30%;
  text-align: right;
  margin: 15px 0;
  padding-right: 10px;
  font-weight: 700;
  color: ${FONT_COLOR_BLACK};
`;
