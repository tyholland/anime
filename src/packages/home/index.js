import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Button from 'Components/button';
import HomeMetadata from './HomeMetadata';

const Home = ({ setPage }) => {
  return (
    <>
      <HomeMetadata />
      <$GlobalContainer>
        <$GlobalTitle>Choose Your Path</$GlobalTitle>
        <Button
          btnText="View Your League(s)"
          btnTextColor="yellow"
          btnColor="black"
          redirect={'leagues'}
        />
        <Button
          btnText="Vote on a Matchup"
          btnTextColor="black"
          btnColor="yellow"
          redirect={() => setPage('VoteMatchup')}
        />
        <Button
          btnText="Join a League"
          btnTextColor="white"
          btnColor="blue"
          redirect={() => setPage('JoinLeague')}
        />
        <Button
          btnText="Create a League"
          btnTextColor="black"
          btnColor="orange"
          redirect={() => alert('This page hasn\'t been created yet')}
        />
      </$GlobalContainer>
    </>
  );
};

export default Home;
