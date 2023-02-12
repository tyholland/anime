import ViewLeague from 'PageComponents/league/view';
import { getAllLeagues } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { req } = context;
  const { cookies } = req;

  try {
    const leagues = await getAllLeagues(cookies.token);

    return {
      props: {
        leagues,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get all leagues view'));

    return {
      notFound: true,
    };
  }
};

export default ViewLeague;
