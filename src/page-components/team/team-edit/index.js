import React, { useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Button from 'Components/button';
import BackLink from 'Components/back-link/index.js';

const TeamEdit = () => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>Edit Team</$GlobalTitle>
        <div>
          <div>
            <div>Captain</div>
            <div>Brawler</div>
            <div>Brawler</div>
            <div>Brawler Support</div>
            <div>Support</div>
            <div>Villain</div>
            <div>Battlefield</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
          </div>
          <div>
            <div>Captain</div>
            <div>Brawler</div>
            <div>Brawler</div>
            <div>Brawler Support</div>
            <div>Support</div>
            <div>Villain</div>
            <div>Battlefield</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
            <div>Bench</div>
          </div>
          <div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
            <div>Add/Change</div>
          </div>
        </div>
      </$GlobalContainer>
    </>
  );
};

export default TeamEdit;
