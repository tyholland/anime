import React, { useEffect, useState } from 'react';
import {
  $GlobalContainer,
  $GlobalTitle,
  $GlobalSubTitle,
} from 'Styles/global.style.js';
import Button from 'Components/button';
import {
  $TeamEditWrapper,
  $TeamEditBtn,
  $TeamEditGrid,
  $TeamEditSection,
} from './teamEdit.style';
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

const TeamEdit = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [players, setPlayers] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerRank, setPlayerRank] = useState(null);
  const [field, setField] = useState(null);
  const [canChange, setCanChange] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [playerList, setPlayerList] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);

  const handleTeamData = async () => {
    const { team_id } = router.query;

    try {
      const { unusedPlayers, allPlayers } = await getUseablePlayers(
        team_id,
        currentUser?.token
      );
      const teamData = await getTeam(team_id, currentUser?.token);

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
      setAllPlayers(allPlayers);
      setTeamId(team_id);
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
  };

  const openModal = (rank) => {
    let specificPlayers = players.filter((item) => item.category === rank);

    if (rank === 'All') {
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
    ];
    const characterIds = characterArr.filter((item) => !!item);

    const characterDetails = allPlayers.filter((item) => {
      return characterIds.includes(item.id);
    });

    characterDetails.forEach((item) => {
      totalPoints += item.power_level;
    });

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
      await updateTeam(teamId, thePlayers, currentUser?.token);
      const { unusedPlayers } = await getUseablePlayers(
        teamId,
        currentUser?.token
      );

      thePlayers['userPoints'] = totalPoints;

      setPlayerList(thePlayers);
      setPlayers(unusedPlayers);
      setErrorMsg(null);
    } catch (err) {
      addEvent('Error', responseError(err, 'Update Team'));
      setErrorMsg(err.response.data.message);
      await handleTeamData();
    }

    setIsModalOpen(false);
    setCanChange(true);
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
          <$GlobalContainer>
            <$GlobalTitle>Edit Team</$GlobalTitle>
            {!playerList && <Loader />}
            {playerList && (
              <>
                <$GlobalSubTitle>
                  Remaining Points: {playerList.userPoints}
                </$GlobalSubTitle>
                {!!errorMsg && <ErrorMsg msg={errorMsg} />}
                <$TeamEditWrapper>
                  <$TeamEditGrid className="desktop">
                    <$TeamEditSection>Captain</$TeamEditSection>
                    <$TeamEditSection>Brawler</$TeamEditSection>
                    <$TeamEditSection>Brawler</$TeamEditSection>
                    <$TeamEditSection>Duo - Brawler</$TeamEditSection>
                    <$TeamEditSection>Duo - Support</$TeamEditSection>
                    <$TeamEditSection>Support</$TeamEditSection>
                    <$TeamEditSection>Villain</$TeamEditSection>
                    <$TeamEditSection>Battlefield</$TeamEditSection>
                  </$TeamEditGrid>
                  <$TeamEditGrid className="mobile">
                    <$TeamEditSection>C</$TeamEditSection>
                    <$TeamEditSection>B</$TeamEditSection>
                    <$TeamEditSection>B</$TeamEditSection>
                    <$TeamEditSection>Duo - B</$TeamEditSection>
                    <$TeamEditSection>Duo - S</$TeamEditSection>
                    <$TeamEditSection>S</$TeamEditSection>
                    <$TeamEditSection>V</$TeamEditSection>
                    <$TeamEditSection>BF</$TeamEditSection>
                  </$TeamEditGrid>
                  <$TeamEditGrid>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.captain.name}
                        redirect={`/bio?character=${playerList.captain.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.brawlerA.name}
                        redirect={`/bio?character=${playerList.brawlerA.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.brawlerB.name}
                        redirect={`/bio?character=${playerList.brawlerB.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.bsBrawler.name}
                        redirect={`/bio?character=${playerList.bsBrawler.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.bsSupport.name}
                        redirect={`/bio?character=${playerList.bsSupport.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.support.name}
                        redirect={`/bio?character=${playerList.support.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.villain.name}
                        redirect={`/bio?character=${playerList.villain.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                    <$TeamEditSection>
                      <Button
                        btnText={playerList.battlefield.name}
                        redirect={`/bio?character=${playerList.battlefield.id}`}
                        customBtnClass="text edit"
                      />
                    </$TeamEditSection>
                  </$TeamEditGrid>
                  <$TeamEditGrid>
                    <$TeamEditBtn>
                      {handleBtn('Captain', 'captain')}
                    </$TeamEditBtn>
                    <$TeamEditBtn>
                      {handleBtn('Brawler', 'brawlerA')}
                    </$TeamEditBtn>
                    <$TeamEditBtn>
                      {handleBtn('Brawler', 'brawlerB')}
                    </$TeamEditBtn>
                    <$TeamEditBtn>
                      {handleBtn('Brawler', 'bsBrawler')}
                    </$TeamEditBtn>
                    <$TeamEditBtn>
                      {handleBtn('Support', 'bsSupport')}
                    </$TeamEditBtn>
                    <$TeamEditBtn>
                      {handleBtn('Support', 'support')}
                    </$TeamEditBtn>
                    <$TeamEditBtn>
                      {handleBtn('Villain', 'villain')}
                    </$TeamEditBtn>
                    <$TeamEditBtn>
                      {handleBtn('Battlefield', 'battlefield')}
                    </$TeamEditBtn>
                  </$TeamEditGrid>
                </$TeamEditWrapper>
                <$TeamEditWrapper className="return">
                  <Button
                    btnText="Return to Team"
                    btnColor="primary"
                    customBtnClass="medium"
                    btnFunction={() => router.back()}
                  />
                </$TeamEditWrapper>
                <ChangeCharacters
                  players={playerRank}
                  modalIsOpen={isModalOpen}
                  closeModal={closeModal}
                  setPlayerList={updatePlayers}
                  playerList={playerList}
                  field={field}
                />
              </>
            )}
            <ReadMore />
          </$GlobalContainer>
        </>
      )}
    </>
  );
};

export default TeamEdit;
