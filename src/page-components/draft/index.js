import Metadata from 'Components/metadata';
import Players from 'Components/players';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import BioReview from 'src/modals/bio-review';
import {
  draftNextRound,
  getDraft,
  updateDraftRecentPick,
  updateDraftTeams,
} from 'src/requests/draft';
import { getUseablePlayers } from 'src/requests/player';
import { getTeam, updateTeam } from 'src/requests/team';
import {
  $GlobalContainer,
  COLOR_RED,
  COLOR_SUCCESS,
} from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import {
  $DraftSection,
  $DraftTeamsList,
  $DraftRound,
  $DraftTeamGrid,
  $DraftPlayerGrid,
} from './draft.style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Loader from 'Components/loader';

const Draft = () => {
  const { currentUser } = useAppContext();
  const router = useRouter();
  const [teamsList, setTeamsList] = useState(null);
  const [draftTeamId, setDraftTeamId] = useState(null);
  const [players, setPlayers] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [character, setCharacter] = useState(null);
  const [playerList, setPlayerList] = useState(null);
  const [pickOrder, setPickOrder] = useState(0);
  const [round, setRound] = useState(null);
  const [recent, setRecent] = useState(null);
  const [canDraft, setCanDraft] = useState(false);
  const [initialTime, setInititalTime] = useState(null);
  const [quota, setQuota] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [draftId, setDraftId] = useState(null);
  const [triggerNewRound, setTriggerNewRound] = useState(false);
  const [restartTimer, setRestartTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getDraftInfo = async () => {
    if (!router.query) {
      return;
    }

    const { league_id } = router.query;

    try {
      const { draft, userTeamId } = await getDraft(
        league_id,
        currentUser?.token
      );

      const teams = JSON.parse(draft.teams);
      const recentPick = JSON.parse(draft.recent_pick);

      setTeamsList(teams);
      setDraftTeamId(userTeamId);
      setRound(draft.round);
      setRecent(recentPick);
      setInititalTime(null);
      setDraftId(draft.id);
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get draft info'));
    }
  };

  const getAllPlayers = async () => {
    try {
      const { unusedPlayers } = await getUseablePlayers(
        draftTeamId,
        currentUser?.token
      );
      const teamData = await getTeam(draftTeamId, currentUser?.token);

      const { team, userPoints } = teamData;

      setPlayerList({
        captain: team.captain.id,
        brawlerA: team.brawler_a.id,
        brawlerB: team.brawler_b.id,
        bsBrawler: team.bs_brawler.id,
        bsSupport: team.bs_support.id,
        support: team.support.id,
        villain: team.villain.id,
        battlefield: team.battlefield.id,
        userPoints,
      });

      setPlayers(unusedPlayers);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all players'));
    }
  };

  const openDraftModal = (character) => {
    setCharacter(character);
    setIsModalOpen(true);
  };

  const closeDraftModal = () => {
    setIsModalOpen(false);
    setErrorMsg(null);
  };

  const startNextRound = async () => {
    const { league_id } = router.query;

    try {
      const { newRound, draftComplete } = await draftNextRound(
        league_id,
        currentUser?.token
      );

      if (draftComplete) {
        return;
      }

      setPickOrder(0);
      await getDraftInfo();
      setRestartTimer(newRound);
      setTriggerNewRound(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed start a new round'));
    }
  };

  const nextTeamPick = () => {
    if (pickOrder === teamsList.length - 1) {
      setTriggerNewRound(true);
      return { shouldRepeat: false, delay: 0 };
    }

    setCanDraft(teamsList[pickOrder + 1].user_id === currentUser.user_id);
    setPickOrder(pickOrder + 1);

    return { shouldRepeat: true, delay: 0 };
  };

  const assignCharacterList = () => {
    switch (character.rank) {
    case 'Captain':
      !playerList.brawlerA.id
        ? (playerList.captain = character)
        : setQuota(true);
      break;
    case 'Villain':
      !playerList.brawlerA.id
        ? (playerList.vilain = character)
        : setQuota(true);
      break;
    case 'Battlefield':
      !playerList.brawlerA.id
        ? (playerList.battlefield = character)
        : setQuota(true);
      break;
    case 'Brawler':
      !playerList.brawlerA.id
        ? (playerList.brawlerA = character)
        : !playerList.brawlerB.id
          ? (playerList.brawlerB = character)
          : !playerList.bsBrawler.id
            ? (playerList.bsBrawler = character)
            : setQuota(true);
      break;
    case 'Support':
      !playerList.support.id
        ? (playerList.support = character)
        : !playerList.bsSupport.id
          ? (playerList.bsSupport = character)
          : setQuota(true);
      break;
    default:
      break;
    }

    return playerList;
  };

  const draftPlayer = async () => {
    const thePlayers = assignCharacterList();
    const index = teamsList.findIndex(
      (item) => item.user_id === currentUser?.user_id
    );

    if (quota) {
      setErrorMsg(
        `You have reached the quota for ${character.rank} characters`
      );
    }

    if (index === -1) {
      setErrorMsg(
        `You can't add ${character.fullName} to a team that you don't own`
      );
    }

    try {
      await updateTeam(draftTeamId, thePlayers, currentUser?.token);

      teamsList[index].pick = character.fullName;

      await updateDraftTeams(
        draftId,
        { teams: JSON.stringify(teamsList) },
        currentUser?.token
      );

      const payload = {
        team: teamsList[index].team_name,
        pick: character.fullName,
      };

      await updateDraftRecentPick(
        draftId,
        { pick: JSON.stringify(payload) },
        currentUser?.token
      );
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to draft player'));
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!currentUser) {
      getDraftInfo();
    }
  }, [router.query, currentUser]);

  useEffect(() => {
    if (draftTeamId) {
      getAllPlayers();
    }
  }, [draftTeamId]);

  useEffect(() => {
    if (triggerNewRound) {
      startNextRound();
    }
  }, [triggerNewRound]);

  return (
    <>
      <Metadata
        title="League Draft"
        description="Fantasy League Draft. Create the ultimate team and pick your characters before your friends do."
      />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <$GlobalContainer>
            <$DraftSection>
              <$DraftRound>
                <div>Round</div>
                <div>{round}</div>
              </$DraftRound>
              <$DraftRound>
                <div>Time:</div>
                <div className="timer">
                  <CountdownCircleTimer
                    isPlaying
                    duration={60}
                    initialRemainingTime={initialTime}
                    colors={[
                      COLOR_SUCCESS,
                      COLOR_SUCCESS,
                      COLOR_RED,
                      COLOR_RED,
                    ]}
                    colorsTime={[60, 10, 10, 0]}
                    onComplete={nextTeamPick}
                    key={restartTimer}
                  >
                    {({ remainingTime }) => remainingTime}
                  </CountdownCircleTimer>
                </div>
              </$DraftRound>
              <$DraftTeamsList teams={teamsList?.length}>
                {teamsList?.map((item, index) => {
                  const currentPick = pickOrder === index;
                  const userPick = item.user_id === currentUser?.user_id;

                  return (
                    <div key={item.id} className={currentPick && 'highlight'}>
                      {item.team_name}
                      {currentPick && userPick && (
                        <div className="pick">Your Pick</div>
                      )}
                      {currentPick && !userPick && (
                        <div className="pick">Is Drafting</div>
                      )}
                    </div>
                  );
                })}
              </$DraftTeamsList>
            </$DraftSection>
            <$DraftSection className="recent">
              <div>{recent?.team} drafted:</div>
              <div>{recent?.pick}</div>
            </$DraftSection>
            <$DraftSection className="team">
              <$DraftPlayerGrid>
                {!!players && (
                  <Players
                    data={players}
                    openDraft={openDraftModal}
                    page="draft"
                  />
                )}
              </$DraftPlayerGrid>
              <$DraftTeamGrid>
                <h2>Your Team</h2>
                <div>
                  <strong>Available Points:</strong> {playerList?.userPoints}
                </div>
                <div>
                  <strong>Captain:</strong> {playerList?.captain}
                </div>
                <div>
                  <strong>Brawler:</strong> {playerList?.brawlerA}
                </div>
                <div>
                  <strong>Brawler:</strong> {playerList?.brawlerB}
                </div>
                <div>
                  <strong>Brawler - Duo:</strong> {playerList?.bsBrawler}
                </div>
                <div>
                  <strong>Support - Duo:</strong> {playerList?.bsSupport}
                </div>
                <div>
                  <strong>Support:</strong> {playerList?.support}
                </div>
                <div>
                  <strong>Villain:</strong> {playerList?.villain}
                </div>
                <div>
                  <strong>Battlefield:</strong> {playerList?.battlefield}
                </div>
              </$DraftTeamGrid>
            </$DraftSection>
          </$GlobalContainer>
          <BioReview
            modalIsOpen={isModalOpen}
            closeModal={closeDraftModal}
            characterId={character?.id}
            canDraft={canDraft}
            draftPlayer={draftPlayer}
            errorMsg={errorMsg}
            type="draft"
          />
        </>
      )}
    </>
  );
};

export default Draft;
