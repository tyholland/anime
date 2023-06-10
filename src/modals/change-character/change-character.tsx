import React, { useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import Players from 'Components/players/players';
import MainModal from '../main/main';
import Button from 'Components/button/button';
import * as Styles from '../main/main.style';
import BioCard from 'Components/bio-card/bio-card';
import { useUserContext } from 'Hooks/user';
import { addEvent } from 'Utils/amplitude';
import { ChangeCharactersProps } from 'Utils/types';

const ChangeCharacters = ({
  players,
  modalIsOpen,
  closeModal,
  setPlayerList,
  playerList,
  field,
  isBracket = false,
  leagueWeek,
}: ChangeCharactersProps) => {
  const { currentUser } = useUserContext();
  const [isCharacter, setIsCharacter] = useState<boolean>(false);
  const [character, setCharacter] = useState<Record<string, any> | null>(null);

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

  const handleShowBio = (player: Record<string, any>) => {
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
      <GlobalStyles.GlobalContainer className={`grid ${isCharacter ? 'roster' : 'leagueCharacter'}`}>
        {!isCharacter && (
          <Styles.ChangeCharacterWrapper>
            {!isBracket && (
              <div>
                <strong>Remaining Points</strong>: {playerList.userPoints}
              </div>
            )}
            <div className="downSpace">
            Click on any character you want to{' '}
              {isBracket ? 'add.' : 'change with.'}
            </div>
          </Styles.ChangeCharacterWrapper>
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
        <Styles.ChangeCharacterBio>
          {isCharacter && <BioCard characterId={character.id} /> }
          <Styles.ChangeCharacterBioBtn className={!isCharacter ? 'solo' : ''}>
            {isCharacter && (
              <Button
                btnFunction={handleAddPlayer}
                btnText="Select Player"
                btnColor="primary"
                customBtnClass="medium"
              />
            )}
            <Button
              btnFunction={handleClose}
              btnText={isCharacter ? 'Close' : 'Cancel'}
              btnColor="cancel"
              customBtnClass="medium"
            />
          </Styles.ChangeCharacterBioBtn>
        </Styles.ChangeCharacterBio>
      </GlobalStyles.GlobalContainer>
    </MainModal>
  );
};

export default ChangeCharacters;
