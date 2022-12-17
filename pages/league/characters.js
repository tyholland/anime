import LeagueCharacters from 'src/page-components/league/characters';
import { getPlayers } from 'src/requests/player';

export const getServerSideProps = async (context) => {
  const players = await getPlayers();

  if (!players) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      players,
    },
  };
};

export default LeagueCharacters;
