import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main/main';
import Button from 'Components/button/button';
import * as Styles from './swapPlayer.style';
import { addEvent } from 'Utils/amplitude';
import { useUserContext } from 'Hooks/user';
import { SwapPlayerProps } from 'Utils/types';

const SwapPlayer = ({
  modalIsOpen,
  closeModal,
  setPlayerList,
  playerList,
  field,
}: SwapPlayerProps) => {
  const { currentUser } = useUserContext();
  const [swappablePlayers, setSwappablePlayers] = useState<Record<string, any> | null>(null);
  const [fieldName, setFieldName] = useState<string>(field);
  const [players, setPlayers] = useState<Record<string, any>>(playerList);

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

  const handleAddPlayer = (swapPlayer: Record<string, any>) => {
    const origPlayer = players[fieldName];

    players[fieldName] = swapPlayer;
    players[swapPlayer.field] = origPlayer;
    players[swapPlayer.field].rank = swapPlayer.rank;

    addEvent('Roster Swap', {
      origPlayer: origPlayer.name,
      swappedPlayer: swapPlayer.name,
      userId: currentUser?.user_id
    });

    setPlayerList(players);
    closeModal();
  };

  const handleSwappablePlayers = (fieldName: string, players: Record<string, any>) => {
    if (!players || !fieldName) {
      return;
    }

    const playerType = players[fieldName].type;
    const playerId = players[fieldName].id;
    const swappable = [];

    if (players.captain.type === playerType && players.captain.id !== playerId) {
      swappable.push({
        ...players.captain,
        field: 'captain',
      });
    }

    if (players.brawlerA.type === playerType && players.brawlerA.id !== playerId) {
      swappable.push({
        ...players.brawlerA,
        field: 'brawlerA',
      });
    }

    if (players.brawlerB.type === playerType && players.brawlerB.id !== playerId) {
      swappable.push({
        ...players.brawlerB,
        field: 'brawlerB',
      });
    }

    if (players.bsBrawler.type === playerType && players.bsBrawler.id !== playerId) {
      swappable.push({
        ...players.bsBrawler,
        field: 'bsBrawler',
      });
    }

    if (players.bsSupport.type === playerType && players.bsSupport.id !== playerId) {
      swappable.push({
        ...players.bsSupport,
        field: 'bsSupport',
      });
    }

    if (players.support.type === playerType && players.support.id !== playerId) {
      swappable.push({
        ...players.support,
        field: 'support',
      });
    }

    if (players.villain.type === playerType && players.villain.id !== playerId) {
      swappable.push({
        ...players.villain,
        field: 'villain',
      });
    }

    if (players.battlefield.type === playerType && players.battlefield.id !== playerId) {
      swappable.push({
        ...players.battlefield,
        field: 'battlefield',
      });
    }

    if (players.bench0.type === playerType && players.bench0.id !== playerId) {
      swappable.push({
        ...players.bench0,
        field: 'bench0',
      });
    }

    if (players.bench1.type === playerType && players.bench1.id !== playerId) {
      swappable.push({
        ...players.bench1,
        field: 'bench1',
      });
    }

    if (players.bench2.type === playerType && players.bench2.id !== playerId) {
      swappable.push({
        ...players.bench2,
        field: 'bench2',
      });
    }

    if (players.bench3.type === playerType && players.bench3.id !== playerId) {
      swappable.push({
        ...players.bench3,
        field: 'bench3',
      });
    }

    setSwappablePlayers(swappable);
  };

  useEffect(() => {
    handleSwappablePlayers(field, playerList);
    setFieldName(field);
    setPlayers(playerList);
  }, [field, playerList[field]?.id]);

  return (
    <MainModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <GlobalStyles.GlobalContainer className={'grid invalid'}>
        <Styles.SwapPlayerWrapper>
          <GlobalStyles.GlobalTitle>Swap Players</GlobalStyles.GlobalTitle>
          <Styles.SwapPlayerSection className="orig"><strong>Character:</strong> {playerList[field]?.name}</Styles.SwapPlayerSection>
          <GlobalStyles.GlobalSubTitle>Swap with:</GlobalStyles.GlobalSubTitle>
          <Styles.SwapPlayerSection>
            {swappablePlayers?.length > 0 && swappablePlayers.map(player => {
              return (
                <Styles.SwapPlayerCharacter key={player.name}>
                  <Button
                    btnFunction={() => handleAddPlayer(player)}
                    btnText="Switch"
                    btnColor="primary"
                    customBtnClass="small"
                  />
                  <div>{player.name}</div>
                </Styles.SwapPlayerCharacter>
              );
            })}
            {swappablePlayers?.length === 0 && (
              <Styles.SwapPlayerCharacter className="noSwap">
                You don't have any characters to swap with.
              </Styles.SwapPlayerCharacter>
            )}
          </Styles.SwapPlayerSection>
          <Styles.SwapPlayerSection>
            <Button
              btnFunction={closeModal}
              btnText="Cancel"
              btnColor="cancel"
              customBtnClass="medium"
            />
          </Styles.SwapPlayerSection>
        </Styles.SwapPlayerWrapper>
      </GlobalStyles.GlobalContainer>
    </MainModal>
  );
};

export default SwapPlayer;
