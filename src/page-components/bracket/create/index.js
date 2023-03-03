import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Button from 'Components/button';
import {
  $BracketCreateSection,
  $BracketCreatePlayer,
  $BracketCreateWrapper,
} from './create.style';
import ChangeCharacters from 'src/modals/change-character';
import Metadata from 'Components/metadata';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { getPlayers } from 'src/requests/player';
import Error from 'PageComponents/error';
import { useAppContext } from 'src/hooks/context';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';
import { createBracket } from 'src/requests/bracket';
import { useRouter } from 'next/router';

const BracketCreate = () => {
  const emptyPlayersList = {
    player1: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player2: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player3: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player4: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player5: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player6: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player7: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player8: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player9: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player10: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player11: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player12: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player13: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player14: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player15: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player16: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player17: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player18: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player19: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player20: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player21: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player22: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player23: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
    player24: {
      id: null,
      name: null,
      affinity: null,
      points: null,
    },
  };
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [players, setPlayers] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [field, setField] = useState(null);
  const [canChange, setCanChange] = useState(false);
  const [playerList, setPlayerList] = useState(emptyPlayersList);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleAllPlayers = async () => {
    try {
      const allCharacters = await getPlayers();
      const players = allCharacters.filter(
        (char) => char.category !== 'Battlefield'
      );

      setPlayers(players);
      setAllPlayers(players);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all characters'));
      setErrorPage(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleBtn = (fieldName) => {
    if (!playerList[fieldName].id) {
      return (
        <Button
          btnText="Add"
          btnColor="primary"
          customBtnClass="small"
          btnFunction={() => {
            setField(fieldName);
            openModal();
            addEvent('Bracket Player', {
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
            openModal();
            addEvent('Bracket Player', {
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
            addEvent('Bracket Player', {
              action: 'remove',
            });
          }}
        />
      </>
    );
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
    const unusedPlayers = allPlayers?.filter((player) => {
      const hasPlayer = Object.keys(thePlayers).some(
        (list) => playerList[list].id === player.id
      );

      return !hasPlayer;
    });

    setPlayerList(thePlayers);
    setPlayers(unusedPlayers);
    setIsModalOpen(false);
    setCanChange(true);
    setIsDisabled(Object.values(playerList).some((list) => !list.id));
  };

  const handleSubmit = async () => {
    try {
      const { bracketId } = await createBracket(
        { bracket: playerList },
        currentUser?.token
      );
      setPlayerList(emptyPlayersList);

      addEvent('Create Bracket', {
        bracketId,
      });

      router.push(`/bracket?bracket_id=${bracketId}`);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to create bracket'));
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
    if (account) {
      handleAllPlayers();
    }
  }, [account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Create a Bracket"
        description="Create your Bracket now. Create some of the best head-tohead matchups there is to make. After creating your bracket, share it with friends and have them vote on individual matchups."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <$GlobalContainer>
            <$GlobalTitle>Create your Bracket</$GlobalTitle>
            <$BracketCreateWrapper>
              <$BracketCreateSection>
                <div className="space">Match 1</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player1.name}</div>
                  <div className="actionBtn">{handleBtn('player1')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>Bye</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 2</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player2.name}</div>
                  <div className="actionBtn">{handleBtn('player2')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player3.name}</div>
                  <div className="actionBtn">{handleBtn('player3')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 3</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player4.name}</div>
                  <div className="actionBtn">{handleBtn('player4')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player5.name}</div>
                  <div className="actionBtn">{handleBtn('player5')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 4</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player6.name}</div>
                  <div className="actionBtn">{handleBtn('player6')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player7.name}</div>
                  <div className="actionBtn">{handleBtn('player7')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 5</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player8.name}</div>
                  <div className="actionBtn">{handleBtn('player8')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player9.name}</div>
                  <div className="actionBtn">{handleBtn('player9')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 6</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player10.name}</div>
                  <div className="actionBtn">{handleBtn('player10')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player11.name}</div>
                  <div className="actionBtn">{handleBtn('player11')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 7</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player12.name}</div>
                  <div className="actionBtn">{handleBtn('player12')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>Bye</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 8</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player13.name}</div>
                  <div className="actionBtn">{handleBtn('player13')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>Bye</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 9</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player14.name}</div>
                  <div className="actionBtn">{handleBtn('player14')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player15.name}</div>
                  <div className="actionBtn">{handleBtn('player15')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 10</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player16.name}</div>
                  <div className="actionBtn">{handleBtn('player16')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player17.name}</div>
                  <div className="actionBtn">{handleBtn('player17')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 11</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player18.name}</div>
                  <div className="actionBtn">{handleBtn('player18')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player19.name}</div>
                  <div className="actionBtn">{handleBtn('player19')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 12</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player20.name}</div>
                  <div className="actionBtn">{handleBtn('player20')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player21.name}</div>
                  <div className="actionBtn">{handleBtn('player21')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 13</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player22.name}</div>
                  <div className="actionBtn">{handleBtn('player22')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player23.name}</div>
                  <div className="actionBtn">{handleBtn('player23')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 14</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player24.name}</div>
                  <div className="actionBtn">{handleBtn('player24')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>Bye</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
            </$BracketCreateWrapper>
            <$BracketCreateWrapper className="disclaimer">
              All newly created brackets will be available to be voted on
              starting on the Sunday after the bracket was created. However, it
              can be shared with friends right away.
            </$BracketCreateWrapper>
            <$BracketCreateWrapper className="btn">
              <Button
                btnText="Create Bracket"
                btnColor="primary"
                btnFunction={handleSubmit}
                customBtnClass="medium"
                isDisabled={isDisabled}
              />
            </$BracketCreateWrapper>
            <ChangeCharacters
              players={players}
              modalIsOpen={isModalOpen}
              closeModal={closeModal}
              setPlayerList={updatePlayers}
              playerList={playerList}
              field={field}
              isBracket={true}
            />
            <ReadMore />
          </$GlobalContainer>
        </>
      )}
    </>
  );
};

export default BracketCreate;
