import Button from 'Components/button';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $ErrorContent } from './error.style';
import Metadata from 'Components/metadata';

const Error = () => {
  return (
    <>
      <Metadata
        title="Page Not Found"
        description="This page does not exist. Please view another page"
      />
      <$GlobalContainer className="grid notFound">
        <$ErrorContent>
          <div>
            Ohh no, this page doesn't exist. Check out all the characters we
            offer.
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
