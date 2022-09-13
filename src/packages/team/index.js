import React from 'react';
import {
  $TeamTotalText,
  $TeamTotalAmount,
  $TeamTotal,
  $TeamPoints,
  $TeamInfo,
  $TeamContent,
  $TeamName,
  $TeamLeague,
  $TeamOwner,
  $TeamRecord,
} from './team.style.js';
import { $GlobalContainer } from 'Styles/global.style';
import Button from 'Components/button';
import TeamCard from 'Components/team-card';

const Team = () => {
  return (
    <$GlobalContainer>
      <$TeamInfo>
        <$TeamContent>
          <$TeamName>Jack Of All Trades</$TeamName>
          <$TeamLeague>Anime Ballers</$TeamLeague>
          <$TeamOwner>John Smith</$TeamOwner>
          <$TeamRecord>4-1</$TeamRecord>
        </$TeamContent>
        <div>
          <Button
            btnText="Team Info"
            btnColor="black"
            btnTextColor="yellow"
            redirect="settings"
            customBtnClass="small"
          />
          <$TeamPoints>1000 pts left</$TeamPoints>
        </div>
      </$TeamInfo>
      <TeamCard />
      <$TeamTotal>
        <$TeamTotalText>Total</$TeamTotalText>
        <$TeamTotalAmount>9000</$TeamTotalAmount>
      </$TeamTotal>
      <TeamCard type="Bench" />
      <Button
        btnText="Edit"
        btnTextColor="black"
        btnColor="orange"
        customBtnColor="medium"
        redirect=""
      />
    </$GlobalContainer>
  );
};

export default Team;
