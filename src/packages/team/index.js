import React from 'react';
import {
  $TeamTotalText,
  $TeamTotalAmount,
  $TeamTotal,
  $TeamStats,
  $TeamInfo,
  $TeamContent,
  $TeamName,
  $TeamLeague,
  $TeamOwner,
  $TeamBtnSection,
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
          <$TeamStats><span>Record:</span> 4-1</$TeamStats>
          <$TeamStats><span>Remaining:</span> 1000 pts</$TeamStats>
        </$TeamContent>
        <$TeamBtnSection>
          <Button
            btnText="Team Info"
            btnColor="black"
            btnTextColor="yellow"
            redirect="info/123"
            customBtnClass="small"
          />
          <Button
            btnText="Edit"
            btnTextColor="black"
            btnColor="orange"
            customBtnClass="small"
            redirect=""
          />
        </$TeamBtnSection>
      </$TeamInfo>
      <TeamCard />
      <$TeamTotal>
        <$TeamTotalText>Total</$TeamTotalText>
        <$TeamTotalAmount>9000</$TeamTotalAmount>
      </$TeamTotal>
      <TeamCard type="Bench" />
    </$GlobalContainer>
  );
};

export default Team;
