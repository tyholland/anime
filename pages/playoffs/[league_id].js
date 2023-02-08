import Playoffs from 'PageComponents/playoffs';
import { getPlayoffs } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query, req } = context;
  const { league_id } = query;
  const { cookies } = req;

  try {
    const schedule = await getPlayoffs(league_id, cookies.token);

    return {
      props: {
        schedule,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get playoffs schedule'));

    return {
      notFound: true,
    };
  }
};

export default Playoffs;
