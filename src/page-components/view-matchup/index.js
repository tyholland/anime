import React, { useEffect, useState } from 'react';
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
import { getMatchUp } from 'src/requests/matchup';
import { getTeam } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Loader from 'Components/loader';
import Error from 'PageComponents/error';
import { useAppContext } from 'src/hooks/context';

const ViewMatchup = ({ matchupId }) => {
  const { currentUser } = useAppContext();
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [errorPage, setErrorPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMatchUpData = async () => {
    if (!currentUser) {
      setIsLoading(false);
      setErrorPage(true);
      return;
    }

    try {
      const matchup = await getMatchUp(matchupId);

      const { league_id, team_a, team_b } = matchup[0];

      const teamOne = await getTeam(league_id, team_a);
      const teamTwo = await getTeam(league_id, team_b);

      setTeam1(teamOne);
      setTeam2(teamTwo);
      setIsLoading(false);
    } catch (error) {
      addEvent('Error', responseError('Get Matchup Data'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!team1 || !team2) {
      getMatchUpData();
    }
  }, [team1, team2]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <Metadata
        title={`Matchup between ${team1.teamName} and ${team2.teamName}`}
        description="View matchups between teams. View individual character bios or view the stats for a specific character. Don't forget to start user votes for specific matchups."
      />
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
