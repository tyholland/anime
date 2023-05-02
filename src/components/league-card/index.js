import React from 'react';
import Button from '../button';
import {
  $LeagueCardText,
  $LeagueCardSection,
  $LeagueCardWrapper,
} from './leagueCard.style';

const LeagueCard = ({ data }) => {
  const { name, team_name, leagueId, teamId, matchupId, hasDraft, week } = data;

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
          btnText="League Hub"
          btnColor="primary"
          customBtnClass="leagues"
          redirect={`/league?league_id=${leagueId}`}
        />
        {!!teamId && (
          <Button
            btnText="View Team"
            btnColor="primary"
            customBtnClass="leagues"
            redirect={`/team?team_id=${teamId}`}
          />
        )}
        {!!matchupId && week < 10 && (
          <Button
            btnText="View Matchup"
            btnColor="primary"
            customBtnClass="leagues"
            redirect={`/matchup?matchup_id=${matchupId}`}
          />
        )}
        {week > 9 && (
          <Button
            btnText="View Playoffs"
            btnColor="primary"
            customBtnClass="leagues"
            redirect={`/playoffs?league_id=${leagueId}`}
          />
        )}
      </$LeagueCardSection>
    </$LeagueCardWrapper>
  );
};

export default LeagueCard;
