import Team from 'PageComponents/team';
import { getTeam, getTeamInfo } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { team_id } = query;
  const { cookies } = req;

  try {
    const teamData = await getTeam(team_id, cookies.token);
    const teamInfo = await getTeamInfo(teamData.memberId, cookies.token);

    return {
      props: {
        teamId: team_id,
        teamData,
        rank: teamInfo.rank,
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
