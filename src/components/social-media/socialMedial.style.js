import styled from 'styled-components';
import { FONT_WEIGHT_BOLD, MOBILE_VIEW } from 'Styles/global.style';

export const $SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;

  ${MOBILE_VIEW} {
    margin-top: 5%;
  }

  .title {
    font-size: 20px;
    font-weight: ${FONT_WEIGHT_BOLD};
    margin-bottom: 2%;
  }

  .btns {
    display: flex;
    justify-content: space-around;
    width: calc(35% + 10px);
  }
`;

export const $SocialMediaMobileDevice = styled.div`
  display: none;

  ${MOBILE_VIEW} {
    display: block;
  }
`;
