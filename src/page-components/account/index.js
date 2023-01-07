import Affinities from 'Components/gameplay-card/affinities';
import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from 'PageComponents/gameplay/gameplay.style';
import MakeTeam from 'Components/gameplay-card/make-team';
import Schedule from 'Components/gameplay-card/schedule';
import Metadata from 'Components/metadata';

const Account = () => {
  return (
    <>
      <$GameplayStyles />
      <Metadata
        title="Account"
        description="Look at your profile, update username, and your password. Delete your account if you must."
      />
      <$GlobalContainer>
        <$GlobalTitle>Account</$GlobalTitle>
        <Collapsible trigger="Profile" triggerTagName="div">
          <MakeTeam />
        </Collapsible>
        <Collapsible trigger="Change Password" triggerTagName="div">
          <Schedule />
        </Collapsible>
        <Collapsible trigger="Delete Account" triggerTagName="div">
          <Affinities />
        </Collapsible>
      </$GlobalContainer>
    </>
  );
};

export default Account;
