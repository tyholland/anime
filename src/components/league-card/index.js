import React from 'react';
import Button from '../button';
import { $LeagueCardText, $LeagueCardSection, $LeagueCardWrapper } from './leagueCard.style';

const LeagueCard = ({ league, team }) => {
  return (
    <$LeagueCardWrapper>
      <$LeagueCardSection>
        <$LeagueCardText className="league">{league}</$LeagueCardText>
        <$LeagueCardText>{team}</$LeagueCardText>
      </$LeagueCardSection>
      <$LeagueCardSection>
        <Button
          btnText="View Team"
          btnTextColor="yellow"
          btnColor="black"
          customBtnClass="leagues"
          redirect="team"
        />
        <Button
          btnText="View Matchup"
          btnTextColor="white"
          btnColor="red"
          customBtnClass="leagues"
          redirect="matchup"
        />
      </$LeagueCardSection>
    </$LeagueCardWrapper>
  );
};

export default LeagueCard;
