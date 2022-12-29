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

const Team = ({ data }) => {
  const { teamName, team, leagueName } = data;

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
            <$TeamLeague>{leagueName}</$TeamLeague>
          </$TeamContent>
          <$TeamBtnSection>
            <Button
              btnText="Team Info"
              btnColor="orange"
              btnTextColor="black"
              redirect="/team/info/123"
              customBtnClass="medium"
            />
            <Button
              btnText="Edit Roster"
              btnTextColor="black"
              btnColor="orange"
              customBtnClass="medium"
              redirect="/team/edit/123"
            />
            <Button
              btnText="Edit Lineup"
              btnTextColor="black"
              btnColor="orange"
              customBtnClass="medium"
              redirect="/team/edit/123"
            />
          </$TeamBtnSection>
        </$TeamInfo>
        <TeamCard data={team} />
        <$TeamTotal>
          <$TeamTotalText>Total</$TeamTotalText>
          <$TeamTotalAmount>{team.points}</$TeamTotalAmount>
        </$TeamTotal>
        <TeamCard type="Bench" data={team} />
      </$GlobalContainer>
    </>
  );
};

export default Team;
