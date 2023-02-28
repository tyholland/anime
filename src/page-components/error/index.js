import Button from 'Components/button';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $ErrorContent, $ErrorBtnWrapper } from './error.style';
import Metadata from 'Components/metadata';

const Error = () => {
  return (
    <>
      <Metadata
        title="Page Not Found"
        description="This page does not exist. Please view another page"
      />
      <$GlobalContainer className="bgImage notFound">
        <$ErrorContent>
          <div>
            Unfortunately, the URL that you have entered does not exist.
            Although this page does not exist, we have plenty of other things to
            do on our site, such as creating a league. Once you create your
            league, invite all your friends and battle your teams against one
            another. You can also create a bracket of characters that you would
            like to see in a head-to-head battle. Get your friends to vote on
            these battles as they progress through the rounds until declaring a
            winner in the championship round. Lastly, just go take a look at all
            the characters that are available to be used in the Fantasy League
            or the Brackets. Also, feel free to submit a new character to be
            used on the site as well.
          </div>
        </$ErrorContent>
        <$ErrorBtnWrapper>
          <Button
            btnText="Create a League"
            redirect="/league/create"
            btnColor="primary"
            customBtnClass="medium"
          />
          <Button
            btnText="Create a Bracket"
            redirect="/bracket"
            btnColor="primary"
            customBtnClass="medium"
          />
          <Button
            btnText="View All Characters"
            redirect="/characters"
            btnColor="primary"
            customBtnClass="medium"
          />
        </$ErrorBtnWrapper>
      </$GlobalContainer>
    </>
  );
};

export default Error;
