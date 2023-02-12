import ViewMatchup from 'PageComponents/view-matchup';
import { getMatchUp } from 'src/requests/matchup';
import { getMatchupTeam } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { query, req } = context;
  const { matchup_id } = query;
  const { cookies } = req;

  try {
    const results = await getMatchUp(matchup_id, cookies.token);

    const { team_a, team_b, score_a, score_b } = results.matchup;

    const team1 = await getMatchupTeam(team_a, cookies.token);
    const team2 = await getMatchupTeam(team_b, cookies.token);

    return {
      props: {
        matchupId: matchup_id,
        team1,
        team2,
        score1: score_a,
        score2: score_b,
        votes: results.votes,
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
