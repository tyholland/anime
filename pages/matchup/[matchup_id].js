import ViewMatchup from 'PageComponents/view-matchup';
import { getMatchUp } from 'src/requests/matchup';
import { getTeam } from 'src/requests/team';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { matchup_id } = query;
  const matchup = await getMatchUp(matchup_id);

  if (!matchup.length) {
    return {
      notFound: true,
    };
  }

  const { league_id, team_a, team_b } = matchup[0];

  const team1 = await getTeam(league_id, team_a);
  const team2 = await getTeam(league_id, team_b);

  if (!team1 || !team2) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      team1,
      team2,
    },
  };
};

export default ViewMatchup;
