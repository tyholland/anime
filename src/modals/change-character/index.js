import React, { useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import Players from 'Components/players';
import MainModal from '../main';
import Button from 'Components/button';
import { $ChangeCharacterWrapper } from '../main/main.style';
import BioCard from 'Components/bio-card';
import { useAppContext } from 'src/hooks/context';
import { addEvent } from 'Utils/amplitude';

const ChangeCharacters = ({
  players,
  modalIsOpen,
  closeModal,
  setPlayerList,
  playerList,
  field,
  isBracket = false,
  leagueWeek,
}) => {
  const { currentUser } = useAppContext();
  const [isCharacter, setIsCharacter] = useState(false);
  const [character, setCharacter] = useState(null);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 570,
      width: 800,
      borderRadius: 15,
    },
  };

  const handleShowBio = (player) => {
    setCharacter(player);
    setIsCharacter(true);
  };

  const handleAddPlayer = () => {
    playerList[field] = character;

    addEvent('Roster Update', {
      player: character.fullName,
      userId: currentUser?.user_id
    });

    setPlayerList(playerList);
    setIsCharacter(false);
  };

  const handleClose = () => {
    isCharacter ? setIsCharacter(false) : closeModal();
  };

  return (
    <MainModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <$GlobalContainer className={`grid ${isCharacter ? 'roster' : 'leagueCharacter'}`}>
        {!isCharacter && (
          <$ChangeCharacterWrapper>
            {!isBracket && (
              <div>
                <strong>Remaining Points</strong>: {playerList.userPoints}
              </div>
            )}
            <div className="downSpace">
            Click on any character you want to{' '}
              {isBracket ? 'add.' : 'change with.'}
            </div>
          </$ChangeCharacterWrapper>
        )}
        {!isCharacter && (
          <Players
            data={players}
            changeRoster={isBracket}
            setPlayerList={setPlayerList}
            playerList={playerList}
            field={field}
            leagueWeek={leagueWeek}
            openDraft={handleShowBio}
            page={isBracket ? null : 'roster'}
          />
        )}
        {isCharacter && (
          <>
            <BioCard characterId={character.id} />
            <Button
              btnFunction={handleAddPlayer}
              btnText="Select Player"
              btnColor="primary"
              customBtnClass="medium"
            />
          </>
        )}
        <Button
          btnFunction={handleClose}
          btnText={isCharacter ? 'Close' : 'Cancel'}
          btnColor="cancel"
          customBtnClass="medium"
        />
      </$GlobalContainer>
    </MainModal>
  );
};

export default ChangeCharacters;
