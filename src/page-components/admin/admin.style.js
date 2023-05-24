import styled from 'styled-components';
import { FONT_SIZE_EXTRA_SMALL, FONT_SIZE_LARGE, FONT_SIZE_MEDIUM, FONT_SIZE_SMALL, FONT_WEIGHT_NORMAL, MOBILE_VIEW } from 'Styles/global.style';

export const AdminWrapper = styled.div`
  display: flex;
  width: 95%;
  margin: 3% auto;
  flex-wrap: wrap;
  flex-direction: column;

  &.column {
    font-size: ${FONT_SIZE_LARGE};
    align-items: center;

    ol {
      width: 90%;
    }
  }

  .team {
    margin-bottom: 2%;

    button {
      margin-left: 5%;

      span {
        font-size: ${FONT_SIZE_EXTRA_SMALL};
      }
    }
  }
`;

export const AdminSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 2%;

  ${MOBILE_VIEW} {
    margin-bottom: 5%;
    width: 100%;
  }

  button {
    text-align: right;
    margin: 0 0 0 5% !important;

    span {
      font-size: ${FONT_SIZE_SMALL} !important;
    }
  }

  select,
  input {
    width: 50%;
    font-size: {${FONT_SIZE_MEDIUM}};
    height: 30px;
    margin: 0;
  }

  &.delete {
    justify-content: flex-end;
    width: 100%;

    button {
      margin: 3% 0 0 0 !important;

      span {
        font-size: ${FONT_SIZE_EXTRA_SMALL} !important;
        font-weight: ${FONT_WEIGHT_NORMAL};
      }
    }
  }

  &.start {
    justify-content: center;
    flex-direction: column;
    width: 100%;

    button {
      text-align: center;
      margin: 3% 0 0 !important;
    }

    .content {
      width: 60%;
      margin-top: 3%;
      text-align: center;

      ${MOBILE_VIEW} {
        width: 100%;
        margin-top: 5%;
      }
    }
  }
`;

export const AdminContainer = styled.div`
  margin-bottom: 5%;

  .collapseContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .down {
    rotate: 90deg;
  }

  .up {
    rotate: 270deg;
  }
`;
