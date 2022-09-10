import React from 'react';
import { $GlobalStyles } from 'Styles/global.style';
import Button from 'Components/button';

const Home = ({ setPage }) => {
  return (
    <>
      <$GlobalStyles />
      <div className="container">
        <div className="title">Choose Your Path</div>
        <Button
          btnText="View Your League(s)"
          btnTextColor="yellow"
          btnColor="black"
          redirect={() => setPage('ViewLeague')}
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
      </div>
    </>
  );
};

export default Home;
