import TeamInfo from 'PageComponents/team/team-info';
import { getTeamInfo } from 'src/requests/team';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { member_id } = query;
  const data = await getTeamInfo(member_id);

  if (!data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data[0],
    },
  };
};

export default TeamInfo;
