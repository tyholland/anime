import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';

const Home = () => {
  return (
    <>
      <Metadata title="Home" description="Anime Brothaz Fantasy League" />
      <$GlobalContainer className="home">
        <$GlobalTitle className="home">ABZ Fantasy League</$GlobalTitle>
        <$GlobalContainer className="grid">
          <SelectionCard btnText="Gameplay" redirect="/gameplay" />
          <SelectionCard btnText="Join a League" redirect="/league/join" />
          <SelectionCard btnText="Character List" redirect="/characters" />
          <SelectionCard btnText="Matchup Voting" redirect="/matchup/vote" />
          <SelectionCard btnText="Suggest Character" redirect="/suggest" />
        </$GlobalContainer>
      </$GlobalContainer>
    </>
  );
};

export default Home;
