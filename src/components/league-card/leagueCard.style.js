import styled from 'styled-components';

export const $LeagueCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding: 3% 0;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export const $LeagueCardText = styled.div`
  margin: 5px 0;
  font-size: 14px;

  &.league {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const $LeagueCardSection = styled.div`
  display: flex;
  flex-direction: column;
`;
