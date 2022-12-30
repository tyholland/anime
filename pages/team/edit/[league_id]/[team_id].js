import TeamEdit from 'PageComponents/team/team-edit';
import { getPlayers } from 'src/requests/player';
import { getTeam } from 'src/requests/team';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { league_id, team_id } = query;
  const teamData = await getTeam(league_id, team_id);
  const players = await getPlayers();

  if (!players.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      players,
      teamData,
      teamId: team_id,
    },
  };
};

export default TeamEdit;
