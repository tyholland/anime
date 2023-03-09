import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { addEvent } from 'Utils/amplitude';
import {
  joinLeagueSetup,
  redirectToContinuePage,
  redirectUrl,
  responseError,
} from 'Utils/index';
import { useRouter } from 'next/router';
import { accountExists, accountLogin, addNewAccount } from 'src/requests/users';
import { useAppContext } from 'src/hooks/context';
import Loader from 'Components/loader';
import Image from 'next/image';
import { FacebookIcon } from 'react-share';

const SingleSignOn = ({ buttonText = 'Login', setError }) => {
  const router = useRouter();
  const { setInitialUser } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { join } = router.query;

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const firebaseUser = await signInWithPopup(auth, provider);

      setCurrentUser(firebaseUser);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed google sso'));
    }
  };

  const handleFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    try {
      const firebaseUser = await signInWithPopup(auth, provider);

      setCurrentUser(firebaseUser);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed facebook sso'));
    }
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setIsDisabled(true);

      const isLogin = currentUser?.operationType === 'signIn';
      const eventName = isLogin ? 'Account login' : 'Account sign-up';
      const payload = {
        email: currentUser?.user.email,
        firebaseId: currentUser?.user.uid,
      };
      const { exists } = await accountExists(payload);

      const user = exists
        ? await accountLogin(payload)
        : await addNewAccount(payload);

      setInitialUser(user);

      addEvent(eventName, {
        provider: currentUser?.user.providerData[0].providerId,
      });

      if (join) {
        await joinLeagueSetup(join, user, router);
        return;
      }

      isLogin ? redirectToContinuePage(router) : redirectUrl('/league');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get SSO user data'));
      setIsLoading(false);
      setIsDisabled(false);

      !err.response
        ? setError(err.message)
        : setError(err.response.data.message);
    }
  };

  useEffect(() => {
    if (currentUser) {
      handleLogin();
    }
  }, [currentUser]);

  return (
    <>
      <Button
        btnColor="social"
        customBtnClass="medium"
        btnFunction={handleGoogle}
        isDisabled={isDisabled}
      >
        {isLoading ? (
          <Loader isSmall={true} />
        ) : (
          <>
            <Image
              src="/assets/icons/google-icon.webp"
              width={20}
              height={20}
              alt="Google Icon"
            />
            <span>{`${buttonText} with Google`}</span>
          </>
        )}
      </Button>
      <Button
        btnColor="social"
        customBtnClass="medium"
        btnFunction={handleFacebook}
        isDisabled={isDisabled}
      >
        {isLoading ? (
          <Loader isSmall={true} />
        ) : (
          <>
            <FacebookIcon size={20} round={true} />
            <span>{`${buttonText} with Facebook`}</span>
          </>
        )}
      </Button>
    </>
  );
};

export default SingleSignOn;
