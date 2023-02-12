import TeamEdit from 'PageComponents/team/team-edit';
import { getPlayers } from 'src/requests/player';
import { getTeam } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { query, req } = context;
  const { team_id } = query;
  const { cookies } = req;

  try {
    const players = await getPlayers();
    const teamData = await getTeam(team_id, cookies.token);

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
