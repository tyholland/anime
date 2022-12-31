import LeagueDetails from 'PageComponents/league/details';
import { getLeague } from 'src/requests/league';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { league_id } = query;
  const data = await getLeague(league_id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      leagueId: league_id,
    },
  };
};

export default LeagueDetails;
