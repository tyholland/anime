import React, { useEffect, useState } from 'react';
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
import Error from 'PageComponents/error';
import { useAppContext } from 'src/hooks/context.js';

const Team = ({ leagueId, teamId, teamData }) => {
  const { currentUser } = useAppContext();
  const [errorPage, setErrorPage] = useState(false);
  const { teamName, team, memberId } = teamData;

  useEffect(() => {
    setErrorPage(!currentUser);
  }, [currentUser]);

  if (errorPage) {
    return <Error />;
  }

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
              redirect={`/team/edit/${leagueId}/${teamId}`}
            />
          </$TeamBtnSection>
        </$TeamInfo>
        <TeamCard data={team} />
        <$TeamTotal>
          <$TeamTotalText>Total</$TeamTotalText>
          <$TeamTotalAmount>{team.points}</$TeamTotalAmount>
        </$TeamTotal>
      </$GlobalContainer>
    </>
  );
};

export default Team;
