import LeagueCharacters from "src/page-components/league/characters";
import { getPlayers } from "src/requests/player";

export const getServerSideProps = async () => {
  const players = await getPlayers();

  if (!players.length) {
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
