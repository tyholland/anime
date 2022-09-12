import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import HomeMetadata from './LeagueMetadata';
import Card from 'Components/card';

const League = () => {
  return (
    <>
      <HomeMetadata />
      <$GlobalContainer className="grid logoBg">
        <Card
          btnText="Join a League"
          btnTextColor="yellow"
          btnColor="black"
          redirect="league/join"
        />
        <Card
          btnText="Create a League"
          btnTextColor="yellow"
          btnColor="black"
          redirect="league/create"
        />
        <Card
          btnText="View your League"
          btnTextColor="yellow"
          btnColor="black"
          redirect="characters"
        />
      </$GlobalContainer>
    </>
  );
};

export default League;
