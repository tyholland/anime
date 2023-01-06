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
    },
  };

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
          data={players}
          changeRoster={true}
          setPlayerList={setPlayerList}
          playerList={playerList}
          field={field}
        />
        <Button
          btnFunction={closeModal}
          btnText="Cancel"
          btnColor="red"
          btnTextColor="white"
          customBtnClass="small"
        />
      </$GlobalContainer>
    </MainModal>
  );
};

export default ChangeCharacters;
