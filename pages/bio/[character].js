import Bio from 'PageComponents/bio';
import { getPlayer } from 'src/requests/player';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async (context) => {
  const { query } = context;

  try {
    const player = await getPlayer(query.character);

    return {
      props: {
        player,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to load character'));

    return {
      notFound: true,
    };
  }
};

export default Bio;
