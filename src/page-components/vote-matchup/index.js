import React from 'react';
import {
  $VoteMatchupCharacter,
  $VoteMatchupTeam,
  $VoteMatchupVersus,
  $VoteMatchupWrapper,
  $VoteMatchupSection,
  $VoteMatchupImage,
} from './voteMatchup.style.js';
import Button from 'Components/button';
import BackLink from 'Components/back-link';
import { $GlobalContainer } from 'Styles/global.style.js';

const VoteMatchup = () => {
  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$VoteMatchupWrapper>
          <$VoteMatchupSection>
            <$VoteMatchupImage src="/assets/profile/unknown.png" alt="Goku" />
            <$VoteMatchupCharacter>Goku</$VoteMatchupCharacter>
            <$VoteMatchupTeam>Jack Of All Trades</$VoteMatchupTeam>
            <Button
              btnText="Vote for Goku"
              btnTextColor="black"
              btnColor="orange"
              customBtnClass="medium"
              btnFunction={() =>
                alert('This functional hasn\'t been created yet')
              }
            />
          </$VoteMatchupSection>
          <$VoteMatchupSection>
            <$VoteMatchupVersus>VS</$VoteMatchupVersus>
          </$VoteMatchupSection>
          <$VoteMatchupSection>
            <$VoteMatchupImage
              src="/assets/profile/unknown.png"
              alt="Sung Jin Woo"
            />
            <$VoteMatchupCharacter>Sung Jin Woo</$VoteMatchupCharacter>
            <$VoteMatchupTeam>Z Fighters</$VoteMatchupTeam>
            <Button
              btnText="Vote for Sung Jin Woo"
              btnTextColor="black"
              btnColor="orange"
              customBtnClass="medium"
              btnFunction={() =>
                alert('This functional hasn\'t been created yet')
              }
            />
          </$VoteMatchupSection>
        </$VoteMatchupWrapper>
      </$GlobalContainer>
    </>
  );
};

export default VoteMatchup;
