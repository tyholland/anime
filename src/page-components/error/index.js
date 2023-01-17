import Button from 'Components/button';
import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $ErrorContent } from './error.style';
import Metadata from 'Components/metadata';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';

const Error = () => {
  const { currentUser } = useAppContext();
  const router = useRouter();
  const [activeStatus, setActiveStatus] = useState(!!currentUser);

  useEffect(() => {
    setActiveStatus(!!currentUser);
  }, [currentUser]);

  return (
    <>
      <Metadata
        title="Page Not Found"
        description="This page does not exist. Please view another page"
      />
      <$GlobalContainer className="grid notFound">
        <$ErrorContent>
          {!activeStatus && (
            <>
              <div>You need to login in order to view this page</div>
              <Button
                btnText="Login"
                redirect={`/login?continue=${router.asPath}`}
                btnColor="primary"
              />
            </>
          )}
          {activeStatus && (
            <>
              <div>
                Ohh no, this page doesn't exist. Check out all the characters we
                offer.
              </div>
              <Button
                btnText="All Characters"
                redirect="/characters"
                btnColor="primary"
              />
            </>
          )}
        </$ErrorContent>
      </$GlobalContainer>
    </>
  );
};

export default Error;
