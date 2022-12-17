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
import BackLink from 'Components/back-link/index.js';

const Team = () => {
  return (
    <>
      <BackLink />
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
              customBtnClass="medium"
            />
            <Button
              btnText="Edit Roster"
              btnTextColor="black"
              btnColor="orange"
              customBtnClass="medium"
              redirect="edit/123"
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
    </>
  );
};

export default Team;
