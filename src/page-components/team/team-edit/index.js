import React, { useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Button from 'Components/button';
import { $TeamEditWrapper, $TeamEditBtn } from './teamEdit.style';
import BackLink from 'Components/back-link';
import ChangeCharacters from 'src/modals/change-character';
import { updateTeam } from 'src/requests/team';
import Metadata from 'Components/metadata';

const TeamEdit = ({ players, teamData, teamId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerRank, setPlayerRank] = useState(null);
  const [field, setField] = useState(null);
  const { team, teamName, userPoints } = teamData;
  const { week, points } = team;
  const [playerList, setPlayerList] = useState({
    captain: team.captain,
    brawlerA: team.brawler_a,
    brawlerB: team.brawler_b,
    bsBrawler: team.bs_brawler,
    bsSupport: team.bs_support,
    support: team.support,
    villain: team.villain,
    battlefield: team.battlefield,
    benchA: team.bench_a,
    benchB: team.bench_b,
    benchC: team.bench_c,
    benchD: team.bench_d,
    benchE: team.bench_e,
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

  const handleBtn = (player, rank, fieldName) => {
    if (!player.id) {
      return (
        <Button
          btnText="Add"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="small"
          btnFunction={() => {
            setField(fieldName);
            openModal(rank);
          }}
        />
      );
    }

    return (
      <Button
        btnText="Change"
        btnTextColor="black"
        btnColor="orange"
        customBtnClass="small"
        btnFunction={() => {
          setField(fieldName);
          openModal(rank);
        }}
      />
    );
  };

  const updatePlayers = async (thePlayers) => {
    try {
      const payload = {
        ...thePlayers,
        points,
        week,
      };

      await updateTeam(teamId, payload);
      setPlayerList(thePlayers);
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Metadata
        title="Edit Team"
        description={`Edit ${teamName}'s roster. Add new players or change current players.`}
      />
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>Edit Team</$GlobalTitle>
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
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
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
            <div>{playerList.benchA.name}</div>
            <div>{playerList.benchB.name}</div>
            <div>{playerList.benchC.name}</div>
            <div>{playerList.benchD.name}</div>
            <div>{playerList.benchE.name}</div>
          </div>
          <div>
            <$TeamEditBtn>
              {handleBtn(playerList.captain, 'Captain', 'captain')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.brawlerA, 'Brawler', 'brawlerA')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.brawlerB, 'Brawler', 'brawlerB')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.bsBrawler, 'Brawler', 'bsBrawler')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.bsSupport, 'Support', 'bsSupport')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.support, 'Support', 'support')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.villain, 'Villain', 'villain')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.battlefield, 'Battlefield', 'battlefield')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.benchA, 'All', 'benchA')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.benchB, 'All', 'benchB')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.benchC, 'All', 'benchC')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.benchD, 'All', 'benchD')}
            </$TeamEditBtn>
            <$TeamEditBtn>
              {handleBtn(playerList.benchE, 'All', 'benchE')}
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
