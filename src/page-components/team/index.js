import React from 'react';
import {
  $TeamTotalText,
  $TeamTotalAmount,
  $TeamTotal,
  $TeamInfo,
  $TeamContent,
  $TeamName,
  $TeamLeague,
  $TeamBtnSection,
} from './team.style.js';
import { $GlobalContainer } from 'Styles/global.style';
import Button from 'Components/button';
import TeamCard from 'Components/team-card';
import BackLink from 'Components/back-link/index.js';
import Metadata from 'Components/metadata/index.js';

const Team = ({ teamId, teamData }) => {
  const { teamName, team, memberId } = teamData;

  const totalPoints =
    team.captain.teamPoints +
    team.brawler_a.teamPoints +
    team.brawler_b.teamPoints +
    team.bs_brawler.teamPoints +
    team.bs_support.teamPoints +
    team.support.teamPoints +
    team.villain.teamPoints +
    team.battlefield.teamPoints;

  return (
    <>
      <Metadata
        title={`${teamName}'s page`}
        description={`Team page of ${teamName}. You can update/edit the roster. Edit your lineup for the week. As well as edit/view team info.`}
      />
      <BackLink />
      <$GlobalContainer>
        <$TeamInfo>
          <$TeamContent>
            <$TeamName>{teamName}</$TeamName>
            <$TeamLeague>Week: {team.week}</$TeamLeague>
            <$TeamLeague>Rank: 0-0</$TeamLeague>
          </$TeamContent>
          <$TeamBtnSection>
            <Button
              btnText="Team Info"
              btnColor="primary"
              redirect={`/team/info/${memberId}`}
              customBtnClass="medium"
            />
            <Button
              btnText="Edit Roster"
              btnColor="primary"
              customBtnClass="medium"
              redirect={`/team/edit/${teamId}`}
            />
          </$TeamBtnSection>
        </$TeamInfo>
        <TeamCard data={team} />
        <$TeamTotal>
          <$TeamTotalText>Total</$TeamTotalText>
          <$TeamTotalAmount>{totalPoints}</$TeamTotalAmount>
        </$TeamTotal>
      </$GlobalContainer>
    </>
  );
};

export default Team;
