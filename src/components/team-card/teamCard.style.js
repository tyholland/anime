import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_ORANGE,
  COLOR_ORANGE_LIGHT,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $TeamCardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${COLOR_BLACK};

  &.header {
    background-color: ${COLOR_ORANGE_LIGHT};
    border-bottom: none;
    margin-top: 20px;
  }
`;

export const $TeamCardPosition = styled.div`
  width: 5%;
  padding: 18px 0;
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_ORANGE};
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
    color: ${COLOR_BLUE};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &.noLink {
    cursor: default;
    font-weight: ${FONT_WEIGHT_BOLD};
  }

  &.duo {
    display: flex;
  }
`;

export const $TeamCardCharacterWrapper = styled.div`
  width: 30%;
  margin: 15px 0 15px 5px;

  ${MOBILE_VIEW} {
    width: 60%;
  }

  &.duo {
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 5px;
  }
`;

export const $TeamCardCharacterHeader = styled.div`
  color: ${COLOR_BLACK};
  text-align: left;
  width: 30%;
  margin: 15px 0 15px 7px;
  font-weight: ${FONT_WEIGHT_BOLD};

  ${MOBILE_VIEW} {
    width: 68%;
  }
`;

export const $TeamCardCharacter = styled.button`
  color: ${COLOR_BLACK};
  background: transparent;
  border: none;
  text-align: left;

  &.noLink {
    cursor: default;
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;

export const $TeamCardCharacterTxt = styled.div`
  color: ${COLOR_BLUE};

  ${MOBILE_VIEW} {
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
    overflow: hidden;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const $TeamCardAffinity = styled.div`
  width: 30%;
  margin: 15px 0;
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_BLACK};
  display: flex;
  align-items: center;

  ${MOBILE_VIEW} {
    display: none;
  }

  &.duo {
    display: block;

    ${MOBILE_VIEW} {
      display: none;
    }
  }
`;

export const $TeamCardPower = styled.div`
  width: 30%;
  text-align: right;
  margin: 15px 0;
  padding-right: 10px;
  font-weight: ${FONT_WEIGHT_BOLD};
  color: ${COLOR_BLACK};
`;
