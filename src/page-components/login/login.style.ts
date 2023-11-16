import styled from 'styled-components';
import { COLOR_BLUE_HOVER, FONT_WEIGHT_BOLD, RESPONSIVE_VIEW } from 'Styles/global.style';

export const LoginSplit = styled.div`
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-top: 10px;
  text-align: center;
`;

export const LoginContentLinks = styled.div`
  display: flex;
  margin-top: 20px;
  width: 350px;
  
  button span {
    color: ${COLOR_BLUE_HOVER};
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;

  ${RESPONSIVE_VIEW} {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const LoginSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 5%;

  ${RESPONSIVE_VIEW} {
    width: 100%;
    margin-bottom: 5%;
  }
`;
