import AllVoteMatchups from 'PageComponents/all-vote-matchups';
import { getAllMatchupVotes } from 'src/requests/matchup';
import { getPlayer } from 'src/requests/player';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

export const getStaticProps = async () => {
  try {
    const allMatchupVotes = await getAllMatchupVotes();

    const totalLength = allMatchupVotes.length - 1;
    const { player_a_id, player_b_id } = allMatchupVotes[totalLength];

    const playerOne = await getPlayer(player_a_id);
    const playerTwo = await getPlayer(player_b_id);

    return {
      props: {
        allMatchupVotes,
        playerOne: playerOne[0],
        playerTwo: playerTwo[0],
      },
    };
  } catch (err) {
    if (err.response.status === 400) {
      return {
        props: {
          allMatchupVotes: [],
        },
      };
    }

    addEvent('Error', responseError(err, 'Failed to get all voting matchups'));

    return {
      notFound: true,
    };
  }
};

export default AllVoteMatchups;
