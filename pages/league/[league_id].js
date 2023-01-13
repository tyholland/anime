import LeagueDetails from 'PageComponents/league/details';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { league_id } = query;

  return {
    props: {
      leagueId: league_id,
    },
  };
};

export default LeagueDetails;
