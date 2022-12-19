import React, { useState } from 'react';
import { $TeamInfoContent, $TeamInfoTitle, $TeamInfoBtn, $TeamInfoStats, $TeamInfoWrapper } from './teamInfo.style.js';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link/index.js';

const TeamInfo = () => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>Team Info</$GlobalTitle>
        <$TeamInfoWrapper>
          <div>
            <$TeamInfoTitle>Team Name:</$TeamInfoTitle>
            { edit && (
              <TextField placeholder="Enter Team Name" />
            )}
            { !edit && (
              <$TeamInfoContent>Jack Of All Trades</$TeamInfoContent>
            )}
            <$TeamInfoBtn>
              <Button
                btnText={edit ? 'Save' : 'Edit'}
                btnTextColor="black"
                btnColor="orange"
                btnFunction={() => setEdit(!edit)}
                customBtnClass="medium"
              />
              { edit && (
                <Button
                  btnText="Cancel"
                  btnTextColor="white"
                  btnColor="red"
                  btnFunction={() => setEdit(false)}
                  customBtnClass="medium"
                />
              )}
            </$TeamInfoBtn>
          </div>
          <div>
            <$TeamInfoStats><span>Record:</span> 4-1</$TeamInfoStats>
            <$TeamInfoStats><span>Points Remaining:</span> 1000 pts</$TeamInfoStats>
          </div>
        </$TeamInfoWrapper>
      </$GlobalContainer>
    </>
  );
};

export default TeamInfo;
