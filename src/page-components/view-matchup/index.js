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

const ViewMatchup = () => {
  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$ViewMatchupWrapper>
          <$ViewMatchupTeamContent>
            <$ViewMatchupTeamName>Jack Of All Trades</$ViewMatchupTeamName>
            <$ViewMatchupTeamTotal>9000</$ViewMatchupTeamTotal>
          </$ViewMatchupTeamContent>
          <$ViewMatchupTeamContent>
            <$ViewMatchupTeamName>Z Fighters</$ViewMatchupTeamName>
            <$ViewMatchupTeamTotal>9000</$ViewMatchupTeamTotal>
          </$ViewMatchupTeamContent>
        </$ViewMatchupWrapper>
        <$ViewMatchupTeamSplit>
          <MatchUp isReverse={false} />
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
          <MatchUp isReverse={true} />
        </$ViewMatchupTeamSplit>
      </$GlobalContainer>
    </>
  );
};

export default ViewMatchup;
