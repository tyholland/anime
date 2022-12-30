import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
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
  return (
    <MainModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <$GlobalContainer className="grid leagueCharacter">
        <$GlobalTitle>Add Character</$GlobalTitle>
        <div>Remaining Points: 9000</div>
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
