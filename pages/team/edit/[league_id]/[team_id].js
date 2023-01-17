import TeamEdit from 'PageComponents/team/team-edit';
import { getPlayers } from 'src/requests/player';
import { getTeam } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { league_id, team_id } = query;
  const { cookies } = req;

  try {
    const players = await getPlayers();
    const teamData = await getTeam(league_id, team_id, cookies.token);

    return {
      props: {
        players,
        teamData,
        teamId: team_id,
      },
    };
  } catch (err) {
    addEvent(
      'Error',
      responseError(err, 'Failed to get team data and character data')
    );

    return {
      notFound: true,
    };
  }
};

export default TeamEdit;
