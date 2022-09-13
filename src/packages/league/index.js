import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import HomeMetadata from './leagueMetadata';
import SelectionCard from 'Components/selection-card';

const League = () => {
  return (
    <>
      <HomeMetadata />
      <$GlobalContainer className="grid logoBg">
        <SelectionCard
          btnText="Join a League"
          btnTextColor="yellow"
          btnColor="black"
          redirect="league/join"
        />
        <SelectionCard
          btnText="Create a League"
          btnTextColor="yellow"
          btnColor="black"
          redirect="league/create"
        />
        <SelectionCard
          btnText="View your League"
          btnTextColor="yellow"
          btnColor="black"
          redirect="league/view"
        />
      </$GlobalContainer>
    </>
  );
};

export default League;
