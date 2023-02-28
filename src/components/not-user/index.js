import Button from 'Components/button';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $NotUserContent, $NotUserBtnWrapper } from './notUser.style';
import { useRouter } from 'next/router';

const NotUser = ({ message = null }) => {
  const router = useRouter();

  return (
    <>
      <$GlobalContainer className="bgImage notFound">
        <$NotUserContent>
          <div>
            {!!message && (
              <>
                {message}
                <br />
                <br />
              </>
            )}
            You need to login in order to view this page.
          </div>
        </$NotUserContent>
        <$NotUserBtnWrapper>
          <Button
            btnText="Login"
            redirect={`/login?continue=${router.asPath}`}
            btnColor="primary"
            customBtnClass="medium"
          />
        </$NotUserBtnWrapper>
      </$GlobalContainer>
    </>
  );
};

export default NotUser;
