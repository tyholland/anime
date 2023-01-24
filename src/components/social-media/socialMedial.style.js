import styled from 'styled-components';
import { FONT_WEIGHT_BOLD } from 'Styles/global.style';

export const $SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;

  .title {
    font-size: 20px;
    font-weight: ${FONT_WEIGHT_BOLD};
    margin-bottom: 2%;
  }

  .btns {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
`;
