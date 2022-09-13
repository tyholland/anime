import React from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import { $JoinLeagueWrapper } from './join.style';
import JoinLeagueMetadata from './joinLeagueMetadata';

const JoinLeague = () => {
  return (
    <>
      <JoinLeagueMetadata />
      <$GlobalContainer>
        <BackLink redirect="/league" />
        <$GlobalTitle>Join League</$GlobalTitle>
        <$JoinLeagueWrapper>
          <TextField placeholder="Enter your league code" />
          <Button
            btnText="Enter League"
            btnTextColor="black"
            btnColor="orange"
            redirect="league/123"
            customBtnClass="medium"
          />
        </$JoinLeagueWrapper>
      </$GlobalContainer>
    </>
  );
};

export default JoinLeague;
