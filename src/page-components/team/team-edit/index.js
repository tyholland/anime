import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style.js';
import Button from 'Components/button';
import * as Styles from './teamEdit.style';
import ChangeCharacters from 'src/modals/change-character';
import { getTeam, updateTeam } from 'src/requests/team';
import Metadata from 'Components/metadata';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import ErrorMsg from 'Components/error-msg';
import { useRouter } from 'next/router';
import { getUseablePlayers } from 'src/requests/player';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';
import { useAppContext } from 'src/hooks/context';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';
import MakeTeam from 'Components/gameplay-card/make-team';
import BioReview from 'src/modals/bio-review';
import SwapPlayer from 'src/modals/swap-player';

const TeamEdit = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [players, setPlayers] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSwapOpen, setIsSwapOpen] = useState(false);
  const [playerRank, setPlayerRank] = useState(null);
  const [field, setField] = useState(null);
  const [canChange, setCanChange] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [playerList, setPlayerList] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);
  const [leagueWeek, setLeagueWeek] = useState(null);
  const [bioModalIsOpen, setBioModalIsOpen] = useState(false);
  const [characterId, setCharacterId] = useState(null);
  const [benchSize, setBenchSize] = useState(0);

  const handleTeamData = async () => {
    const { team_id } = router.query;

    try {
      const { unusedPlayers, allPlayers } = await getUseablePlayers(
        team_id,
        currentUser?.token
      );
      const teamData = await getTeam(team_id, currentUser?.token);

      const { team, userPoints, info } = teamData;

      setPlayerList({
        captain: team.captain,
        brawlerA: team.brawler_a,
        brawlerB: team.brawler_b,
        bsBrawler: team.bs_brawler,
        bsSupport: team.bs_support,
        support: team.support,
        villain: team.villain,
        battlefield: team.battlefield,
        bench0: team.bench0,
        bench1: team.bench1,
        bench2: team.bench2,
        bench3: team.bench3,
        userPoints,
      });
      setPlayers(unusedPlayers);
      setAllPlayers(allPlayers);
      setTeamId(team_id);
      setLeagueWeek(team.week);
      setBenchSize(info.benchSize);
    } catch (err) {
      addEvent(
        'Error',
        responseError(err, 'Failed to get team data and character data')
      );
      setErrorPage(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBioModalIsOpen(false);
    setIsSwapOpen(false);
  };

  const openModal = (rank) => {
    let specificPlayers = players.filter((item) => item.category === rank);

    if (rank === 'All' || rank === 'Bench') {
      specificPlayers = players;
    }

    setPlayerRank(specificPlayers);
    setIsModalOpen(true);
  };

  const handleBtn = (rank, fieldName) => {
    if (!playerList[fieldName].id) {
      return (
        <Button
          btnText="Add"
          btnColor="primary"
          customBtnClass="small"
          btnFunction={() => {
            setField(fieldName);
            openModal(rank);
            addEvent('Team Roster', {
              action: 'add',
              userId: currentUser?.user_id,
            });
          }}
        />
      );
    }

    return (
      <>
        <Button
          btnText="Change"
          btnColor="primary"
          customBtnClass="small"
          btnFunction={() => {
            setField(fieldName);
            openModal(rank);
            addEvent('Team Roster', {
              action: 'change',
              userId: currentUser?.user_id,
            });
          }}
        />
        <Button
          btnText="Remove"
          btnColor="cancel"
          customBtnClass="small"
          btnFunction={() => {
            updatePlayers(emptyPlayer(fieldName));
            addEvent('Team Roster', {
              action: 'remove',
              userId: currentUser?.user_id,
            });
          }}
        />
        <Button
          btnText="Swap"
          btnColor="tertiary"
          customBtnClass="small"
          btnFunction={() => {
            setField(fieldName);
            setIsSwapOpen(true);
            addEvent('Team Roster', {
              action: 'swap',
              userId: currentUser?.user_id,
            });
          }}
        />
      </>
    );
  };

  const getUserPoints = (updatedPlayers) => {
    let totalPoints = 0;
    const defaultPoints = 9000;
    const characterArr = [
      updatedPlayers.captain.id,
      updatedPlayers.brawlerA.id,
      updatedPlayers.brawlerB.id,
      updatedPlayers.bsBrawler.id,
      updatedPlayers.bsSupport.id,
      updatedPlayers.support.id,
      updatedPlayers.villain.id,
      updatedPlayers.battlefield.id,
      updatedPlayers.bench0.id,
      updatedPlayers.bench1.id,
      updatedPlayers.bench2.id,
      updatedPlayers.bench3.id,
    ];
    const characterIds = characterArr.filter((item) => !!item);

    const characterDetails = allPlayers.filter((item) => {
      return characterIds.includes(item.id);
    });

    characterDetails.forEach((item) => {
      totalPoints += item.cost;
    });

    if (benchSize > 0) {
      const additionalBenchPoints = benchSize * 400;
      const totalTeamPoints = defaultPoints + additionalBenchPoints;

      return totalTeamPoints - totalPoints;
    }

    return defaultPoints - totalPoints;
  };

  const emptyPlayer = (attr) => {
    playerList[attr] = {
      id: null,
      name: null,
      affinity: null,
      points: null,
    };

    return playerList;
  };

  const updatePlayers = async (thePlayers) => {
    const totalPoints = getUserPoints(thePlayers);

    try {
      const { players } = await updateTeam(teamId, thePlayers, currentUser?.token);
      const { unusedPlayers } = await getUseablePlayers(
        teamId,
        currentUser?.token
      );

      thePlayers['userPoints'] = totalPoints;
      const updatedPlayer = players.filter(item => {
        return item.name === thePlayers[field].name;
      })[0];

      if (updatedPlayer) {
        thePlayers[field] = updatedPlayer;
      }

      setPlayerList(thePlayers);
      setPlayers(unusedPlayers);
      setErrorMsg(null);
    } catch (err) {
      addEvent('Error', responseError(err, 'Update Team'));
      setErrorMsg(err.response.data.message);
      thePlayers[field] = {
        id: null,
        name: null,
        affinity: null,
        points: null,
      };
      await handleTeamData();
    }

    setIsModalOpen(false);
    setCanChange(true);
  };

  const getProfile = (id) => {
    setBioModalIsOpen(true);
    setCharacterId(id);
  };

  const handleCharacterLine = (rankDesktop, rankMobile, player, type) => {
    const rank = rankDesktop.replace('Duo - ', '');

    return (
      <Styles.TeamEditGrid key={`${player.id}-${type}`}>
        <Styles.TeamEditSection className="desktop">{rankDesktop}</Styles.TeamEditSection>
        <Styles.TeamEditSection className="mobile">{rankMobile}</Styles.TeamEditSection>
        <Styles.TeamEditSection className="character">
          <Button
            btnText={player.name}
            btnFunction={() => getProfile(player.id)}
            customBtnClass="text edit"
          />
          <div className="affinities">
            {!!player.id && player?.affinity?.map((item) => {
              return (
                <GlobalStyles.GlobalCircle
                  key={item.type}
                  className={`team ${item.type}`}
                  title={item.type === 'noAffinity' ? 'no affinity' : item.type}
                ></GlobalStyles.GlobalCircle>
              );
            })}
          </div>
          {!!player.cost && <div className="points">Points: {player.cost}</div>}
        </Styles.TeamEditSection>
        <Styles.TeamEditBtn>{handleBtn(rank, type)}</Styles.TeamEditBtn>
      </Styles.TeamEditGrid>
    );
  };

  const handleBench = (benchSize) => {
    switch (benchSize) {
    case 0:
      return [];
    case 2:
      return [playerList.bench0, playerList.bench1];
    case 3:
      return [playerList.bench0, playerList.bench1, playerList.bench2];
    case 4:
      return [playerList.bench0, playerList.bench1, playerList.bench2, playerList.bench3];
    default:
      return [];
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (canChange) {
      setPlayerList(playerList);
      setCanChange(false);
    }
  }, [canChange]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!account) {
      handleTeamData();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Edit Team"
        description="Edit team's roster. Add new players or change current players."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <GlobalStyles.GlobalContainer>
            <GlobalStyles.GlobalTitle>Edit Team</GlobalStyles.GlobalTitle>
            {!playerList && <Loader />}
            {playerList && (
              <>
                <GlobalStyles.GlobalSubTitle>
                  Remaining Points: {playerList.userPoints}
                </GlobalStyles.GlobalSubTitle>
                {!!errorMsg && <ErrorMsg msg={errorMsg} />}
                <Styles.TeamEditWrapper>
                  {handleCharacterLine('Captain', 'C', playerList.captain, 'captain')}
                  {handleCharacterLine('Brawler', 'B', playerList.brawlerA, 'brawlerA')}
                  {handleCharacterLine('Brawler', 'B', playerList.brawlerB, 'brawlerB')}
                  {handleCharacterLine('Duo - Brawler', 'Duo - B', playerList.bsBrawler, 'bsBrawler')}
                  {handleCharacterLine('Duo - Support', 'Duo - S', playerList.bsSupport, 'bsSupport')}
                  {handleCharacterLine('Support', 'S', playerList.support, 'support')}
                  {handleCharacterLine('Villain', 'V', playerList.villain, 'villain')}
                  {handleCharacterLine('Battlefield', 'BF', playerList.battlefield, 'battlefield')}
                  {handleBench(benchSize).map((bench, index) => {
                    return handleCharacterLine('Bench', 'BN', bench, `bench${index}`);
                  })}
                </Styles.TeamEditWrapper>
                <Styles.TeamEditWrapper className="return">
                  <Button
                    btnText="Return to Team"
                    btnColor="primary"
                    customBtnClass="medium"
                    btnFunction={() => router.back()}
                  />
                </Styles.TeamEditWrapper>
                <ChangeCharacters
                  players={playerRank}
                  modalIsOpen={isModalOpen}
                  closeModal={closeModal}
                  setPlayerList={updatePlayers}
                  playerList={playerList}
                  field={field}
                  leagueWeek={leagueWeek}
                />
                <SwapPlayer
                  modalIsOpen={isSwapOpen}
                  closeModal={closeModal}
                  setPlayerList={updatePlayers}
                  playerList={playerList}
                  field={field}
                />
                <BioReview
                  modalIsOpen={bioModalIsOpen}
                  closeModal={closeModal}
                  characterId={characterId}
                />
              </>
            )}
          </GlobalStyles.GlobalContainer>
          <ReadMore>
            <MakeTeam />
          </ReadMore>
        </>
      )}
    </>
  );
};

export default TeamEdit;
