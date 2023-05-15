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
import { randomInt, responseError } from 'Utils/index';
import { getPlayers } from 'src/requests/player';
import Error from 'PageComponents/error';
import { useAppContext } from 'src/hooks/context';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';
import { createBracket } from 'src/requests/bracket';
import { useRouter } from 'next/router';
import TournamentBracket from 'react-svg-tournament-bracket';
import TextField from 'Components/text-field';
import BracketCard from 'Components/gameplay-card/bracket-card';

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
  const [bracketName, setBracketName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [winWidth, setWinWidth] = useState(0);

  if (typeof window !== 'undefined') {
    if (!winWidth) {
      setWinWidth(window.innerWidth);
    }
    window.onresize = () => setWinWidth(window.innerWidth);
  }

  const defaultBracket = [
    {
      homeTeamName: 'Player 1',
      awayTeamName: 'Player 2',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 1,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: 'Player 3',
      awayTeamName: 'Player 4',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 2,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: 'Player 5',
      awayTeamName: 'Player 6',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 3,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: 'Player 7',
      awayTeamName: 'Player 8',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 4,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: 'Player 9',
      awayTeamName: 'Player 10',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 5,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: 'Player 11',
      awayTeamName: 'Player 12',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 6,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: 'Player 13',
      awayTeamName: 'Player 14',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 7,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: 'Player 15',
      awayTeamName: 'Player 16',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 8,
      round: 1,
      voteId: null,
    },
    {
      homeTeamName: '#1 Winner',
      awayTeamName: '#2 Winner',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 9,
      round: 2,
      voteId: null,
    },
    {
      homeTeamName: '#3 Winner',
      awayTeamName: '#4 Winner',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 10,
      round: 2,
      voteId: null,
    },
    {
      homeTeamName: '#5 Winner',
      awayTeamName: '#6 Winner',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 11,
      round: 2,
      voteId: null,
    },
    {
      homeTeamName: '#7 Winner',
      awayTeamName: '#8 Winner',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 12,
      round: 2,
      voteId: null,
    },
    {
      homeTeamName: '#9 Winner',
      awayTeamName: '#10 Winner',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 13,
      round: 3,
      voteId: null,
    },
    {
      homeTeamName: '#11 Winner',
      awayTeamName: '#12 Winner',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 14,
      round: 3,
      voteId: null,
    },
    {
      homeTeamName: '#13 Winner',
      awayTeamName: '#14 Winner',
      homeTeamScore: 0,
      awayTeamScore: 0,
      matchNumber: 15,
      round: 4,
      voteId: null,
    },
  ];

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
    const btnTextNum = fieldName.split('player');

    if (!playerList[fieldName].id) {
      return (
        <Button
          btnText={`Add Player ${btnTextNum[1]}`}
          btnColor="primary"
          customBtnClass="small"
          btnFunction={() => {
            setField(fieldName);
            openModal();
            addEvent('Bracket Player', {
              action: 'add',
              userId: currentUser?.user_id,
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
              userId: currentUser?.user_id,
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
              userId: currentUser?.user_id,
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
    setIsDisabled(
      !bracketName.length || Object.values(playerList).some((list) => !list.id)
    );
  };

  const handleSubmit = async () => {
    try {
      const { bracketId } = await createBracket(
        { bracket: playerList, name: bracketName },
        currentUser?.token
      );
      setPlayerList(emptyPlayersList);

      addEvent('Create Bracket', {
        bracketId,
        userId: currentUser?.user_id,
      });

      router.push(`/bracket?bracket_id=${bracketId}`);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to create bracket'));
    }
  };

  const handleBracketName = (val) => {
    setBracketName(val);
    setIsDisabled(
      !val.length || Object.values(playerList).some((list) => !list.id)
    );
  };

  const handleRandomizer = () => {
    if (allPlayers.length) {
      for (let index = 0; index < 16; index++) {
        const randomNum = randomInt(allPlayers.length);

        playerList[`player${index + 1}`].id = allPlayers[randomNum].id;
        playerList[`player${index + 1}`].name = allPlayers[randomNum].name;
      }

      updatePlayers(playerList);
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
            <$BracketCreateWrapper className="bracket">
              <TournamentBracket
                matches={defaultBracket}
                width={
                  winWidth > 700 && winWidth < 1200
                    ? winWidth - 85
                    : winWidth > 1200 && 1100
                }
                height={winWidth < 900 ? 700 : 400}
                disableStrictBracketSizing={true}
                hidePKs={true}
                orientation={winWidth < 700 ? 'portrait' : 'landscape'}
              />
            </$BracketCreateWrapper>
            <$BracketCreateWrapper className="title">
              <TextField
                placeholder="Enter Bracket Name"
                onChange={(val) => handleBracketName(val)}
                maxLength={12}
              />
              <Button
                btnText="Randomize Bracket"
                btnFunction={handleRandomizer}
                btnColor="primary"
                customBtnClass="medium"
              />
            </$BracketCreateWrapper>
            <$BracketCreateWrapper>
              <$BracketCreateSection>
                <div className="space">Match 1</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player1.name}</div>
                  <div className="actionBtn">{handleBtn('player1')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player2.name}</div>
                  <div className="actionBtn">{handleBtn('player2')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 2</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player3.name}</div>
                  <div className="actionBtn">{handleBtn('player3')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player4.name}</div>
                  <div className="actionBtn">{handleBtn('player4')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 3</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player5.name}</div>
                  <div className="actionBtn">{handleBtn('player5')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player6.name}</div>
                  <div className="actionBtn">{handleBtn('player6')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 4</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player7.name}</div>
                  <div className="actionBtn">{handleBtn('player7')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player8.name}</div>
                  <div className="actionBtn">{handleBtn('player8')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 5</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player9.name}</div>
                  <div className="actionBtn">{handleBtn('player9')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player10.name}</div>
                  <div className="actionBtn">{handleBtn('player10')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 6</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player11.name}</div>
                  <div className="actionBtn">{handleBtn('player11')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player12.name}</div>
                  <div className="actionBtn">{handleBtn('player12')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 7</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player13.name}</div>
                  <div className="actionBtn">{handleBtn('player13')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player14.name}</div>
                  <div className="actionBtn">{handleBtn('player14')}</div>
                </$BracketCreatePlayer>
              </$BracketCreateSection>
              <$BracketCreateSection>
                <div className="space">Match 8</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player15.name}</div>
                  <div className="actionBtn">{handleBtn('player15')}</div>
                </$BracketCreatePlayer>
                <div className="space">vs</div>
                <$BracketCreatePlayer>
                  <div>{playerList.player16.name}</div>
                  <div className="actionBtn">{handleBtn('player16')}</div>
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
                disabledMsg="Please complete all the fields above in order to proceed"
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
          </$GlobalContainer>
          <ReadMore>
            <BracketCard />
          </ReadMore>
        </>
      )}
    </>
  );
};

export default BracketCreate;
