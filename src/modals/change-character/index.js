import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import Players from 'Components/players';
import MainModal from '../main';
import Button from 'Components/button';

const ChangeCharacters = ({
  players,
  modalIsOpen,
  closeModal,
  setPlayerList,
  playerList,
  field,
}) => {
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

  const unusedPlayers = players?.filter((player) => {
    if (Object.values(playerList).some((list) => list.id === player.id)) {
      return;
    }

    return player;
  });

  return (
    <MainModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <$GlobalContainer className="grid leagueCharacter">
        <div>Remaining Points: {playerList.userPoints}</div>
        <div>Click on any character you want to change with</div>
        <Players
          data={unusedPlayers}
          changeRoster={true}
          setPlayerList={setPlayerList}
          playerList={playerList}
          field={field}
        />
        <Button
          btnFunction={closeModal}
          btnText="Cancel"
          btnColor="cancel"
          customBtnClass="small"
        />
      </$GlobalContainer>
    </MainModal>
  );
};

export default ChangeCharacters;
