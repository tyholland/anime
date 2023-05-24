import styled from 'styled-components';
import { FONT_SIZE_LARGE, MOBILE_VIEW } from 'Styles/global.style';

export const AdminDashboardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 3%;

  ${MOBILE_VIEW} {
    width: 380px;
  }

  label {
    font-weight: bold;
    font-size: ${FONT_SIZE_LARGE};
    width: 30%;

    ${MOBILE_VIEW} {
      width: 15%;
    }
  }

  input {
    width: 40%;
    margin: 0;
    height: 40px;
  }

  &.img {
    justify-content: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 280px;

    button {
      margin-left: 5% !important;
    }
  }
`;
