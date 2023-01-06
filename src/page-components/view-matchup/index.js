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

const ViewMatchup = ({ team1, team2 }) => {
  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$ViewMatchupWrapper>
          <$ViewMatchupTeamContent>
            <$ViewMatchupTeamName>{team1.teamName}</$ViewMatchupTeamName>
            <$ViewMatchupTeamTotal>{team1.team.points}</$ViewMatchupTeamTotal>
          </$ViewMatchupTeamContent>
          <$ViewMatchupTeamContent>
            <$ViewMatchupTeamName>{team2.teamName}</$ViewMatchupTeamName>
            <$ViewMatchupTeamTotal>{team2.team.points}</$ViewMatchupTeamTotal>
          </$ViewMatchupTeamContent>
        </$ViewMatchupWrapper>
        <$ViewMatchupTeamSplit>
          <MatchUp isReverse={false} team={team1.team} />
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
          <MatchUp isReverse={true} team={team2.team} />
        </$ViewMatchupTeamSplit>
      </$GlobalContainer>
    </>
  );
};

export default ViewMatchup;
