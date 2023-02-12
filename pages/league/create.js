import LeagueCreate from 'PageComponents/league/create';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { req } = context;
  const { cookies } = req;

  if (!cookies.token) {
    addEvent('Error', responseError(null, 'Failed to show create league page'));

    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default LeagueCreate;
