import Team from 'PageComponents/team';
import { getTeam } from 'src/requests/team';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { league_id, team_id } = query;
  const data = await getTeam(league_id, team_id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default Team;
