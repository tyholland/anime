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
import BackLink from 'Components/back-link';
import ChangeCharacters from 'src/modals/change-character';
import { updateTeam } from 'src/requests/team';
import Metadata from 'Components/metadata';
import { addEvent } from 'Utils/amplitude';
import { getCookie, responseError } from 'Utils/index';
import ErrorMsg from 'Components/error-msg';

const TeamEdit = ({ players, teamData, teamId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerRank, setPlayerRank] = useState(null);
  const [field, setField] = useState(null);
  const [canChange, setCanChange] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { team, userPoints, teamName } = teamData;
  const [playerList, setPlayerList] = useState({
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

    const characterDetails = players.filter((item) => {
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
      await updateTeam(teamId, thePlayers, getCookie('token'));

      thePlayers['userPoints'] = totalPoints;

      setPlayerList(thePlayers);
      setErrorMsg(null);
    } catch (err) {
      addEvent('Error', responseError(err, 'Update Team'));
      setErrorMsg(err.response.data.message);
      setPlayerList(emptyPlayer(field));
    }

    setIsModalOpen(false);
    setCanChange(true);
  };

  useEffect(() => {
    if (canChange) {
      setPlayerList(playerList);
      setCanChange(false);
    }
  }, [canChange]);

  return (
    <>
      <Metadata
        title="Edit Team"
        description={`Edit ${teamName}'s roster. Add new players or change current players.`}
      />
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>Edit Team</$GlobalTitle>
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
              <div>{playerList.captain.name}</div>
            </$TeamEditSection>
            <$TeamEditSection>
              <div>{playerList.brawlerA.name}</div>
            </$TeamEditSection>
            <$TeamEditSection>
              <div>{playerList.brawlerB.name}</div>
            </$TeamEditSection>
            <$TeamEditSection>
              <div>{playerList.bsBrawler.name}</div>
            </$TeamEditSection>
            <$TeamEditSection>
              <div>{playerList.bsSupport.name}</div>
            </$TeamEditSection>
            <$TeamEditSection>
              <div>{playerList.support.name}</div>
            </$TeamEditSection>
            <$TeamEditSection>
              <div>{playerList.villain.name}</div>
            </$TeamEditSection>
            <$TeamEditSection>
              <div>{playerList.battlefield.name}</div>
            </$TeamEditSection>
          </$TeamEditGrid>
          <$TeamEditGrid>
            <$TeamEditBtn>{handleBtn('Captain', 'captain')}</$TeamEditBtn>
            <$TeamEditBtn>{handleBtn('Brawler', 'brawlerA')}</$TeamEditBtn>
            <$TeamEditBtn>{handleBtn('Brawler', 'brawlerB')}</$TeamEditBtn>
            <$TeamEditBtn>{handleBtn('Brawler', 'bsBrawler')}</$TeamEditBtn>
            <$TeamEditBtn>{handleBtn('Support', 'bsSupport')}</$TeamEditBtn>
            <$TeamEditBtn>{handleBtn('Support', 'support')}</$TeamEditBtn>
            <$TeamEditBtn>{handleBtn('Villain', 'villain')}</$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn('Battlefield', 'battlefield')}
            </$TeamEditBtn>
          </$TeamEditGrid>
        </$TeamEditWrapper>
        <ChangeCharacters
          players={playerRank}
          modalIsOpen={isModalOpen}
          closeModal={closeModal}
          setPlayerList={updatePlayers}
          playerList={playerList}
          field={field}
        />
      </$GlobalContainer>
    </>
  );
};

export default TeamEdit;
