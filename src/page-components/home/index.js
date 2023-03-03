import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';
import ReadMore from 'Components/read-more';

const Home = () => {
  return (
    <>
      <Metadata title="Home" description="Anime Brothaz Fantasy League" />
      <$GlobalContainer className="bgImage home">
        <$GlobalTitle className="home">Anime Fantasy League</$GlobalTitle>
        <$GlobalContainer>
          <div className="buttonGrid">
            <SelectionCard
              btnText="Create Bracket"
              redirect="/bracket/create"
            />
            <SelectionCard btnText="Join a League" redirect="/league/join" />
            <SelectionCard btnText="Character List" redirect="/characters" />
            <SelectionCard btnText="Matchup Voting" redirect="/matchup/all" />
            <SelectionCard btnText="Suggest Character" redirect="/suggest" />
          </div>
        </$GlobalContainer>
        <ReadMore>
          Welcome to the world of elemental battles! In this game, there are 10
          elemental affinities to master: fire, water, electricity, earth, wind,
          darkness, celestial, arcane, ice, and non-elemental. Heroes, villains,
          supports, and battlefields can have their power levels boosted or
          reduced based on their affinities. Make sure to choose your characters
          wisely and consider their elemental strengths and weaknesses before
          entering battle. Most characters have one or two affinities at most.
          <br />
          <br />
          But watch out, there are a few characters in the game that possess
          more than three elemental affinities. These characters are known as
          the "omega" affinity and can be boosted by any element. So, whether
          you prefer your team to use the power of fire or the force of ice,
          there's an elemental affinity for everyone to master in this game.
          Good luck in your battles! And remember, a well-balanced team is
          always best!
        </ReadMore>
      </$GlobalContainer>
    </>
  );
};

export default Home;
