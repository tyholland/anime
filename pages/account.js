import Account from 'PageComponents/account';
import { getAccountInfo } from 'src/requests/users';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { cookies } = req;

  try {
    const account = await getAccountInfo(cookies.token);

    return {
      props: {
        account: account[0],
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get account data'));

    return {
      notFound: true,
    };
  }
};

export default Account;
