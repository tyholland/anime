import React from 'react';
import Button from '../button/button';
import * as Styles from './leagueCard.style';

const LeagueCard = ({ data }) => {
  const { name, team_name, leagueId, teamId, matchupId, hasDraft, week, active } = data;
  const isPastLeague = active === 0;

  return (
    <Styles.LeagueCardWrapper>
      <Styles.LeagueCardSection>
        <Styles.LeagueCardText>
          <span>League: </span>
          {name}
        </Styles.LeagueCardText>
        <Styles.LeagueCardText>
          <span>Team: </span>
          {team_name}
        </Styles.LeagueCardText>
      </Styles.LeagueCardSection>
      <Styles.LeagueCardSection className="actions">
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
        {!!teamId && !isPastLeague && (
          <Button
            btnText="View Team"
            btnColor="primary"
            customBtnClass="leagues"
            redirect={`/team?team_id=${teamId}`}
          />
        )}
        {!!matchupId && week < 10 && !isPastLeague && (
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
      </Styles.LeagueCardSection>
    </Styles.LeagueCardWrapper>
  );
};

export default LeagueCard;
