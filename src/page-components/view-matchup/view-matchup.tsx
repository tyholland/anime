import React, { useEffect, useState } from 'react';
import MatchUp from 'Components/matchup/matchup';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './viewMatchup.style';
import BackLink from 'Components/back-link/back-link';
import Metadata from 'Components/metadata/metadata';
import { getParsedObject, responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { getMatchUp } from 'Requests/matchup';
import { getMatchupTeam, hideRecap } from 'Requests/team';
import Error from 'PageComponents/error/error';
import Loader from 'Components/loader/loader';
import { useUserContext } from 'Hooks/user';
import NotUser from 'Components/not-user/not-user';
import Button from 'Components/button/button';
import Notification from 'Modals/notification/notification';
import ActivateVoting from 'Modals/activate-voting/activate-voting';
import Recap from 'Modals/recap/recap';

const ViewMatchup = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [team1, setTeam1] = useState<Record<string, any> | null>(null);
  const [team2, setTeam2] = useState<Record<string, any> | null>(null);
  const [score1, setScore1] = useState<number | null>(null);
  const [score2, setScore2] = useState<number | null>(null);
  const [votes, setVotes] = useState<Record<string, any> | null>(null);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [account, setAccount] = useState<Record<string, any> | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [votingIsOpen, setVotingIsOpen] = useState<boolean>(false);
  const [modalMsg, setModalMsg] = useState<string | React.JSX.Element | null>(
    null
  );
  const [retrigger, setRetrigger] = useState<boolean>(false);
  const [recapIsOpen, setRecapIsOpen] = useState<boolean>(false);
  const [recap, setRecap] = useState<Record<string, any> | null>(null);
  const [hasMatchup, setHasMatchup] = useState<boolean>(false);

  const handleMatchupData = async () => {
    const { matchup_id } = router.query;

    try {
      const results = await getMatchUp(
        matchup_id as string,
        currentUser?.token
      );

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
      setIsActive(
        results.isVotingActive === 1 && active === 1 && results.isUser
      );
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
          The affinity drops will be a random affinity or a combination of
          affinities. The first one will drop on Thursday, and the second will
          drop on Sunday. Depending on what the affinity is, it could determine
          whether your team wins or loses.
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

  const handleWeeklyAffinityDrop = (day: string) => {
    const teamAffinity = getParsedObject(team1.team.affinity);
    const teamActiveAffinity = getParsedObject(team1.team.activeAffinity);

    if (teamActiveAffinity[day] === 0) {
      return 'Unknown';
    }

    if (teamAffinity[day] === 'no_affinity') {
      return (
        <GlobalStyles.GlobalCircle
          className="team noAffinity"
          title="no affinity"
        ></GlobalStyles.GlobalCircle>
      );
    }

    const affinity = teamAffinity[day].split(', ').map((item: any) => {
      if (!item.length) {
        return 'Unknown';
      }

      return (
        <GlobalStyles.GlobalCircle
          key={item}
          className={`team ${item}`}
          title={item}
        ></GlobalStyles.GlobalCircle>
      );
    });

    return affinity;
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
                  <div>
                    <Styles.ViewMatchupAffinityText>
                      Thursday Affinity Drop:
                    </Styles.ViewMatchupAffinityText>
                    {handleWeeklyAffinityDrop('thursday')}
                  </div>
                  <div>
                    <Styles.ViewMatchupAffinityText>
                      Sunday Affinity Drop:
                    </Styles.ViewMatchupAffinityText>
                    {handleWeeklyAffinityDrop('sunday')}
                  </div>
                </GlobalStyles.GlobalSubTitle>
                <Styles.ViewMatchupWrapper>
                  <Styles.ViewMatchupTeamContent>
                    <Styles.ViewMatchupTeamName>
                      {team1.teamName}
                    </Styles.ViewMatchupTeamName>
                    <Styles.ViewMatchupTeamTotal>
                      {score1}
                    </Styles.ViewMatchupTeamTotal>
                  </Styles.ViewMatchupTeamContent>
                  <Styles.ViewMatchupTeamContent>
                    <Styles.ViewMatchupTeamName>
                      {team2.teamName}
                    </Styles.ViewMatchupTeamName>
                    <Styles.ViewMatchupTeamTotal>
                      {score2}
                    </Styles.ViewMatchupTeamTotal>
                  </Styles.ViewMatchupTeamContent>
                </Styles.ViewMatchupWrapper>
                {!!isActive && (
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
                      <Styles.ViewMatchupPosition>
                        BF
                      </Styles.ViewMatchupPosition>
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
