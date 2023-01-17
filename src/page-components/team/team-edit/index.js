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
  $TeamEditError,
} from './teamEdit.style';
import BackLink from 'Components/back-link';
import ChangeCharacters from 'src/modals/change-character';
import { updateTeam } from 'src/requests/team';
import Metadata from 'Components/metadata';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error';
import { useAppContext } from 'src/hooks/context';

const TeamEdit = ({ players, teamData, teamId }) => {
  const { currentUser } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerRank, setPlayerRank] = useState(null);
  const [field, setField] = useState(null);
  const [canChange, setCanChange] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
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
          }}
        />
        <Button
          btnText="Remove"
          btnColor="cancel"
          customBtnClass="small"
          btnFunction={() => updatePlayers(emptyPlayer(fieldName))}
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
      await updateTeam(teamId, thePlayers);

      thePlayers['userPoints'] = totalPoints;

      setPlayerList(thePlayers);
      setIsModalOpen(false);
      setCanChange(true);
      setErrorMsg(null);
    } catch (err) {
      addEvent('Error', responseError(err, 'Update Team'));
      setErrorMsg(err.response.data.message);
      setPlayerList(emptyPlayer(field));
      setIsModalOpen(false);
      setCanChange(true);
    }
  };

  useEffect(() => {
    if (canChange) {
      setPlayerList(playerList);
      setCanChange(false);
    }
  }, [canChange]);

  useEffect(() => {
    setErrorPage(!currentUser);
  }, [currentUser]);

  if (errorPage) {
    return <Error />;
  }

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
        {!!errorMsg && <$TeamEditError>{errorMsg}</$TeamEditError>}
        <$TeamEditWrapper>
          <div className="position">
            <div>Captain</div>
            <div>Brawler</div>
            <div>Brawler</div>
            <div>Duo - Brawler</div>
            <div>Duo - Support</div>
            <div>Support</div>
            <div>Villain</div>
            <div>Battlefield</div>
          </div>
          <div>
            <div>{playerList.captain.name}</div>
            <div>{playerList.brawlerA.name}</div>
            <div>{playerList.brawlerB.name}</div>
            <div>{playerList.bsBrawler.name}</div>
            <div>{playerList.bsSupport.name}</div>
            <div>{playerList.support.name}</div>
            <div>{playerList.villain.name}</div>
            <div>{playerList.battlefield.name}</div>
          </div>
          <div>
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
          </div>
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
