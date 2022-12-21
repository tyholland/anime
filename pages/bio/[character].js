import Bio from "PageComponents/bio";
import { getPlayer } from "src/requests/player";

export const getServerSideProps = async (context) => {
  const { query } = context;
  const player = await getPlayer(query.character);

  if (!player.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      player,
    },
  };
};

export default Bio;
