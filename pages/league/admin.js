import Admin from 'PageComponents/admin';
import { getLeagueAdminData } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { req } = context;
  const { cookies } = req;

  try {
    const leagueData = await getLeagueAdminData(cookies.token);
    const { league, teams } = leagueData;

    return {
      props: {
        league,
        teams,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to league admin data'));

    return {
      notFound: true,
    };
  }
};

export default Admin;
