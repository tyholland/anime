import JoinLeague from 'PageComponents/league/join';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { cookies } = req;

  if (!cookies.token) {
    addEvent('Error', responseError(null, 'Failed to show join league page'));

    return {
      notFound: true,
    };
  }

  return {
    props: {
      isLoggedIn: true,
    },
  };
};

export default JoinLeague;
