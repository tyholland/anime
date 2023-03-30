import React from 'react';
import Button from '../button';
import {
  $LeagueCardText,
  $LeagueCardSection,
  $LeagueCardWrapper,
} from './leagueCard.style';

const LeagueCard = ({ data }) => {
  const { name, team_name, leagueId, teamId, matchupId, hasDraft } = data;

  return (
    <$LeagueCardWrapper>
      <$LeagueCardSection>
        <$LeagueCardText>
          <span>League: </span>
          {name}
        </$LeagueCardText>
        <$LeagueCardText>
          <span>Team: </span>
          {team_name}
        </$LeagueCardText>
      </$LeagueCardSection>
      <$LeagueCardSection className="actions">
        {hasDraft && (
          <Button
            btnText="Draft"
            btnColor="primary"
            customBtnClass="leagues"
            redirect={`/draft?league_id=${leagueId}`}
          />
        )}
        <Button
          btnText="League"
          btnColor="primary"
          customBtnClass="leagues"
          redirect={`/league?league_id=${leagueId}`}
        />
        <Button
          btnText="View Team"
          btnColor="primary"
          customBtnClass="leagues"
          redirect={`/team?team_id=${teamId}`}
        />
        {matchupId && (
          <Button
            btnText="View Matchup"
            btnColor="primary"
            customBtnClass="leagues"
            redirect={`/matchup?matchup_id=${matchupId}`}
          />
        )}
      </$LeagueCardSection>
    </$LeagueCardWrapper>
  );
};

export default LeagueCard;
