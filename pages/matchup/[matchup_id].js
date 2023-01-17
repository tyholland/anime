import ViewMatchup from 'PageComponents/view-matchup';
import { getMatchUp } from 'src/requests/matchup';
import { getTeam } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { matchup_id } = query;
  const { cookies } = req;

  try {
    const matchup = await getMatchUp(matchup_id, cookies.token);

    const { league_id, team_a, team_b } = matchup[0];

    const team1 = await getTeam(league_id, team_a, cookies.token);
    const team2 = await getTeam(league_id, team_b, cookies.token);

    return {
      props: {
        matchupId: matchup_id,
        team1,
        team2,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get matchup'));

    return {
      notFound: true,
    };
  }
};

export default ViewMatchup;
