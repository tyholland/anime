import React, { useEffect, useState } from 'react';
import Metadata from 'Components/metadata/metadata';
import TournamentBracket from 'react-svg-tournament-bracket';
import {
  getBracket,
  getTheChamp,
  startChampRound,
  startRound1,
  startRound2,
  startRound3,
  startRound4,
  addBracketVotes,
} from 'Requests/bracket';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { useUserContext } from 'Hooks/user';
import * as Styles from './bracket.style';
import SocialMedia from 'Components/social-media/social-media';
import Notification from 'Modals/notification/notification';
import * as GlobalStyles from 'Styles/global.style';
import Error from 'PageComponents/error/error';
import Button from 'Components/button/button';
import BracketVoting from 'Modals/bracket-voting/bracket-voting';

const Bracket = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [matches, setMatches] = useState(null);
  const [winWidth, setWinWidth] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bracketIsOpen, setBracketIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState(null);
  const [errorPage, setErrorPage] = useState(null);
  const [bracketRound, setBracketRound] = useState(null);
  const [bracketCreator, setBracketCreator] = useState(null);
  const [bracketName, setBracketName] = useState(null);
  const [theChamp, setTheChamp] = useState(null);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [match, setMatch] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [roundWinner, setRoundWinner] = useState(null);
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

  const closeBracketModal = () => {
    setErrorMsg(null);
    setBracketIsOpen(false);
    setRoundWinner(null);
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
    const { homeTeamPlayer, awayTeamPlayer, voteId, round } = match;

    if (!voteId) {
      setModalMsg(
        `Round ${round} has not started yet. Voting is disabled until the round ${round} starts`
      );
      setModalIsOpen(true);
      return;
    }

    if (round < bracketRound) {
      setRoundWinner(match);
    }

    setPlayerA(homeTeamPlayer);
    setPlayerB(awayTeamPlayer);
    setMatch(match);
    setBracketIsOpen(true);
  };

  const handleVotes = async (match, team, payload) => {
    const score = match[`${team}TeamScore`];

    try {
      await addBracketVotes(payload);

      addEvent('Bracket Voting', {
        votedFor: match[`${team}TeamName`],
        totalVotes: score + 1,
        userId: currentUser?.user_id
      });

      const updateMatch = matches.findIndex(
        (obj) => obj.matchNumber == match.matchNumber
      );

      matches[updateMatch][`${team}TeamScore`] = score + 1;

      return matches[updateMatch];
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes - Part 1'));
      setErrorMsg(err.response.data.message);
      return match;
    }
  };

  const handleRules = () => {
    const msg = (
      <div>
        Welcome to the AFL Bracket. The rules for the Bracket are very simple.
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
        description="Your AFL Bracket shows all the head-to-head matchups that you want people to vote on. Share your bracket will all your friends or on your social media accounts."
      />
      <Styles.BracketContainer>
        <GlobalStyles.GlobalTitle className="bracket">
          {bracketName || 'Bracket'}
          <Button
            btnText="?"
            btnColor="secondary"
            btnFunction={handleRules}
            customBtnClass="small"
          />
        </GlobalStyles.GlobalTitle>
        {matches && (
          <>
            <Styles.BracketWrapper className="grid">
              <TournamentBracket
                matches={matches}
                width={
                  winWidth > 700 && winWidth < 1200
                    ? winWidth - 85
                    : winWidth > 1200 && 1100
                }
                height={winWidth < 900 ? 700 : 400}
                disableStrictBracketSizing={true}
                hidePKs={true}
                orientation={winWidth < 700 ? 'portrait' : 'landscape'}
                onSelectMatch={(match) => handleMatchDisplay(match)}
                onSelectTeam={(match) => handleMatchDisplay(match)}
              />
            </Styles.BracketWrapper>
            <Styles.BracketWrapper className="voting">
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
              {!!theChamp && (
                <h1>
                  <div>The Champion is:</div>
                  <div>{theChamp}</div>
                </h1>
              )}
            </Styles.BracketWrapper>
            <Styles.BracketWrapper>
              <SocialMedia
                pageTitle="AFL Bracket"
                title="Anime Bracket matchups"
                description="Bracket features some great anime head-to-head matchups"
                singleHashtag="#aflBracket"
                pluralHashtags={['afl', 'aflBracket', 'bracket']}
                url={pathname}
              />
            </Styles.BracketWrapper>
            <BracketVoting
              isModalOpen={bracketIsOpen}
              playerA={playerA}
              playerB={playerB}
              match={match}
              handleVotes={handleVotes}
              errorMsg={errorMsg}
              setErrorMsg={setErrorMsg}
              closeModal={closeBracketModal}
              roundWinner={roundWinner}
            />
          </>
        )}
        <Notification
          message={modalMsg}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </Styles.BracketContainer>
    </>
  );
};

export default Bracket;
