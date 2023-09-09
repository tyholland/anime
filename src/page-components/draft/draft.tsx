import Metadata from 'Components/metadata/metadata';
import Players from 'Components/players/players';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useUserContext } from 'Hooks/user';
import BioReview from 'Modals/bio-review/bio-review';
import {
  draftNextRound,
  draftPlayers,
  getDraft,
  startDraft,
} from 'Requests/draft';
import { getUseablePlayers } from 'Requests/player';
import { getTeam } from 'Requests/team';
import * as GlobalStyles from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { getDate, responseError } from 'Utils/index';
import * as Styles from './draft.style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Loader from 'Components/loader/loader';
import ReadMore from 'Components/read-more/read-more';
import Button from 'Components/button/button';
import { getLeague, startLeague } from 'Requests/league';
import Collapsible from 'react-collapsible';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const Draft = () => {
  const { currentUser } = useUserContext();
  const router = useRouter();
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [teamsList, setTeamsList] = useState<Record<string, any> | null>(null);
  const [draftTeamId, setDraftTeamId] = useState<string | null>(null);
  const [players, setPlayers] = useState<Record<string, any> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);
  const [character, setCharacter] = useState<Record<string, any> | null>(null);
  const [teamCharacter, setTeamCharacter] = useState<Record<
    string,
    any
  > | null>(null);
  const [playerList, setPlayerList] = useState<Record<string, any> | null>(
    null
  );
  const [pickOrder, setPickOrder] = useState<number>(0);
  const [round, setRound] = useState<number | null>(null);
  const [recent, setRecent] = useState<Record<string, any> | null>(null);
  const [canDraft, setCanDraft] = useState<boolean>(false);
  const [initialTime, setInititalTime] = useState(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [draftId, setDraftId] = useState<number | null>(null);
  const [restartTimer, setRestartTimer] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInactiveDraft, setIsInactiveDraft] = useState<boolean>(false);
  const [inactiveLeagueData, setInactiveLeagueData] = useState<Record<
    string,
    any
  > | null>(null);
  const [isDraftComplete, setIsDraftComplete] = useState<boolean>(false);
  const [draftResults, setDraftResults] = useState<Record<string, any> | null>(
    null
  );
  const [draftSchedule, setDraftSchedule] = useState<Record<
    string,
    any
  > | null>(null);
  const [notUsedPlayers, setNotUsedPlayers] = useState<Record<string, any>>([]);

  const getDraftInfo = async () => {
    const { league_id } = router.query;

    try {
      const {
        draft,
        userTeamId,
        remainingTime,
        draftComplete,
        resetTimer,
        draftSchedule,
      } = await getDraft(league_id as string, currentUser?.token);

      const teams = JSON.parse(draft.teams);
      const draftTime = JSON.parse(draftSchedule);

      if (draft.pick_order === teams.length) {
        await startNextRound();
        return;
      }

      if (remainingTime < 5) {
        await draftNullPlayer(teams, draft, userTeamId);
      }

      const timerReset = new Date();
      setRestartTimer(timerReset + currentUser?.token);

      !!resetTimer && (await getAvailablePlayers());

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
      setDraftSchedule(draftTime);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get draft info'));
      setIsInactiveDraft(true);
      setInactiveLeagueData(err.response.data);

      if (err.response.data.draftComplete) {
        const { draft, draftComplete, draftSchedule } = err.response.data;
        const draftTime = JSON.parse(draftSchedule);

        setIsInactiveDraft(false);
        setDraftResults(draft);
        setIsDraftComplete(draftComplete);
        setDraftSchedule(draftTime);
      }

      setIsLoading(false);
    }
  };

  const getAllPlayers = async () => {
    try {
      const { allPlayers } = await getUseablePlayers(
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

      setPlayers(allPlayers);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all players'));
    }
  };

  const getAvailablePlayers = async () => {
    try {
      const { unusedPlayers } = await getUseablePlayers(
        draftTeamId,
        currentUser?.token
      );

      setNotUsedPlayers(unusedPlayers);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get available players'));
    }
  };

  const openDraftModal = (character: Record<string, any>) => {
    setCharacter(character);
    setIsModalOpen(true);
  };

  const openTeamModal = (character: Record<string, any>) => {
    setTeamCharacter(character);
    setIsTeamModalOpen(true);
  };

  const closeDraftModal = () => {
    setIsModalOpen(false);
    setIsTeamModalOpen(false);
    setErrorMsg(null);
    setCharacter(null);
  };

  const startNextRound = async () => {
    const { league_id } = router.query;

    try {
      const { draftComplete } = await draftNextRound(
        league_id as string,
        currentUser?.token
      );

      if (draftComplete) {
        setIsDraftComplete(true);
        setInactiveLeagueData(null);
        await startLeague();
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
      (item: Record<string, any>) => item.user_id === currentUser?.user_id
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
        round,
      };

      await draftPlayers(draftTeamId, payload, currentUser?.token);
      await getAvailablePlayers();

      addEvent('Draft Player', {
        player: character.fullName,
        round,
        userId: currentUser?.user_id,
      });

      setRecent(pickUpdate);
      closeDraftModal();
      const timerReset = new Date();
      setPickOrder(pickOrder + 1);
      setRestartTimer(timerReset + currentUser?.user_id);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to draft player'));
      setErrorMsg(err.response.data.message);

      for (const key in thePlayers) {
        if (thePlayers[key].fullName === character.fullName) {
          thePlayers[key].affinity = null;
          thePlayers[key].boost = {
            week: null,
            support: null,
            battlefield: null,
            voting: null,
          };
          thePlayers[key].damage = {
            week: null,
            villain: null,
            battlefield: null,
            voting: null,
          };
          thePlayers[key].id = null;
          thePlayers[key].matchPoints = 0;
          thePlayers[key].name = null;
          thePlayers[key].originalPower = null;
          thePlayers[key].teamPoints = null;
        }
      }

      setPlayerList(thePlayers);
    }
  };

  const draftNullPlayer = async (
    allTeams: Record<string, any>,
    draftData: Record<string, any>,
    userTeamId: string
  ) => {
    const { league_id } = router.query;
    const { pick_order, id, round } = draftData;
    const index = allTeams.findIndex((item: Record<string, any>) => !item.pick);

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
        round,
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
      await startDraft(league_id as string, currentUser?.token);
      setIsInactiveDraft(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to start draft'));
    }
  };

  const handleDraftDay = (schedule: Record<string, any>) => {
    const date = getDate();
    const draftDate = getDate(
      `${schedule.date.month} ${schedule.date.day}, ${schedule.date.year}`
    );

    return !(date.diff(draftDate) < 0);
  };

  const getLeagueData = async () => {
    const { league_id } = router.query;

    try {
      const { leagueData } = await getLeague(
        league_id as string,
        currentUser?.token
      );
      const { draft_active, draft_schedule } = leagueData[0];

      setIsInactiveDraft(!(draft_active === 1));
      let leagueTimeout;

      const draftDate = JSON.parse(draft_schedule);
      setDraftSchedule(draftDate);
      const isDraftDay = handleDraftDay(draftDate);

      if (!isDraftDay) {
        return;
      }

      if (draft_active === 0) {
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
    const isDraftDay = handleDraftDay(draftSchedule);

    if (!isDraftDay) {
      return;
    }

    if (Object.keys(router.query).length === 0) {
      return;
    }

    const { league_id } = router.query;

    try {
      const { leagueData } = await getLeague(
        league_id as string,
        currentUser?.token
      );
      let draftTimeout: any;

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
    if (!isInactiveDraft && !!draftSchedule) {
      handleDraftInfoLoop();
    }
  }, [isInactiveDraft, draftTeamId, draftSchedule]);

  return (
    <>
      <Metadata
        title="League Draft"
        description="Fantasy League Draft. Create the ultimate team and pick your characters before your friends do."
      />
      <GlobalStyles.GlobalContainer
        className={isInactiveDraft ? 'bgImage inactiveDraft' : ''}
      >
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            {!isInactiveDraft && (
              <>
                {!isDraftComplete && (
                  <>
                    <Styles.DraftSection>
                      <Styles.DraftRound>
                        <div>Round</div>
                        <div>{round}</div>
                      </Styles.DraftRound>
                      <Styles.DraftRound>
                        <div>Time:</div>
                        <div className="timer">
                          <CountdownCircleTimer
                            isPlaying
                            duration={60}
                            initialRemainingTime={initialTime}
                            updateInterval={1}
                            colors={[
                              GlobalStyles.COLOR_SUCCESS,
                              GlobalStyles.COLOR_SUCCESS,
                              GlobalStyles.COLOR_RED,
                              GlobalStyles.COLOR_RED,
                            ]}
                            colorsTime={[60, 10, 10, 0]}
                            key={restartTimer}
                          >
                            {({ remainingTime }) => remainingTime}
                          </CountdownCircleTimer>
                        </div>
                      </Styles.DraftRound>
                      <Styles.DraftTeamsList teams={teamsList?.length}>
                        {teamsList?.map(
                          (item: Record<string, any>, index: number) => {
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
                          }
                        )}
                      </Styles.DraftTeamsList>
                    </Styles.DraftSection>
                    {!!teamsList && (
                      <Styles.DraftSection className="current">
                        <div>Current Pick:</div>
                        <div>{teamsList[pickOrder]?.team_name}</div>
                      </Styles.DraftSection>
                    )}
                    {recent && (
                      <Styles.DraftSection className="recent">
                        <div>{recent.team} drafted:</div>
                        <div>{recent.pick}</div>
                      </Styles.DraftSection>
                    )}
                    <Styles.DraftSection className="team">
                      <Styles.DraftPlayerGrid>
                        {!!players && (
                          <Players
                            data={players}
                            openDraft={openDraftModal}
                            page="draft"
                          />
                        )}
                      </Styles.DraftPlayerGrid>
                      <Styles.DraftTeamGrid>
                        <h2>Your Team</h2>
                        <div>
                          <strong>Available Points:</strong>{' '}
                          {playerList?.userPoints}
                        </div>
                        <div>
                          <strong>Captain:</strong>{' '}
                          <button
                            onClick={() => openTeamModal(playerList.captain)}
                          >
                            {playerList?.captain?.name}
                          </button>
                        </div>
                        <div>
                          <strong>Brawler:</strong>{' '}
                          <button
                            onClick={() => openTeamModal(playerList?.brawlerA)}
                          >
                            {playerList?.brawlerA?.name}
                          </button>
                        </div>
                        <div>
                          <strong>Brawler:</strong>{' '}
                          <button
                            onClick={() => openTeamModal(playerList?.brawlerB)}
                          >
                            {playerList?.brawlerB?.name}
                          </button>
                        </div>
                        <div>
                          <strong>Brawler - Duo:</strong>{' '}
                          <button
                            onClick={() => openTeamModal(playerList?.bsBrawler)}
                          >
                            {playerList?.bsBrawler?.name}
                          </button>
                        </div>
                        <div>
                          <strong>Support - Duo:</strong>{' '}
                          <button
                            onClick={() => openTeamModal(playerList?.bsSupport)}
                          >
                            {playerList?.bsSupport?.name}
                          </button>
                        </div>
                        <div>
                          <strong>Support:</strong>{' '}
                          <button
                            onClick={() => openTeamModal(playerList?.support)}
                          >
                            {playerList?.support?.name}
                          </button>
                        </div>
                        <div>
                          <strong>Villain:</strong>{' '}
                          <button
                            onClick={() => openTeamModal(playerList?.villain)}
                          >
                            {playerList?.villain?.name}
                          </button>
                        </div>
                        <div>
                          <strong>Battlefield:</strong>{' '}
                          <button
                            onClick={() =>
                              openTeamModal(playerList?.battlefield)
                            }
                          >
                            {playerList?.battlefield?.name}
                          </button>
                        </div>
                      </Styles.DraftTeamGrid>
                    </Styles.DraftSection>
                  </>
                )}
                {isDraftComplete && (
                  <Styles.DraftAccordian>
                    <GlobalStyles.CollapsibleStyles />
                    <GlobalStyles.GlobalTitle>
                      Draft Results
                    </GlobalStyles.GlobalTitle>
                    <Styles.DraftResults>
                      <strong>Date of Draft:</strong>{' '}
                      {`${draftSchedule?.date.month} ${draftSchedule?.date.day}, ${draftSchedule?.date.year}`}
                    </Styles.DraftResults>
                    <Styles.DraftResults>
                      <strong>Time of Draft:</strong>{' '}
                      {`${draftSchedule?.time.hour}:${draftSchedule?.time.min}${draftSchedule?.time.meridiem} EST`}
                    </Styles.DraftResults>
                    {draftResults?.map(
                      (item: Record<string, any>, index: number) => {
                        const count = index + 1;
                        const teams = JSON.parse(item.teams);

                        const roundUp = (
                          <div className="collapseContainer">
                            <div>Round {count}</div>
                            <div className="up">&#10132;</div>
                          </div>
                        );

                        const roundDown = (
                          <div className="collapseContainer">
                            <div>Round {count}</div>
                            <div className="down">&#10132;</div>
                          </div>
                        );

                        return (
                          <Collapsible
                            trigger={roundDown}
                            triggerWhenOpen={roundUp}
                            triggerTagName="div"
                            key={index}
                            triggerElementProps={{
                              id: `round-${count}`,
                              'aria-controls': `round-${count}`,
                            }}
                            contentElementId={`round-${count}`}
                          >
                            {teams.map((team: Record<string, any>) => {
                              return (
                                <Styles.DraftResults key={team.pick}>
                                  {team.team_name}: {team.pick}
                                </Styles.DraftResults>
                              );
                            })}
                          </Collapsible>
                        );
                      }
                    )}
                  </Styles.DraftAccordian>
                )}
              </>
            )}
            {isInactiveDraft && (
              <Styles.DraftInactive>
                <Styles.DraftResults>
                  <strong>Date of Draft:</strong>{' '}
                  {`${draftSchedule?.date.month} ${draftSchedule?.date.day}, ${draftSchedule?.date.year}`}
                </Styles.DraftResults>
                <Styles.DraftResults>
                  <strong>Time of Draft:</strong>{' '}
                  {`${draftSchedule?.time.hour}:${draftSchedule?.time.min}${draftSchedule?.time.meridiem} EST`}
                </Styles.DraftResults>
                {inactiveLeagueData.creator !== currentUser.user_id && (
                  <Styles.DraftResults>
                    The Draft for {inactiveLeagueData.leagueName} hasn't started
                    yet.
                  </Styles.DraftResults>
                )}
                {inactiveLeagueData.creator === currentUser.user_id && (
                  <Styles.DraftResults>
                    Your Draft for {inactiveLeagueData.leagueName} hasn't
                    started yet. Once it is the date and time of your Draft.
                    Click the "Start Draft" button before in order to start the
                    draft for your League
                    <Button
                      btnColor="primary"
                      btnText="Start Draft"
                      btnFunction={startDrafting}
                      customBtnClass="medium"
                    />
                  </Styles.DraftResults>
                )}
                <ReadMore />
              </Styles.DraftInactive>
            )}
          </>
        )}
      </GlobalStyles.GlobalContainer>
      <BioReview
        modalIsOpen={isModalOpen}
        closeModal={closeDraftModal}
        characterId={character?.id}
        canDraft={canDraft}
        draftPlayer={draftPlayer}
        errorMsg={errorMsg}
        type="draft"
        unusedPlayers={notUsedPlayers}
      />
      <BioReview
        modalIsOpen={isTeamModalOpen}
        closeModal={closeDraftModal}
        characterId={teamCharacter?.id}
      />
    </>
  );
};

export default Draft;
