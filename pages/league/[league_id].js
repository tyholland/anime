import LeagueDetails from 'PageComponents/league/details';
import { getLeague } from 'src/requests/league';
import { getMatchUpFromTeamId } from 'src/requests/matchup';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { league_id } = query;
  const { cookies } = req;

  try {
    const data = await getLeague(league_id, cookies.token);
    const matchupData = await getMatchUpFromTeamId(
      data[0].teamId,
      cookies.token
    );

    return {
      props: {
        leagueId: league_id,
        leagueData: {
          ...data[0],
          ...matchupData[0],
        },
      },
    };
  } catch (err) {
    addEvent(
      'Error',
      responseError(err, 'Failed to get league and matchup data')
    );

    return {
      notFound: true,
    };
  }
};

export default LeagueDetails;
