import Character from 'src/page-components/character';
import { getPlayers } from 'src/requests/player';

export const getServerSideProps = async () => {
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

export default Character;
