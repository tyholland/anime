import React, { useEffect, useState } from 'react';
import Metadata from 'Components/metadata';
import TournamentBracket from 'react-svg-tournament-bracket';
import {
  getBracket,
  getTheChamp,
  startChampRound,
  startRound1,
  startRound2,
  startRound3,
  startRound4,
} from 'src/requests/bracket';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { useAppContext } from 'src/hooks/context';
import { addVotes } from 'src/requests/bracket';
import { $BracketWrapper, $BracketContainer } from './bracket.style';
import SocialMedia from 'Components/social-media';
import Notification from 'src/modals/notification';
import { $GlobalTitle } from 'Styles/global.style';
import Error from 'PageComponents/error';
import Button from 'Components/button';

const Bracket = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [matches, setMatches] = useState(null);
  const [winWidth, setWinWidth] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState(null);
  const [errorPage, setErrorPage] = useState(null);
  const [hasVoted, setHasVoted] = useState([]);
  const [bracketRound, setBracketRound] = useState(null);
  const [bracketCreator, setBracketCreator] = useState(null);
  const [bracketName, setBracketName] = useState(null);
  const [theChamp, setTheChamp] = useState(null);
  let pathname = '';

  if (typeof window !== 'undefined') {
    pathname = window.location.href;

    if (!winWidth) {
      setWinWidth(window.innerWidth);
    }
    window.onresize = () => setWinWidth(window.innerWidth);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBracketDisplay = async () => {
    const { bracket_id } = router.query;

    try {
      const { allMatches, round, creator, name } = await getBracket(bracket_id);

      if (round === 5) {
        const { champ } = await getTheChamp(bracket_id, currentUser?.token);
        setTheChamp(champ);
      }

      setMatches(allMatches);
      setBracketRound(round);
      setBracketCreator(creator);
      setBracketName(name);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get bracket data'));
      setErrorPage(true);
    }
  };

  const handleMatchDisplay = (match) => {
    const {
      awayTeamFullName,
      awayTeamScore,
      homeTeamFullName,
      homeTeamScore,
      matchNumber,
    } = match;

    const message = (
      <>
        <p>
          Matchup #{matchNumber} between {homeTeamFullName} and{' '}
          {awayTeamFullName}.
        </p>
        <p>
          {homeTeamFullName} has {homeTeamScore} votes.
        </p>
        <p>
          {awayTeamFullName} has {awayTeamScore} votes.
        </p>
      </>
    );

    setModalMsg(message);
    setModalIsOpen(true);
  };

  const handleVotes = async (match, team) => {
    const playerId = match[`${team}TeamId`];
    const score = match[`${team}TeamScore`];
    const payload = {
      voteId: match.voteId,
      votedFor: playerId,
      playerCount: team === 'home' ? 'player_a_count' : 'player_b_count',
    };

    if (!match.voteId) {
      setModalMsg(
        `Round ${match.round} has not started yet. Voting is disabled until the round ${match.round} starts`
      );
      setModalIsOpen(true);
      return;
    }

    // Check if matchup has already been voted on
    // Doesn't prevent multiple voting if page is refreshed
    if (hasVoted.some((item) => item === match.voteId)) {
      setModalMsg('You already voted on this matchup');
      setModalIsOpen(true);
      return;
    }

    try {
      await addVotes(payload, currentUser?.token);

      const updateMatch = matches.findIndex(
        (obj) => obj.matchNumber == match.matchNumber
      );

      matches[updateMatch][`${team}TeamScore`] = score + 1;

      addEvent('Bracket Voting', {
        votedFor: match[`${team}TeamName`],
        totalVotes: score + 1,
      });

      // Added to allow voting without being logged in
      setHasVoted((arr) => [...arr, match.voteId]);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes'));
      setModalMsg(err.response.data.message);
      setModalIsOpen(true);
    }
  };

  const handleRules = () => {
    const msg = (
      <div>
        Welcome to the ABZ Bracket. The rules for the Bracket are very simple.
        <p>
          You can vote on a specific matchup. If you click on a character in a
          matchup, that means you are voting for that character to win. Once you
          click on a character, you will no longer be able to vote on that
          specific matchup anymore.
        </p>
        <p>
          You can view matchup details by clicking on the number in between both
          characters in a matchup. A modal will pop up with all the details for
          that matchup.
        </p>
        <p>
          You can click on a round that isn't ready to be voted on, but you will
          get an error message. You have to wait for that round to be active in
          order to make any votes.
        </p>
      </div>
    );

    setModalMsg(msg);
    setModalIsOpen(true);
  };

  const startRound = async () => {
    const { bracket_id } = router.query;

    try {
      switch (bracketRound) {
      case 0:
        await startRound1(bracket_id, currentUser?.token);
        setBracketRound(1);
        break;
      case 1:
        await startRound2(bracket_id, currentUser?.token);
        setBracketRound(2);
        break;
      case 2:
        await startRound3(bracket_id, currentUser?.token);
        setBracketRound(3);
        break;
      case 3:
        await startRound4(bracket_id, currentUser?.token);
        setBracketRound(4);
        break;
      case 4:
        var { champ } = await startChampRound(bracket_id, currentUser?.token);
        setTheChamp(champ);
        break;
      default:
        await startRound1(bracket_id, currentUser?.token);
        break;
      }

      await handleBracketDisplay();
    } catch (err) {
      addEvent(
        'Error',
        responseError(err, `Failed to start the next round - ${bracketRound}`)
      );
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !matches) {
      handleBracketDisplay();
    }
  }, [router.query, winWidth]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Bracket"
        description="Your ABZ Bracket shows all the head-to-head matchups that you want people to vote on. Share your bracket will all your friends or on your social media accounts."
      />
      <$BracketContainer>
        <$GlobalTitle className="bracket">
          {bracketName || 'Bracket'}
          <Button
            btnText="?"
            btnColor="secondary"
            btnFunction={handleRules}
            customBtnClass="small"
          />
        </$GlobalTitle>
        {matches && (
          <>
            <$BracketWrapper>
              <TournamentBracket
                matches={matches}
                width={winWidth > 1200 ? 1170 : winWidth - 30}
                height={winWidth < 900 ? 700 : 400}
                disableStrictBracketSizing={true}
                hidePKs={true}
                orientation={winWidth < 700 ? 'portrait' : 'landscape'}
                onSelectMatch={(match) => handleMatchDisplay(match)}
                onSelectTeam={(match, team) => handleVotes(match, team)}
              />
            </$BracketWrapper>
            <$BracketWrapper className="voting">
              {!theChamp && currentUser?.user_id === bracketCreator && (
                <Button
                  btnText={
                    bracketRound == 4
                      ? 'Get The Champ'
                      : `Start Voting on Round ${bracketRound + 1}`
                  }
                  btnFunction={startRound}
                  btnColor="primary"
                  customBtnClass="medium"
                />
              )}
              {!!theChamp && <h1>The Champion is: {theChamp}</h1>}
            </$BracketWrapper>
            <$BracketWrapper>
              <SocialMedia
                pageTitle="ABZ Bracket"
                title="Anime Bracket matchups"
                description="Bracket features some great anime head-to-head matchups"
                singleHashtag="#abzBracket"
                pluralHashtags={['abz', 'abzBracket', 'animebrothaz']}
                url={pathname}
              />
            </$BracketWrapper>
            <Notification
              message={modalMsg}
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
            />
          </>
        )}
        <Notification
          message={modalMsg}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </$BracketContainer>
    </>
  );
};

export default Bracket;
