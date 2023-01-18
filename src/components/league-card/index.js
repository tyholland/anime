import React, { useEffect, useState } from 'react';
import { getMatchUpFromTeamId } from 'src/requests/matchup';
import { getCookie } from 'Utils/index';
import Button from '../button';
import {
  $LeagueCardText,
  $LeagueCardSection,
  $LeagueCardWrapper,
} from './leagueCard.style';

const LeagueCard = ({ data }) => {
  const [matchupId, setMatchupId] = useState(null);
  const { name, team_name, leagueId, teamId } = data;

  const getMatchupData = async () => {
    const matchupData = await getMatchUpFromTeamId(teamId, getCookie('token'));

    setMatchupId(matchupData[0]?.matchupId);
  };

  useEffect(() => {
    if (!matchupId) {
      getMatchupData();
    }
  }, [matchupId]);

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
          redirect={`/team/${teamId}`}
        />
        {matchupId && (
          <Button
            btnText="View Matchup"
            btnColor="primary"
            customBtnClass="leagues"
            redirect={`/matchup/${matchupId}`}
          />
        )}
      </$LeagueCardSection>
    </$LeagueCardWrapper>
  );
};

export default LeagueCard;
