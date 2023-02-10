import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from 'firebase/auth';
import { addEvent } from 'Utils/amplitude';
import {
  redirectToContinuePage,
  redirectUrl,
  responseError,
} from 'Utils/index';
import { useRouter } from 'next/router';
import { accountLogin, addNewAccount } from 'src/requests/users';
import { useAppContext } from 'src/hooks/context';
import Loader from 'Components/loader';

const SingleSignOn = ({ buttonText = 'Login', setError }) => {
  const router = useRouter();
  const { setInitialUser } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      await signInWithRedirect(auth, provider);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed google sso'));
    }
  };

  const handleFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    try {
      await signInWithRedirect(auth, provider);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed facebook sso'));
    }
  };

  const handleRedirect = async () => {
    const auth = getAuth();

    try {
      const firebaseUser = await getRedirectResult(auth);
      setCurrentUser(firebaseUser);

      if (!firebaseUser) {
        return;
      }

      setIsLoading(true);

      const isLogin = buttonText === 'Login';
      const eventName = isLogin ? 'Account login' : 'Account sign-up';

      const user = isLogin
        ? await accountLogin({
          email: firebaseUser?.user.email,
          firebaseUID: firebaseUser?.user.uid,
        })
        : await addNewAccount({
          userEmail: firebaseUser?.user.email,
          firebaseId: firebaseUser?.user.uid,
        });

      setInitialUser(user);

      addEvent(eventName, {
        provider: firebaseUser?.user.providerData[0].providerId,
      });

      isLogin ? redirectToContinuePage(router) : redirectUrl('/league');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get SSO user data'));
      setIsLoading(false);

      !err.response
        ? setError(err.message)
        : setError(err.response.data.message);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      handleRedirect();
    }
  }, [currentUser]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Button
        btnText={`${buttonText} with Google`}
        btnColor="social"
        customBtnClass="medium"
        btnFunction={handleGoogle}
      />
      <Button
        btnText={`${buttonText} with Facebook`}
        btnColor="social"
        customBtnClass="medium"
        btnFunction={handleFacebook}
      />
    </>
  );
};

export default SingleSignOn;
