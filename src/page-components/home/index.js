import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import HomeMetadata from './homeMetadata';
import SelectionCard from 'Components/selection-card';

const Home = () => {
  return (
    <>
      <HomeMetadata />
      <$GlobalContainer className="grid home">
        <SelectionCard
          btnText="Gameplay"
          btnTextColor="black"
          btnColor="orange"
          redirect="gameplay"
        />
        <SelectionCard
          btnText="Join a League"
          btnTextColor="black"
          btnColor="orange"
          redirect="league/join"
        />
        <SelectionCard
          btnText="Character List"
          btnTextColor="black"
          btnColor="orange"
          redirect="characters"
        />
        <SelectionCard
          btnText="Matchup Voting"
          btnTextColor="black"
          btnColor="orange"
          redirect="/matchup/vote"
        />
      </$GlobalContainer>
    </>
  );
};

export default Home;
