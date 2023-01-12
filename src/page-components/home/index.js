import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';

const Home = () => {
  return (
    <>
      <Metadata title="Home" description="Anime Brothaz Fantasy League" />
      <$GlobalContainer className="grid home">
        <SelectionCard btnText="Gameplay" redirect="/gameplay" />
        <SelectionCard btnText="Join a League" redirect="/league/join" />
        <SelectionCard btnText="Character List" redirect="/characters" />
        <SelectionCard btnText="Matchup Voting" redirect="/matchup/vote" />
        <SelectionCard btnText="Suggest Character" redirect="/suggest" />
      </$GlobalContainer>
    </>
  );
};

export default Home;
