import React from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import { $JoinLeagueWrapper } from './join.style';
import Metadata from 'Components/metadata';

const JoinLeague = () => {
  return (
    <>
      <Metadata
        title="Join a League"
        description="Join an ABZ League and see if you can create the ultimate team and win the league"
      />
      <BackLink />
      <$GlobalContainer className="join">
        <$GlobalTitle>Join League</$GlobalTitle>
        <$JoinLeagueWrapper>
          <TextField placeholder="Enter your league code" />
          <Button
            btnText="Enter League"
            btnColor="primary"
            redirect="/league/123"
            customBtnClass="medium"
          />
        </$JoinLeagueWrapper>
      </$GlobalContainer>
    </>
  );
};

export default JoinLeague;
