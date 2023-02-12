import React from 'react';
import MatchUp from 'Components/matchup';
import { $GlobalContainer } from 'Styles/global.style';
import {
  $ViewMatchupWrapper,
  $ViewMatchupPositionSection,
  $ViewMatchupTeamSplit,
  $ViewMatchupPosition,
  $ViewMatchupTeamContent,
  $ViewMatchupTeamName,
  $ViewMatchupTeamTotal,
  $ViewMatchupPositionColumn,
} from './viewMatchup.style';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';

const ViewMatchup = ({ team1, team2, score1, score2, votes }) => {
  return (
    <>
      <BackLink />
      <Metadata
        title="Matchup"
        description="View matchups between teams. View individual character bios or view the stats for a specific character. Don't forget to start user votes for specific matchups."
      />
      <$GlobalContainer>
        <$ViewMatchupWrapper>
          <$ViewMatchupTeamContent>
            <$ViewMatchupTeamName>{team1.teamName}</$ViewMatchupTeamName>
            <$ViewMatchupTeamTotal>{score1}</$ViewMatchupTeamTotal>
          </$ViewMatchupTeamContent>
          <$ViewMatchupTeamContent>
            <$ViewMatchupTeamName>{team2.teamName}</$ViewMatchupTeamName>
            <$ViewMatchupTeamTotal>{score2}</$ViewMatchupTeamTotal>
          </$ViewMatchupTeamContent>
        </$ViewMatchupWrapper>
        <$ViewMatchupTeamSplit>
          <MatchUp isReverse={false} team={team1.team} votes={votes} />
          <$ViewMatchupPositionColumn>
            <$ViewMatchupPositionSection>
              <$ViewMatchupPosition>C</$ViewMatchupPosition>
            </$ViewMatchupPositionSection>
            <$ViewMatchupPositionSection>
              <$ViewMatchupPosition>B</$ViewMatchupPosition>
            </$ViewMatchupPositionSection>
            <$ViewMatchupPositionSection>
              <$ViewMatchupPosition>B</$ViewMatchupPosition>
            </$ViewMatchupPositionSection>
            <$ViewMatchupPositionSection className="duo">
              <$ViewMatchupPosition className="duo">B/S</$ViewMatchupPosition>
            </$ViewMatchupPositionSection>
            <$ViewMatchupPositionSection>
              <$ViewMatchupPosition>S</$ViewMatchupPosition>
            </$ViewMatchupPositionSection>
            <$ViewMatchupPositionSection>
              <$ViewMatchupPosition>V</$ViewMatchupPosition>
            </$ViewMatchupPositionSection>
            <$ViewMatchupPositionSection>
              <$ViewMatchupPosition>BF</$ViewMatchupPosition>
            </$ViewMatchupPositionSection>
          </$ViewMatchupPositionColumn>
          <MatchUp isReverse={true} team={team2.team} votes={votes} />
        </$ViewMatchupTeamSplit>
      </$GlobalContainer>
    </>
  );
};

export default ViewMatchup;
