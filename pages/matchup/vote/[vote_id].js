import SpecificVoteMatchup from 'PageComponents/specific-vote-matchup';
import { getMatchupVotes } from 'src/requests/matchup';
import { getPlayer } from 'src/requests/player';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { vote_id } = query;

  try {
    const matchupVotes = await getMatchupVotes(vote_id);
    const { player_a_id, player_b_id } = matchupVotes;

    const playerA = await getPlayer(player_a_id);
    const playerB = await getPlayer(player_b_id);

    return {
      props: {
        playerA: playerA[0],
        playerB: playerB[0],
        matchupVotes,
      },
    };
  } catch (err) {
    addEvent('Error', responseError(err, 'Failed to get voting matchup'));

    return {
      notFound: true,
    };
  }
};

export default SpecificVoteMatchup;
