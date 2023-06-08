import React, { useEffect, useState } from 'react';
import BackLink from 'Components/back-link/back-link';
import * as GlobalStyles from 'Styles/global.style.js';
import MatchupVoting from 'Components/matchup-voting/matchup-voting';
import { addEvent } from 'Utils/amplitude';
import { getNonLoggedInUser, responseError } from 'Utils/index';
import { getPlayer } from 'src/requests/player';
import Metadata from 'Components/metadata/metadata';
import Button from 'Components/button/button';
import * as Styles from './allVoteMatchups.style';
import { getAllMatchupVotes } from 'src/requests/matchup';
import Error from 'PageComponents/error/error';
import Loader from 'Components/loader/loader';
import { useAppContext } from 'src/hooks/user';
import ReadMore from 'Components/read-more/read-more';
import Voting from 'Components/gameplay-card/voting';

const AllVoteMatchups = () => {
  const { currentUser } = useAppContext();
  const [totalMatchups, setTotalMatchups] = useState(null);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [matchup, setMatchup] = useState(null);
  const [isMatchupsAvailable, setIsMatchupsAvailable] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [errorPage, setErrorPage] = useState(false);

  const getVotingMatchup = async () => {
    window.scrollTo(0, 0);
    const nextMatchup = totalMatchups - count;

    if (nextMatchup === 0) {
      setIsMatchupsAvailable([]);
      return;
    }

    const { player_a_id, player_b_id } = isMatchupsAvailable[nextMatchup];

    try {
      const playerOne = await getPlayer(player_a_id);
      const playerTwo = await getPlayer(player_b_id);

      setPlayerA(playerOne[0]);
      setPlayerB(playerTwo[0]);
      setMatchup(isMatchupsAvailable[nextMatchup]);
      setCount(count + 1);
    } catch (err) {
      addEvent('Error', responseError(err, 'Get voting matchup'));
    }
  };

  const handleAllMatchups = async () => {
    setIsLoading(true);

    const theUser = currentUser
      ? currentUser
      : { user_id: getNonLoggedInUser() };

    try {
      const allMatchupVotes = await getAllMatchupVotes({
        currentUser: theUser,
      });

      const totalLength = allMatchupVotes.length - 1;
      const { player_a_id, player_b_id } = allMatchupVotes[0];

      const playerOne = await getPlayer(player_a_id);
      const playerTwo = await getPlayer(player_b_id);

      setPlayerA(playerOne[0]);
      setPlayerB(playerTwo[0]);
      setMatchup(allMatchupVotes[0]);
      setTotalMatchups(totalLength);
      setIsMatchupsAvailable(allMatchupVotes);
      setIsLoading(false);
    } catch (err) {
      if (err.response.status === 400) {
        setMatchup([]);
        setIsLoading(false);
        return;
      }

      addEvent(
        'Error',
        responseError(err, 'Failed to get all voting matchups')
      );
      setErrorPage(true);
    }
  };

  useEffect(() => {
    handleAllMatchups();
  }, []);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <Metadata
        title="All Matchup Voting"
        description="Vote on various matchups between characters in every rank. Your vote can help give the individual fighter that extra boost they need to win their matchup."
        image={playerA?.image_url}
      />
      <GlobalStyles.GlobalContainer>
        {isLoading && <Loader />}
        {!!isMatchupsAvailable?.length && !isLoading && (
          <MatchupVoting
            isChangeable={true}
            changeMatchup={getVotingMatchup}
            userPlayerA={playerA}
            userPlayerB={playerB}
            matchup={matchup}
          />
        )}
        {!isMatchupsAvailable?.length && !isLoading && (
          <Styles.AllVoteMatchupsEmptyWrapper>
            <div className="title">
              There are no available matchups to vote on
            </div>
            <Button
              btnText="View Your League(s)"
              redirect="/league/view"
              customBtnClass="medium"
              btnColor="primary"
            />
          </Styles.AllVoteMatchupsEmptyWrapper>
        )}
      </GlobalStyles.GlobalContainer>
      <ReadMore>
        <Voting />
      </ReadMore>
    </>
  );
};

export default AllVoteMatchups;
