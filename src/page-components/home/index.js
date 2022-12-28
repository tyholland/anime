import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';

const Home = () => {
  return (
    <>
      <Metadata title="Home" description="Anime Brothaz Fantasy League" />
      <$GlobalContainer className="grid home">
        <SelectionCard
          btnText="Gameplay"
          btnTextColor="black"
          btnColor="orange"
          redirect="/gameplay"
        />
        <SelectionCard
          btnText="Join a League"
          btnTextColor="black"
          btnColor="orange"
          redirect="/league/join"
        />
        <SelectionCard
          btnText="Character List"
          btnTextColor="black"
          btnColor="orange"
          redirect="/characters"
        />
        <SelectionCard
          btnText="Matchup Voting"
          btnTextColor="black"
          btnColor="orange"
          redirect="/matchup/vote"
        />
        <SelectionCard
          btnText="Suggest Character"
          btnTextColor="black"
          btnColor="orange"
          redirect="/suggest"
        />
      </$GlobalContainer>
    </>
  );
};

export default Home;
