import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  MOBILE_VIEW,
} from 'Styles/global.style';

export const FooterContainer = styled.div`
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

export const FooterSection = styled.div`
  display: flex;
  width: 100%;

  div {
    margin-bottom: 5%;
    font-size: ${FONT_SIZE_MEDIUM};

    ${MOBILE_VIEW} {
      margin-bottom: 8%;
    }
  }

  a {
    color: ${COLOR_BLACK};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${FONT_SIZE_SMALL};

  .title {
    font-weight: ${FONT_WEIGHT_BOLD};
    font-size: ${FONT_SIZE_LARGE};
    color: ${COLOR_BLACK};
  }
`;
