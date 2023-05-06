import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';
import GameplayCard from 'Components/gameplay-card';
import SuggestCharacter from 'Components/suggest-character';
import Button from 'Components/button';
import { allSeries } from 'Utils/constants';
import Image from 'next/image';

const Home = () => {
  const goToSharePage = () => {
    window.open('https://www.buzzsprout.com/1260827/share');
  };

  return (
    <>
      <Metadata title="Home" description="Anime Fantasy League" />
      <$GlobalContainer className="bgImage home">
        <$GlobalTitle className="home">Anime Fantasy League</$GlobalTitle>
        <$GlobalContainer className="home">
          <div className="buttonGrid">
            <SelectionCard btnText="Create League" redirect="/league/create" />
            <SelectionCard
              btnText="Create Bracket"
              redirect="/bracket/create"
            />
            <SelectionCard btnText="Matchup Voting" redirect="/matchup/all" />
            <SelectionCard btnText="View Characters" redirect="/characters" />
            <SelectionCard btnText="Suggest Character" redirect="/#suggest" />
            <SelectionCard btnText="ABZ Podcast" redirect="/#podcast" />
          </div>
        </$GlobalContainer>
      </$GlobalContainer>
      <$GlobalContainer className="homeSection homeEven">
        <$GlobalTitle>Welcome to the world of elemental battles!</$GlobalTitle>
        This is a weekly fantasy game that takes place over 12 weeks. Build a
        team of your favorite manga and anime characters. Wage weekly battles
        against your friends for victory. You can enter a public league or group
        up with friends to start your own private league. In this game, we have
        categorized heroes based on ten elemental affinities to master: fire,
        water, electricity, earth, wind, darkness, celestial, arcane, ice, and
        those with no affinity.
        <p>
          Heroes, villains, supports, and battlefields can have their power
          levels boosted or reduced based on their affinities. Make sure to
          choose your characters wisely and consider their elemental strengths
          and weaknesses before entering battle. Most characters have one or two
          affinities.
        </p>
        <p>
          Beware, there are a few characters and battlefields in the game that
          possess more than three elemental affinities. These omega affinity
          characters can be boosted by any element.
        </p>
        <p>
          No match is predetermined. Even the most powerful fighters can succumb
          to the power of a well-made team. We have multiple modifiers in place
          to take your power level far over 9000! Supports, battlefields, and
          the weekly affinity drop will all increase your team's power. However,
          villains and some enemy battlefields will decrease your team's
          fighting strength.
        </p>
        <p>
          Lastly, be sure to share your matches when they go live! Players and
          non-players can vote on any live match. The winner of the vote gets a
          power boost while the loser receives a power loss. Your friends can
          make the difference between winning and losing!
        </p>
        <p>
          So, whether you prefer your team to use the power of fire or the force
          of ice, there's an elemental affinity for everyone to master in this
          game. Good luck in your battles! And remember, a well-balanced team is
          always best!
        </p>
      </$GlobalContainer>
      <$GlobalContainer className="homeSection">
        <GameplayCard />
      </$GlobalContainer>
      <$GlobalContainer className="homeSection homeEven" id="suggest">
        <SuggestCharacter />
      </$GlobalContainer>
      <$GlobalContainer className="homeSection" id="podcast">
        <$GlobalTitle className="podcast">
          <Image
            src="/assets/logo/abz-logo.webp"
            width={70}
            height={70}
            alt="Anime Brothaz"
          />
          Podcast
        </$GlobalTitle>
        <p>
          The ABZ podcast is recorded by the Brothaz (DiscipleDashni, QuietJams,
          and TySoFly), who get together to discuss a wide variety of topics
          within the anime community. Topics can range from, but are not limited
          to, the latest episodes, manga chapters, favorite characters, and so
          on. You can listen to all the ABZ podcast episodes here and now. We
          have an abundance of episodes to choose from, ranging from 30 minutes
          to an hour. Enjoy!
        </p>
        <p>
          To listen to our podcast, click the link below. It will take you to a
          page where you can choose your favorite podcast application, and then
          you can listen to all the ABZ podcast episodes that are available. Be
          sure to listen to episode 1 if you are new to the ABZ podcast channel.
        </p>
        <center>
          <Button
            btnText="ABZ Podcast"
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={goToSharePage}
          />
        </center>
      </$GlobalContainer>
      <$GlobalContainer className="homeSection homeEven">
        <$GlobalTitle>Anime Series</$GlobalTitle>
        <div className="seriesTitle">
          A list of all the anime series from which the characters in this game
          originate.
        </div>
        <div className="series">
          {allSeries.sort().map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      </$GlobalContainer>
    </>
  );
};

export default Home;
