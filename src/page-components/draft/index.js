import Metadata from 'Components/metadata';
import Players from 'Components/players';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import BioReview from 'src/modals/bio-review';
import { getDraft } from 'src/requests/draft';
import { getUseablePlayers } from 'src/requests/player';
import { getTeam } from 'src/requests/team';
import { $GlobalContainer } from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import {
  $DraftSection,
  $DraftTeamsList,
  $DraftRound,
  $DraftTeamGrid,
  $DraftPlayerGrid,
} from './draft.style';

const Draft = () => {
  const { currentUser } = useAppContext();
  const router = useRouter();
  const [teamsList, setTeamsList] = useState(null);
  const [draftTeamId, setDraftTeamId] = useState(null);
  const [players, setPlayers] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [characterId, setCharacterId] = useState(null);
  const [playerList, setPlayerList] = useState(null);

  const getDraftInfo = async () => {
    if (!router.query) {
      return;
    }

    const { league_id } = router.query;

    try {
      const { teams, userTeamId } = await getDraft(
        league_id,
        currentUser?.token
      );

      setTeamsList(teams);
      setDraftTeamId(userTeamId);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get draft info'));
    }
  };

  const getAllPlayers = async () => {
    try {
      const { unusedPlayers } = await getUseablePlayers(
        draftTeamId,
        currentUser?.token
      );
      const teamData = await getTeam(draftTeamId, currentUser?.token);

      const { team, userPoints } = teamData;

      setPlayerList({
        captain: team.captain.id,
        brawlerA: team.brawler_a.id,
        brawlerB: team.brawler_b.id,
        bsBrawler: team.bs_brawler.id,
        bsSupport: team.bs_support.id,
        support: team.support.id,
        villain: team.villain.id,
        battlefield: team.battlefield.id,
        userPoints,
      });

      setPlayers(unusedPlayers);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all players'));
    }
  };

  const openDraftModal = (character) => {
    setCharacterId(character.id);
    setIsModalOpen(true);
  };

  const closeDraftModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!currentUser) {
      getDraftInfo();
    }
  }, [router.query, currentUser]);

  useEffect(() => {
    if (draftTeamId) {
      getAllPlayers();
    }
  }, [draftTeamId]);

  return (
    <>
      <Metadata
        title="League Draft"
        description="Fantasy League Draft. Create the ultimate team and pick your characters before your friends do."
      />
      <$GlobalContainer>
        <$DraftSection>
          <$DraftRound>
            <div>Round</div>
            <div>1</div>
          </$DraftRound>
          <$DraftRound>
            <div>Time</div>
            <div>1:00</div>
          </$DraftRound>
          <$DraftTeamsList teams={teamsList?.length}>
            {teamsList?.map((item) => {
              return <div key={item.id}>{item.team_name}</div>;
            })}
          </$DraftTeamsList>
        </$DraftSection>
        <$DraftSection>
          <div>Recent Team:</div>
          <div>Character Selected</div>
        </$DraftSection>
        <$DraftSection className="team">
          <$DraftPlayerGrid>
            {!!players && (
              <Players
                data={players}
                setPlayerList={setPlayerList}
                playerList={playerList}
                openDraft={openDraftModal}
                page="draft"
              />
            )}
          </$DraftPlayerGrid>
          <$DraftTeamGrid>
            <h2>Your Team</h2>
            <div>
              <strong>Available Points:</strong> {playerList?.userPoints}
            </div>
            <div>
              <strong>Captain:</strong> {playerList?.captain}
            </div>
            <div>
              <strong>Brawler:</strong> {playerList?.brawlerA}
            </div>
            <div>
              <strong>Brawler:</strong> {playerList?.brawlerB}
            </div>
            <div>
              <strong>Brawler - Duo:</strong> {playerList?.bsBrawler}
            </div>
            <div>
              <strong>Support - Duo:</strong> {playerList?.bsSupport}
            </div>
            <div>
              <strong>Support:</strong> {playerList?.support}
            </div>
            <div>
              <strong>Villain:</strong> {playerList?.villain}
            </div>
            <div>
              <strong>Battlefield:</strong> {playerList?.battlefield}
            </div>
          </$DraftTeamGrid>
        </$DraftSection>
      </$GlobalContainer>
      <BioReview
        modalIsOpen={isModalOpen}
        closeModal={closeDraftModal}
        characterId={characterId}
        type="draft"
      />
    </>
  );
};

export default Draft;
