import React, { useEffect, useState } from 'react';
import {
  $GlobalContainer,
  $GlobalTitle,
  $GlobalSubTitle,
} from 'Styles/global.style.js';
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

      setPlayers(allCharacters);
      setAllPlayers(allCharacters);
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
        title="Edit Team"
        description="Edit team's roster. Add new players or change current players."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <$GlobalContainer>
            <$GlobalTitle>Create your Bracket</$GlobalTitle>
            <$BracketCreateWrapper>
              <$GlobalSubTitle>Round 1</$GlobalSubTitle>
              <$BracketCreateSection>
                <div>Game 1</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player1.name}
                    redirect={`/bio?character=${playerList.player1.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player1')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player2.name}
                    redirect={`/bio?character=${playerList.player2.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player2')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 2</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player3.name}
                    redirect={`/bio?character=${playerList.player3.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player3')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player4.name}
                    redirect={`/bio?character=${playerList.player4.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player4')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 3</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player5.name}
                    redirect={`/bio?character=${playerList.player5.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player5')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player6.name}
                    redirect={`/bio?character=${playerList.player6.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player6')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 4</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player7.name}
                    redirect={`/bio?character=${playerList.player7.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player7')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player8.name}
                    redirect={`/bio?character=${playerList.player8.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player8')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 5</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player9.name}
                    redirect={`/bio?character=${playerList.player9.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player9')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player10.name}
                    redirect={`/bio?character=${playerList.player10.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player10')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 6</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player11.name}
                    redirect={`/bio?character=${playerList.player11.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player11')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player12.name}
                    redirect={`/bio?character=${playerList.player12.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player12')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 7</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player13.name}
                    redirect={`/bio?character=${playerList.player13.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player13')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player14.name}
                    redirect={`/bio?character=${playerList.player14.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player14')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 8</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player15.name}
                    redirect={`/bio?character=${playerList.player15.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player15')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player16.name}
                    redirect={`/bio?character=${playerList.player16.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player16')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
            </$BracketCreateWrapper>
            <$BracketCreateWrapper>
              <$GlobalSubTitle>Round 2</$GlobalSubTitle>
              <$BracketCreateSection>
                <div>Game 9</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player17.name}
                    redirect={`/bio?character=${playerList.player17.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player17')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 1 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 10</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player18.name}
                    redirect={`/bio?character=${playerList.player18.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player18')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 2 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 11</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player19.name}
                    redirect={`/bio?character=${playerList.player19.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player19')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 3 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 12</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player20.name}
                    redirect={`/bio?character=${playerList.player20.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player20')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 4 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 13</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player21.name}
                    redirect={`/bio?character=${playerList.player21.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player21')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 5 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 14</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player22.name}
                    redirect={`/bio?character=${playerList.player22.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player22')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 6 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 15</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player23.name}
                    redirect={`/bio?character=${playerList.player23.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player23')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 7 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div>Game 16</div>
                <$BracketCreatePlayer>
                  <Button
                    btnText={playerList.player24.name}
                    redirect={`/bio?character=${playerList.player24.id}`}
                    customBtnClass="text edit"
                  />
                  <div className="actionBtn">{handleBtn('player24')}</div>
                </$BracketCreatePlayer>
                <div>vs</div>
                <$BracketCreatePlayer>
                  <div>Game 8 winner</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
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
            />
            <ReadMore />
          </$GlobalContainer>
        </>
      )}
    </>
  );
};

export default BracketCreate;
