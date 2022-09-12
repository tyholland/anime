import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import HomeMetadata from './HomeMetadata';
import Card from 'Components/card';

const Home = ({ setPage }) => {
  return (
    <>
      <HomeMetadata />
      <$GlobalContainer className="grid logoBg">
        <Card
          btnText="Gameplay"
          btnTextColor="black"
          btnColor="orange"
          redirect="gameplay"
        />
        <Card
          btnText="Join a League"
          btnTextColor="black"
          btnColor="orange"
          redirect="league/join"
        />
        <Card
          btnText="Character List"
          btnTextColor="black"
          btnColor="orange"
          redirect="characters"
        />
        <Card
          btnText="Vote on Matchup"
          btnTextColor="black"
          btnColor="orange"
          redirect={() => alert('This page hasn\'t been created yet')}
        />
      </$GlobalContainer>
    </>
  );
};

export default Home;
