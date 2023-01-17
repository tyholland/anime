import Character from 'src/page-components/character';
import { getPlayers } from 'src/requests/player';

export const getServerSideProps = async () => {
  try {
    const players = await getPlayers();

    return {
      props: {
        players,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Character;
