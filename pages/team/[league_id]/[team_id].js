import Team from 'PageComponents/team';
import { getTeam } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { league_id, team_id } = query;
  const { cookies } = req;

  try {
    const teamData = await getTeam(league_id, team_id, cookies.token);

    return {
      props: {
        leagueId: league_id,
        teamId: team_id,
        teamData,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get team data'));

    return {
      notFound: true,
    };
  }
};

export default Team;
