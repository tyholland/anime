import TeamInfo from 'PageComponents/team/team-info';
import { getTeamInfo } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { member_id } = query;
  const { cookies } = req;

  try {
    const teamData = await getTeamInfo(member_id, cookies.token);

    return {
      props: {
        teamData,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get team info data'));

    return {
      notFound: true,
    };
  }
};

export default TeamInfo;
