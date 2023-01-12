import Team from 'PageComponents/team';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { league_id, team_id } = query;

  return {
    props: {
      leagueId: league_id,
      teamId: team_id,
    },
  };
};

export default Team;
