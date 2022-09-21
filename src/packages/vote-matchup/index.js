import React from 'react';
import { $VoteMatchupCharacter, $VoteMatchupTeam, $VoteMatchupVersus, $VoteMatchupWrapper } from './voteMatchup.style.js';
import Button from 'Components/button';
import BackLink from 'Components/back-link';
import { $GlobalContainer } from 'Styles/global.style.js';

const VoteMatchup = () => {
  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$VoteMatchupWrapper>
          <$VoteMatchupCharacter>Goku</$VoteMatchupCharacter>
          <$VoteMatchupTeam>Jack Of All Trades</$VoteMatchupTeam>
          <Button
            btnText="Vote for Goku"
            btnTextColor="black"
            btnColor="orange"
            customBtnClass="medium"
            btnFunction={() => alert('This functional hasn\'t been created yet')}
          />
          <$VoteMatchupVersus>VS</$VoteMatchupVersus>
          <$VoteMatchupCharacter>Sung Jin Woo</$VoteMatchupCharacter>
          <$VoteMatchupTeam>Z Fighters</$VoteMatchupTeam>
          <Button
            btnText="Vote for Sung Jin Woo"
            btnTextColor="black"
            btnColor="orange"
            customBtnClass="medium"
            btnFunction={() => alert('This functional hasn\'t been created yet')}
          />
        </$VoteMatchupWrapper>
      </$GlobalContainer>
    </>
  );
};

export default VoteMatchup;
