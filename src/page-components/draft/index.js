import Metadata from 'Components/metadata';
import Players from 'Components/players';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import BioReview from 'src/modals/bio-review';
import {
  draftNextRound,
  draftPlayers,
  getDraft,
  startDraft,
} from 'src/requests/draft';
import { getUseablePlayers } from 'src/requests/player';
import { getTeam } from 'src/requests/team';
import {
  $GlobalContainer,
  COLOR_RED,
  COLOR_SUCCESS,
  $CollapsibleStyles,
  $GlobalTitle,
} from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import {
  $DraftSection,
  $DraftTeamsList,
  $DraftRound,
  $DraftTeamGrid,
  $DraftPlayerGrid,
  $DraftInactive,
  $DraftResults,
} from './draft.style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Loader from 'Components/loader';
import ReadMore from 'Components/read-more';
import Button from 'Components/button';
import { getLeague, startLeague } from 'src/requests/league';
import Collapsible from 'react-collapsible';

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
  const [errorMsg, setErrorMsg] = useState(null);
  const [draftId, setDraftId] = useState(null);
  const [restartTimer, setRestartTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isInactiveDraft, setIsInactiveDraft] = useState(false);
  const [inactiveLeagueData, setInactiveLeagueData] = useState(null);
  const [isDraftComplete, setIsDraftComplete] = useState(false);
  const [draftResults, setDraftResults] = useState(null);

  const getDraftInfo = async () => {
    const { league_id } = router.query;

    try {
      const { draft, userTeamId, remainingTime, draftComplete, resetTimer } =
        await getDraft(league_id, currentUser?.token);

      const teams = JSON.parse(draft.teams);

      if (draft.pick_order === teams.length) {
        await startNextRound();
        return;
      }

      if (remainingTime < 5) {
        await draftNullPlayer(teams, draft, userTeamId);
      }

      const timerReset = new Date();
      setRestartTimer(timerReset + currentUser?.token);
        
      !!resetTimer && await getAllPlayers();

      const recentPick = !draft.recent_pick
        ? null
        : JSON.parse(draft.recent_pick);

      setTeamsList(teams);
      setDraftTeamId(userTeamId);
      setRound(draft.round);
      setRecent(recentPick);
      setDraftId(draft.id);
      setIsLoading(false);
      setCanDraft(teams[draft.pick_order]?.user_id === currentUser?.user_id);
      setPickOrder(draft.pick_order);
      setIsDraftComplete(draftComplete);
      setInititalTime(remainingTime);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get draft info'));
      setIsInactiveDraft(true);
      setInactiveLeagueData(err.response.data);

      if (err.response.data.draftComplete) {
        const { draft, draftComplete } = err.response.data;

        setIsInactiveDraft(false);
        setDraftResults(draft);
        setIsDraftComplete(draftComplete);
      }

      setIsLoading(false);
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
        captain: team.captain,
        brawlerA: team.brawler_a,
        brawlerB: team.brawler_b,
        bsBrawler: team.bs_brawler,
        bsSupport: team.bs_support,
        support: team.support,
        villain: team.villain,
        battlefield: team.battlefield,
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
    setCharacter(null);
  };

  const startNextRound = async () => {
    const { league_id } = router.query;

    try {
      const { draftComplete } = await draftNextRound(
        league_id,
        currentUser?.token
      );

      if (draftComplete) {
        setIsDraftComplete(true);
        setInactiveLeagueData(false);
        await startLeague({ leagueId: league_id });
        return;
      }
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed start a new round'));
    }
  };

  const assignCharacterList = () => {
    let quota = false;

    switch (character?.rank) {
    case 'Captain':
      !playerList.captain.id
        ? (playerList.captain = character)
        : (quota = true);
      break;
    case 'Villain':
      !playerList.villain.id
        ? (playerList.villain = character)
        : (quota = true);
      break;
    case 'Battlefield':
      !playerList.battlefield.id
        ? (playerList.battlefield = character)
        : (quota = true);
      break;
    case 'Brawler':
      !playerList.brawlerA.id
        ? (playerList.brawlerA = character)
        : !playerList.brawlerB.id
          ? (playerList.brawlerB = character)
          : !playerList.bsBrawler.id
            ? (playerList.bsBrawler = character)
            : (quota = true);
      break;
    case 'Support':
      !playerList.support.id
        ? (playerList.support = character)
        : !playerList.bsSupport.id
          ? (playerList.bsSupport = character)
          : (quota = true);
      break;
    default:
      break;
    }

    return {
      thePlayers: playerList,
      quota,
    };
  };

  const draftPlayer = async () => {
    const { league_id } = router.query;
    const { thePlayers, quota } = assignCharacterList();
    const index = teamsList.findIndex(
      (item) => item.user_id === currentUser?.user_id
    );

    if (quota) {
      setErrorMsg(`You've reached the quota for ${character.rank}s`);
      return;
    }

    if (index === -1) {
      setErrorMsg(
        `You can't add ${character.fullName} to a team that you don't own`
      );
      return;
    }

    try {
      teamsList[index].pick = character.fullName;

      const pickUpdate = {
        team: teamsList[index].team_name,
        pick: character.fullName,
      };

      const payload = {
        thePlayers,
        teams: JSON.stringify(teamsList),
        pick: JSON.stringify(pickUpdate),
        draftId,
        pickOrder,
        leagueId: league_id,
        round
      };

      await draftPlayers(draftTeamId, payload, currentUser?.token);
      await getAllPlayers();

      addEvent('Draft Player', {
        player: character.fullName,
        round,
      });

      setRecent(pickUpdate);
      closeDraftModal();
      const timerReset = new Date();
      setPickOrder(pickOrder + 1);
      setRestartTimer(timerReset + currentUser?.user_id);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to draft player'));
      setErrorMsg(err.response.data.message);
      delete teamsList[index].pick;
    }
  };

  const draftNullPlayer = async (allTeams, draftData, userTeamId) => {
    const { league_id } = router.query;
    const { pick_order, id, round } = draftData;
    const index = allTeams.findIndex((item) => !item.pick);

    try {
      allTeams[index].pick = 'none';

      const pickUpdate = {
        team: allTeams[index].team_name,
        pick: 'none',
      };

      const payload = {
        thePlayers: null,
        teams: JSON.stringify(allTeams),
        pick: JSON.stringify(pickUpdate),
        draftId: id,
        pickOrder: pick_order,
        leagueId: league_id,
        round
      };

      await draftPlayers(userTeamId, payload, currentUser?.token);
      setRecent(pickUpdate);
      const timerReset = new Date();
      setPickOrder(pick_order + 1);
      setRestartTimer(timerReset + currentUser?.user_id);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add null player'));
    }
  };

  const startDrafting = async () => {
    const { league_id } = router.query;

    try {
      await startDraft(league_id, currentUser?.token);
      setIsInactiveDraft(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to start draft'));
    }
  };

  const getLeagueData = async () => {
    const { league_id } = router.query;

    try {
      const { leagueData } = await getLeague(league_id, currentUser?.token);

      setIsInactiveDraft(!(leagueData[0].draft_active === 1));
      let leagueTimeout;

      if (leagueData[0].draft_active === 0) {
        leagueTimeout = setTimeout(async () => {
          await getLeagueData();
        }, 1000);
      } else {
        clearTimeout(leagueTimeout);
      }
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get league data'));
    }
  };

  const handleDraftInfoLoop = async () => {
    if (Object.keys(router.query).length === 0) {
      return;
    }

    const { league_id } = router.query;

    try {
      const { leagueData } = await getLeague(league_id, currentUser?.token);
      let draftTimeout;

      if (leagueData[0].draft_complete === 0) {
        draftTimeout = setTimeout(async () => {
          await getDraftInfo();
          await handleDraftInfoLoop();
        }, 1000);
      } else {
        clearTimeout(draftTimeout);
      }
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to handle draft info loop'));
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!currentUser) {
      getDraftInfo();
    }
  }, [router.query, currentUser, isInactiveDraft]);

  useEffect(() => {
    if (draftTeamId) {
      getAllPlayers();
    }
  }, [draftTeamId]);

  useEffect(() => {
    if (
      Object.keys(router.query).length > 0 &&
      !!currentUser &&
      isInactiveDraft
    ) {
      getLeagueData();
    }
  }, [router.query, currentUser, isInactiveDraft]);

  useEffect(() => {
    if (!isInactiveDraft) {
      handleDraftInfoLoop();
    }
  }, [isInactiveDraft, draftTeamId]);

  return (
    <>
      <Metadata
        title="League Draft"
        description="Fantasy League Draft. Create the ultimate team and pick your characters before your friends do."
      />
      <$GlobalContainer
        className={isInactiveDraft ? 'bgImage inactiveDraft' : ''}
      >
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            {!isInactiveDraft && (
              <>
                {!isDraftComplete && (
                  <>
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
                            updateInterval={1}
                            colors={[
                              COLOR_SUCCESS,
                              COLOR_SUCCESS,
                              COLOR_RED,
                              COLOR_RED,
                            ]}
                            colorsTime={[60, 10, 10, 0]}
                            key={restartTimer}
                          >
                            {({ remainingTime }) => remainingTime}
                          </CountdownCircleTimer>
                        </div>
                      </$DraftRound>
                      <$DraftTeamsList teams={teamsList?.length}>
                        {teamsList?.map((item, index) => {
                          const currentPick = pickOrder === index;
                          const userPick =
                            item.user_id === currentUser?.user_id;

                          return (
                            <div
                              key={item.id}
                              className={currentPick ? 'highlight' : ''}
                            >
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
                    {!!teamsList && (
                      <$DraftSection className="current">
                        <div>Current Pick:</div>
                        <div>{teamsList[pickOrder]?.team_name}</div>
                      </$DraftSection>
                    )}
                    {recent && (
                      <$DraftSection className="recent">
                        <div>{recent.team} drafted:</div>
                        <div>{recent.pick}</div>
                      </$DraftSection>
                    )}
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
                          <strong>Available Points:</strong>{' '}
                          {playerList?.userPoints}
                        </div>
                        <div>
                          <strong>Captain:</strong> {playerList?.captain?.name}
                        </div>
                        <div>
                          <strong>Brawler:</strong> {playerList?.brawlerA?.name}
                        </div>
                        <div>
                          <strong>Brawler:</strong> {playerList?.brawlerB?.name}
                        </div>
                        <div>
                          <strong>Brawler - Duo:</strong>{' '}
                          {playerList?.bsBrawler?.name}
                        </div>
                        <div>
                          <strong>Support - Duo:</strong>{' '}
                          {playerList?.bsSupport?.name}
                        </div>
                        <div>
                          <strong>Support:</strong> {playerList?.support?.name}
                        </div>
                        <div>
                          <strong>Villain:</strong> {playerList?.villain?.name}
                        </div>
                        <div>
                          <strong>Battlefield:</strong>{' '}
                          {playerList?.battlefield?.name}
                        </div>
                      </$DraftTeamGrid>
                    </$DraftSection>
                  </>
                )}
                {isDraftComplete && (
                  <>
                    <$CollapsibleStyles />
                    <$GlobalTitle>Draft Results</$GlobalTitle>
                    {draftResults?.map((item, index) => {
                      const count = index + 1;
                      const teams = JSON.parse(item.teams);

                      return (
                        <Collapsible
                          trigger={`Round ${count}`}
                          triggerTagName="div"
                          key={index}
                        >
                          {teams.map((team) => {
                            return (
                              <$DraftResults key={team.pick}>
                                {team.team_name}: {team.pick}
                              </$DraftResults>
                            );
                          })}
                        </Collapsible>
                      );
                    })}
                  </>
                )}
              </>
            )}
            {isInactiveDraft && (
              <$DraftInactive>
                {inactiveLeagueData.creator !== currentUser.user_id && (
                  <>
                    The Draft for {inactiveLeagueData.leagueName} is currently
                    inactive. Please contact your league owner to activate this
                    draft.
                  </>
                )}
                {inactiveLeagueData.creator === currentUser.user_id && (
                  <>
                    Your Draft for {inactiveLeagueData.leagueName} is currently
                    inactive. Make sure to contact your league members and
                    schedule a good time that works for everyone before starting
                    your draft.
                    <Button
                      btnColor="primary"
                      btnText="Start Draft"
                      btnFunction={startDrafting}
                      customBtnClass="medium"
                    />
                  </>
                )}
                <ReadMore />
              </$DraftInactive>
            )}
          </>
        )}
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
  );
};

export default Draft;
