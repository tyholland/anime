import Schedule from 'PageComponents/schedule';
import { getSchedule } from 'src/requests/team';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { query, req } = context;
  const { league_id } = query;
  const { cookies } = req;

  try {
    const games = await getSchedule(league_id, cookies.token);

    return {
      props: {
        games,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get game schedule'));

    return {
      notFound: true,
    };
  }
};

export default Schedule;
