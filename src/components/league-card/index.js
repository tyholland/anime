import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import { getMatchUpFromTeamId } from 'src/requests/matchup';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Button from '../button';
import {
  $LeagueCardText,
  $LeagueCardSection,
  $LeagueCardWrapper,
} from './leagueCard.style';

const LeagueCard = ({ data }) => {
  const [matchupId, setMatchupId] = useState(null);
  const { currentUser } = useAppContext();
  const { name, team_name, leagueId, teamId } = data;

  const getMatchupData = async () => {
    try {
      const matchupData = await getMatchUpFromTeamId(teamId, currentUser.token);

      setMatchupId(matchupData[0]?.matchupId);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get matchup data'));
    }
  };

  useEffect(() => {
    if (!matchupId) {
      getMatchupData();
    }
  }, [matchupId]);

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
        <Button
          btnText="League"
          btnColor="primary"
          customBtnClass="leagues"
          redirect={`/league/details?league_id=${leagueId}`}
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
