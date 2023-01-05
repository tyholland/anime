import styled from 'styled-components';

export const $TeamTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const $TeamInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const $TeamContent = styled.div`
  margin-left: 10px;
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
  color: rgba(0, 0, 0, 0.5);
`;

export const $TeamTotalText = styled.div`
  width: 65%;
  margin: 15px 0 0 5px;
  font-weight: 700;
  color: #000;
  text-align: right;
`;

export const $TeamTotalAmount = styled.div`
  width: 30%;
  text-align: right;
  margin: 15px 0;
  padding-right: 10px;
  font-weight: 700;
  color: #000;
`;

export const $TeamBtnSection = styled.div`
  display: flex;

  button {
    width: 140px !important;
    padding: 5px 15px !important;
    margin: 0 3% 10px 0;
  }
`;
