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
      <$LeagueCardSection className="actions">
        <Button
          btnText="View League"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="leagues"
          redirect="/league/123"
        />
        <Button
          btnText="View Team"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="leagues"
          redirect="/team/123"
        />
        <Button
          btnText="View Matchup"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="leagues"
          redirect="matchup"
        />
      </$LeagueCardSection>
    </$LeagueCardWrapper>
  );
};

export default LeagueCard;
