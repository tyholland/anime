import Scoreboard from 'PageComponents/scoreboard';
import { getScoreboard } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { query, req } = context;
  const { league_id } = query;
  const { cookies } = req;

  try {
    const games = await getScoreboard(league_id, cookies.token);

    return {
      props: {
        games,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get the scoreboard'));

    return {
      notFound: true,
    };
  }
};

export default Scoreboard;
