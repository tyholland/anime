import React from 'react';
import Button from '../button';
import {
  $LeagueCardText,
  $LeagueCardSection,
  $LeagueCardWrapper,
} from './leagueCard.style';

const LeagueCard = ({ data }) => {
  const { name, team_name, leagueId, teamId } = data;

  return (
    <$LeagueCardWrapper>
      <$LeagueCardSection>
        <$LeagueCardText className="league">{name}</$LeagueCardText>
        <$LeagueCardText>{team_name}</$LeagueCardText>
      </$LeagueCardSection>
      <$LeagueCardSection className="actions">
        <Button
          btnText="View League"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="leagues"
          redirect={`/league/${leagueId}`}
        />
        <Button
          btnText="View Team"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="leagues"
          redirect={`/team/${leagueId}/${teamId}`}
        />
        <Button
          btnText="View Matchup"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="leagues"
          redirect="/matchup/123"
        />
      </$LeagueCardSection>
    </$LeagueCardWrapper>
  );
};

export default LeagueCard;
