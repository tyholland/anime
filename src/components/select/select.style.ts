import styled from 'styled-components';
import { COLOR_BLACK, FONT_SIZE_EXTRA_LARGE } from 'Styles/global.style';

export const Select = styled.select`
  border: 1px solid ${COLOR_BLACK};
  border-radius: 10px;
  height: 45px;
  padding: 0 10px;
  margin-top: 15px;
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  width: 355px;
`;
