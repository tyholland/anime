import Voting from 'Components/gameplay-card/voting';
import Loader from 'Components/loader/loader';
import MatchupVoting from 'Components/matchup-voting/matchup-voting';
import Metadata from 'Components/metadata/metadata';
import ReadMore from 'Components/read-more/read-more';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error/error';
import React, { useEffect, useState } from 'react';
import { getMatchupVotes } from 'src/requests/matchup';
import { getPlayer } from 'src/requests/player';
import * as GlobalStyles from 'Styles/global.style.js';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

const SpecificVoteMatchup = () => {
  const router = useRouter();
  const [matchupVotes, setMatchupVotes] = useState(null);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const hasMatchup = !!matchupVotes && !!playerA && !!playerB;

  const handleVotingData = async () => {
    const { vote_id } = router.query;

    try {
      const matchupVotes = await getMatchupVotes(vote_id);
      const { player_a_id, player_b_id } = matchupVotes;

      const playerA = await getPlayer(player_a_id);
      const playerB = await getPlayer(player_b_id);

      setMatchupVotes(matchupVotes);
      setPlayerA(playerA[0]);
      setPlayerB(playerB[0]);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get voting matchup'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      handleVotingData();
    }
  }, [router.query]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Matchup Voting"
        description="Vote on this matchup between two characters. Your vote can help give the individual fighter that extra boost they need to win their matchup."
        image={playerA?.image_url}
      />
      <GlobalStyles.GlobalContainer>
        {!hasMatchup && <Loader />}
        {hasMatchup && (
          <MatchupVoting
            userPlayerA={playerA}
            userPlayerB={playerB}
            matchup={matchupVotes}
          />
        )}
      </GlobalStyles.GlobalContainer>
      <ReadMore>
        <Voting />
      </ReadMore>
    </>
  );
};

export default SpecificVoteMatchup;
