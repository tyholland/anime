import React, { useEffect, useState } from 'react';
import MatchUp from 'Components/matchup';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './viewMatchup.style';
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
      setIsActive(results.isVotingActive === 1 && active === 1);
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
      <>
        <div>
          The weekly affinity will be a random affinity or a combination of
          affinities. It will be applied every Sunday. Depending on what the
          affinity is, it could determine whether your team wins or loses.
        </div>
        <br />
        <div>
          If you see a red indicator next to a player's name. That means that
          player is or has been involved in user voting.
        </div>
      </>
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
          <GlobalStyles.GlobalContainer>
            <GlobalStyles.GlobalTitle className="matchup">
              Matchup
              <Button
                btnText="?"
                btnColor="secondary"
                btnFunction={handleModal}
                customBtnClass="small"
              />
            </GlobalStyles.GlobalTitle>
            {!hasMatchup && <Loader />}
            {hasMatchup && (
              <>
                <GlobalStyles.GlobalSubTitle className="matchup">
                  Weekly Affinity:
                  {team1.team.activeAffinity === 0
                    ? ' Unknown'
                    : ` ${
                        team1.team.affinity === 'no_affinity'
                          ? 'no affinity'
                          : team1.team.affinity
                      }`}
                </GlobalStyles.GlobalSubTitle>
                <Styles.ViewMatchupWrapper>
                  <Styles.ViewMatchupTeamContent>
                    <Styles.ViewMatchupTeamName>
                      {team1.teamName}
                    </Styles.ViewMatchupTeamName>
                    <Styles.ViewMatchupTeamTotal>{score1}</Styles.ViewMatchupTeamTotal>
                  </Styles.ViewMatchupTeamContent>
                  <Styles.ViewMatchupTeamContent>
                    <Styles.ViewMatchupTeamName>
                      {team2.teamName}
                    </Styles.ViewMatchupTeamName>
                    <Styles.ViewMatchupTeamTotal>{score2}</Styles.ViewMatchupTeamTotal>
                  </Styles.ViewMatchupTeamContent>
                </Styles.ViewMatchupWrapper>
                {isActive > 0 && (
                  <Styles.ViewMatchupWrapper className="activate">
                    <Button
                      btnText="Activate Voting"
                      btnColor="primary"
                      btnFunction={() => setVotingIsOpen(true)}
                      customBtnClass="small"
                    />
                  </Styles.ViewMatchupWrapper>
                )}
                <Styles.ViewMatchupTeamSplit>
                  <MatchUp
                    isReverse={false}
                    team={team1.team}
                    votes={votes}
                    userId={team1.memberId}
                    isActive={isActive}
                  />
                  <Styles.ViewMatchupPositionColumn>
                    <Styles.ViewMatchupPositionSection>
                      <Styles.ViewMatchupPosition>C</Styles.ViewMatchupPosition>
                    </Styles.ViewMatchupPositionSection>
                    <Styles.ViewMatchupPositionSection>
                      <Styles.ViewMatchupPosition>B</Styles.ViewMatchupPosition>
                    </Styles.ViewMatchupPositionSection>
                    <Styles.ViewMatchupPositionSection>
                      <Styles.ViewMatchupPosition>B</Styles.ViewMatchupPosition>
                    </Styles.ViewMatchupPositionSection>
                    <Styles.ViewMatchupPositionSection className="duo">
                      <Styles.ViewMatchupPosition className="duo">
                        B/S
                      </Styles.ViewMatchupPosition>
                    </Styles.ViewMatchupPositionSection>
                    <Styles.ViewMatchupPositionSection>
                      <Styles.ViewMatchupPosition>S</Styles.ViewMatchupPosition>
                    </Styles.ViewMatchupPositionSection>
                    <Styles.ViewMatchupPositionSection>
                      <Styles.ViewMatchupPosition>V</Styles.ViewMatchupPosition>
                    </Styles.ViewMatchupPositionSection>
                    <Styles.ViewMatchupPositionSection>
                      <Styles.ViewMatchupPosition>BF</Styles.ViewMatchupPosition>
                    </Styles.ViewMatchupPositionSection>
                  </Styles.ViewMatchupPositionColumn>
                  <MatchUp
                    isReverse={true}
                    team={team2.team}
                    votes={votes}
                    userId={team2.memberId}
                    isActive={isActive}
                  />
                </Styles.ViewMatchupTeamSplit>
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
          </GlobalStyles.GlobalContainer>
        </>
      )}
    </>
  );
};

export default ViewMatchup;
