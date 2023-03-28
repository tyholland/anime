import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import Players from 'Components/players';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import { getDraft } from 'src/requests/draft';
import { getUseablePlayers } from 'src/requests/player';
import { getTeam } from 'src/requests/team';
import { $GlobalContainer } from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { $DraftSection, $DraftTeamsList } from './draft.style';

const Draft = () => {
  const { currentUser } = useAppContext();
  const router = useRouter();
  const [teamsList, setTeamsList] = useState(null);
  const [draftTeam, setDraftTeam] = useState(null);
  const [players, setPlayers] = useState(null);
  const [playerList, setPlayerList] = useState(null);

  const getDraftInfo = async () => {
    const { league_id } = router.query;
    try {
      const { teams, userTeam } = await getDraft(league_id, currentUser?.token);

      setTeamsList(teams);
      setDraftTeam(userTeam);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get draft info'));
    }
  };

  const getAllPlayers = async () => {
    const { teamId } = draftTeam;

    try {
      const { unusedPlayers } = await getUseablePlayers(
        teamId,
        currentUser?.token
      );
      const teamData = await getTeam(teamId, currentUser?.token);

      const { team, userPoints } = teamData;

      setPlayerList({
        captain: team.captain,
        brawlerA: team.brawler_a,
        brawlerB: team.brawler_b,
        bsBrawler: team.bs_brawler,
        bsSupport: team.bs_support,
        support: team.support,
        villain: team.villain,
        battlefield: team.battlefield,
        userPoints,
      });

      setPlayers(unusedPlayers);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all players'));
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!currentUser) {
      getDraftInfo();
    }
  }, [router.query, currentUser]);

  useEffect(() => {
    if (draftTeam) {
      getAllPlayers();
    }
  }, [draftTeam]);

  return (
    <>
      <Metadata
        title="League Draft"
        description="Fantasy League Draft. Create the ultimate team and pick your characters before your friends do."
      />
      <>
        <BackLink />
        <$GlobalContainer>
          <$DraftSection>
            <div>Round</div>
            <div>Timer</div>
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
            <div className="playerGrid">
              {!!players && (
                <Players
                  data={players}
                  setPlayerList={setPlayerList}
                  playerList={playerList}
                  page="draft"
                />
              )}
            </div>
            <div className="teamGrid">
              <h2>Your Team</h2>
              <div>Captain: {draftTeam?.captain}</div>
              <div>Brawler: {draftTeam?.brawler_a}</div>
              <div>Brawler: {draftTeam?.brawler_b}</div>
              <div>Brawler - Duo: {draftTeam?.bs_brawler}</div>
              <div>Support - Duo: {draftTeam?.bs_support}</div>
              <div>Support: {draftTeam?.support}</div>
              <div>Villain: {draftTeam?.villain}</div>
              <div>Battlefield: {draftTeam?.battlefield}</div>
            </div>
          </$DraftSection>
        </$GlobalContainer>
      </>
    </>
  );
};

export default Draft;
