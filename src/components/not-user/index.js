import Button from 'Components/button';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $NotUserContent } from './notUser.style';
import { useRouter } from 'next/router';

const NotUser = () => {
  const router = useRouter();

  return (
    <>
      <$GlobalContainer className="grid bgImage notFound">
        <$NotUserContent>
          <div>You need to login in order to view this page</div>
          <Button
            btnText="Login"
            redirect={`/login?continue=${router.asPath}`}
            btnColor="primary"
          />
        </$NotUserContent>
      </$GlobalContainer>
    </>
  );
};

export default NotUser;
