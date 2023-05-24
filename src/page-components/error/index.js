import Button from 'Components/button';
import React from 'react';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './error.style';
import Metadata from 'Components/metadata';

const Error = () => {
  return (
    <>
      <Metadata
        title="Page Not Found"
        description="This page is not a valid page. Please view another page"
      />
      <GlobalStyles.GlobalContainer className="bgImage notFound">
        <Styles.ErrorContent>
          <div>
            Unfortunately, the URL that you have entered is not a valid page.
            Although this page is not valid, we have plenty of other things to
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
        </Styles.ErrorContent>
        <Styles.ErrorBtnWrapper>
          <Button
            btnText="Create a League"
            redirect="/league/create"
            btnColor="primary"
            customBtnClass="medium"
          />
          <Button
            btnText="Create a Bracket"
            redirect="/bracket/create"
            btnColor="primary"
            customBtnClass="medium"
          />
          <Button
            btnText="View All Characters"
            redirect="/characters"
            btnColor="primary"
            customBtnClass="medium"
          />
        </Styles.ErrorBtnWrapper>
      </GlobalStyles.GlobalContainer>
    </>
  );
};

export default Error;
