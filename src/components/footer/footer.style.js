import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const $FooterContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: ${COLOR_ORANGE};
  padding: 4% 5% 2%;
  align-items: flex-start;

  ${MOBILE_VIEW} {
    flex-direction: column;
    padding: 5% 3%;
    width: 94%;
  }
`;

export const $FooterSection = styled.div`
  display: flex;
  width: 70%;

  ${MOBILE_VIEW} {
    width: 100%;
  }

  div {
    margin-bottom: 3%;

    ${MOBILE_VIEW} {
      margin-bottom: 2%;
    }
  }

  a {
    color: ${COLOR_BLACK};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &.social {
    align-items: center;
    justify-content: space-evenly;
    width: 30%;

    ${MOBILE_VIEW} {
      width: 100%;
      margin-top: 2%;
      margin-bottom: 0;
    }

    img {
      cursor: pointer;
    }
  }
`;

export const $FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;

  .title {
    font-weight: ${FONT_WEIGHT_BOLD};
    font-size: 16px;
  }
`;
