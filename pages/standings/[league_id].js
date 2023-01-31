import Standings from 'PageComponents/standings';
import { getStandings } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { league_id } = query;
  const { cookies } = req;

  try {
    const games = await getStandings(league_id, cookies.token);

    return {
      props: {
        games,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get the standings'));

    return {
      notFound: true,
    };
  }
};

export default Standings;
