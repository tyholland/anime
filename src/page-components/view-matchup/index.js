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
import { responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { getMatchUp } from 'src/requests/matchup';
import { getMatchupTeam } from 'src/requests/team';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';
import { useAppContext } from 'src/hooks/context';

const ViewMatchup = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [score1, setScore1] = useState(null);
  const [score2, setScore2] = useState(null);
  const [votes, setVotes] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const hasMatchup = !!team1 && !!team2 && !!score1 && !!score2 && !!votes;

  const handleMatchupData = async () => {
    const { matchup_id } = router.query;

    try {
      const results = await getMatchUp(matchup_id, currentUser?.token);

      const { team_a, team_b, score_a, score_b } = results.matchup;

      const team1 = await getMatchupTeam(team_a, currentUser?.token);
      const team2 = await getMatchupTeam(team_b, currentUser?.token);

      setTeam1(team1);
      setTeam2(team2);
      setScore1(score_a);
      setScore2(score_b);
      setVotes(results.votes);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get matchup'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handleMatchupData();
    }
  }, [router.query]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <Metadata
        title="Matchup"
        description="View matchups between teams. View individual character bios or view the stats for a specific character. Don't forget to start user votes for specific matchups."
      />
      <$GlobalContainer>
        {!hasMatchup && <Loader />}
        {hasMatchup && (
          <>
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
                  <$ViewMatchupPosition className="duo">
                    B/S
                  </$ViewMatchupPosition>
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
          </>
        )}
      </$GlobalContainer>
    </>
  );
};

export default ViewMatchup;
