import styled from 'styled-components';

export const $TeamTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const $TeamInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const $TeamContent = styled.div`
  margin-left: 10px;
`;

export const $TeamStats = styled.div`
  margin: 3px 0;
  font-size: 14px;

  span {
    font-weight: 700;
  }
`;

export const $TeamInfoTxt = styled.div`
  color: rgb(27, 5, 246);
  text-align: right;
`;

export const $TeamName = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const $TeamLeague = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, .5);
`;

export const $TeamOwner = styled.div`
  font-size: 16px;
  margin: 6px 0 12px 0;
`;

export const $TeamTotalText = styled.div`
  width: 20%;
  margin: 15px 0;
  font-weight: 700;
  color: #000;
`;

export const $TeamTotalAmount = styled.div`
  width: 20%;
  text-align: right;
  margin: 15px 0;
  padding-right: 40px;
  font-weight: 700;
  color: #000;
`;

export const $TeamBtnSection = styled.div`
  display: flex;
  flex-direction: column;
`;