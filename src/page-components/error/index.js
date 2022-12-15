import Button from 'Components/button';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import ErrorMetadata from './errorMetadata';
import { $ErrorContent } from './error.style';

const Error = () => {
  return (
    <>
      <ErrorMetadata />
      <$GlobalContainer className="grid notFound">
        <$ErrorContent>
          <div>
            Ohh no, this page doesn't exist. Check out all the characters we offer.
          </div>
          <Button
            btnText="All Characters"
            redirect="/characters"
            btnColor="orange"
          />
        </$ErrorContent>
      </$GlobalContainer>
    </>
  );
};

export default Error;
