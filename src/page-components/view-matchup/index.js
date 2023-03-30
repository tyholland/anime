import React, { useEffect, useState } from 'react';
import MatchUp from 'Components/matchup';
import {
  $GlobalContainer,
  $GlobalTitle,
  $GlobalSubTitle,
} from 'Styles/global.style';
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
import { getMatchupTeam, hideRecap } from 'src/requests/team';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';
import { useAppContext } from 'src/hooks/context';
import NotUser from 'Components/not-user';
import Button from 'Components/button';
import Notification from 'src/modals/notification';
import ActivateVoting from 'src/modals/activate-voting';
import Recap from 'src/modals/recap';

const ViewMatchup = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [score1, setScore1] = useState(null);
  const [score2, setScore2] = useState(null);
  const [votes, setVotes] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [votingIsOpen, setVotingIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState(null);
  const [retrigger, setRetrigger] = useState(false);
  const [recapIsOpen, setRecapIsOpen] = useState(false);
  const [recap, setRecap] = useState(null);
  const [hasMatchup, setHasMatchup] = useState(false);

  const handleMatchupData = async () => {
    const { matchup_id } = router.query;

    try {
      const results = await getMatchUp(matchup_id, currentUser?.token);

      const { team_a, team_b, score_a, score_b, active } = results.matchup;

      const team1 = await getMatchupTeam(team_a, currentUser?.token);
      const team2 = await getMatchupTeam(team_b, currentUser?.token);
      const theRecap = team1.recap
        ? team1.teamName === team1.recap.currentTeam
          ? team1.recap
          : team2.recap
        : null;

      setTeam1(team1);
      setTeam2(team2);
      setScore1(score_a);
      setScore2(score_b);
      setVotes(results.votes);
      setIsActive(results.isVotingActive && active);
      setRetrigger(false);
      setRecapIsOpen(!!team1.recap);
      setRecap(theRecap);
      setHasMatchup(true);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get matchup'));
      setErrorPage(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeRecapModal = async () => {
    try {
      await hideRecap(team1.info.league_id, currentUser?.token);
      setRecapIsOpen(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to close recap modal'));
    }
  };

  const handleModal = () => {
    setModalMsg(
      'The weekly affinity will be a random affinity or a combination of affinities. It will be applied every Sunday. Depending on what the affinity is, it could determine whether your team wins or loses.'
    );
    setModalIsOpen(true);
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!account) {
      handleMatchupData();
    }
  }, [router.query, account]);

  useEffect(() => {
    if (retrigger) {
      handleMatchupData();
    }
  }, [retrigger]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Matchup"
        description="View matchups between teams. View individual character bios or view the stats for a specific character. Don't forget to start user votes for specific matchups."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <$GlobalContainer>
            <$GlobalTitle className="matchup">
              Matchup
              <Button
                btnText="?"
                btnColor="secondary"
                btnFunction={handleModal}
                customBtnClass="small"
              />
            </$GlobalTitle>
            {!hasMatchup && <Loader />}
            {hasMatchup && (
              <>
                <$GlobalSubTitle className="matchup">
                  Weekly Affinity:
                  {team1.team.activeAffinity === 0
                    ? ' Unknown'
                    : ` ${
                        team1.team.affinity === 'no_affinity'
                          ? 'no affinity'
                          : team1.team.affinity
                      }`}
                </$GlobalSubTitle>
                <$ViewMatchupWrapper>
                  <$ViewMatchupTeamContent>
                    <$ViewMatchupTeamName>
                      {team1.teamName}
                    </$ViewMatchupTeamName>
                    <$ViewMatchupTeamTotal>
                      {score1 < 0 ? 0 : score1}
                    </$ViewMatchupTeamTotal>
                  </$ViewMatchupTeamContent>
                  <$ViewMatchupTeamContent>
                    <$ViewMatchupTeamName>
                      {team2.teamName}
                    </$ViewMatchupTeamName>
                    <$ViewMatchupTeamTotal>
                      {score2 < 0 ? 0 : score2}
                    </$ViewMatchupTeamTotal>
                  </$ViewMatchupTeamContent>
                </$ViewMatchupWrapper>
                {isActive > 0 && (
                  <$ViewMatchupWrapper className="activate">
                    <Button
                      btnText="Activate Voting"
                      btnColor="primary"
                      btnFunction={() => setVotingIsOpen(true)}
                      customBtnClass="small"
                    />
                  </$ViewMatchupWrapper>
                )}
                <$ViewMatchupTeamSplit>
                  <MatchUp
                    isReverse={false}
                    team={team1.team}
                    votes={votes}
                    userId={team1.memberId}
                    isActive={isActive}
                  />
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
                  <MatchUp
                    isReverse={true}
                    team={team2.team}
                    votes={votes}
                    userId={team2.memberId}
                    isActive={isActive}
                  />
                </$ViewMatchupTeamSplit>
                <ActivateVoting
                  isModalOpen={votingIsOpen}
                  setIsModalOpen={setVotingIsOpen}
                  team1={team1.team}
                  team2={team2.team}
                  votes={votes}
                  setRetrigger={setRetrigger}
                />
                <Recap
                  data={recap}
                  modalIsOpen={recapIsOpen}
                  closeModal={closeRecapModal}
                  teamName={
                    team1.teamName === recap?.currentTeam
                      ? team1.teamName
                      : team2.teamName
                  }
                />
              </>
            )}
            <Notification
              message={modalMsg}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            />
          </$GlobalContainer>
        </>
      )}
    </>
  );
};

export default ViewMatchup;
