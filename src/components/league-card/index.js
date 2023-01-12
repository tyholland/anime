import React from 'react';
import Button from '../button';
import {
  $LeagueCardText,
  $LeagueCardSection,
  $LeagueCardWrapper,
} from './leagueCard.style';

const LeagueCard = ({ data }) => {
  const { name, team_name, leagueId, teamId, matchupId } = data;

  return (
    <$LeagueCardWrapper>
      <$LeagueCardSection>
        <$LeagueCardText className="league">{name}</$LeagueCardText>
        <$LeagueCardText>{team_name}</$LeagueCardText>
      </$LeagueCardSection>
      <$LeagueCardSection className="actions">
        <Button
          btnText="View League"
          btnColor="primary"
          customBtnClass="leagues"
          redirect={`/league/${leagueId}`}
        />
        <Button
          btnText="View Team"
          btnColor="primary"
          customBtnClass="leagues"
          redirect={`/team/${leagueId}/${teamId}`}
        />
        <Button
          btnText="View Matchup"
          btnColor="primary"
          customBtnClass="leagues"
          redirect={`/matchup/${matchupId}`}
        />
      </$LeagueCardSection>
    </$LeagueCardWrapper>
  );
};

export default LeagueCard;
