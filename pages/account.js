import Account from 'PageComponents/account';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { cookies } = req;

  if (!cookies.token) {
    addEvent('Error', responseError(null, 'Failed to show account page'));

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

export default Account;
