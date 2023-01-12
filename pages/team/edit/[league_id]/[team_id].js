import TeamEdit from 'PageComponents/team/team-edit';
import { getPlayers } from 'src/requests/player';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { league_id, team_id } = query;
  const players = await getPlayers();

  if (!players.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      players,
      teamId: team_id,
      leagueId: league_id,
    },
  };
};

export default TeamEdit;
