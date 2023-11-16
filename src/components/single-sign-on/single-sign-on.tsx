import React, { useEffect, useState } from 'react';
import Button from 'Components/button/button';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  UserCredential,
  getAdditionalUserInfo,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import { addEvent } from 'Utils/amplitude';
import {
  joinLeagueSetup,
  redirectToContinuePage,
  redirectUrl,
  responseError,
} from 'Utils/index';
import { useRouter } from 'next/router';
import { accountExists, accountLogin, addNewAccount } from 'Requests/users';
import { useUserContext } from 'Hooks/user';
import Loader from 'Components/loader/loader';
import Image from 'next/image';
import { FacebookIcon } from 'react-share';
import { SingleSignOnProps } from 'Utils/types';
import { isMobile } from 'react-device-detect';

const SingleSignOn = ({
  buttonText = 'Login',
  setError,
}: SingleSignOnProps) => {
  const router = useRouter();
  const { updateCurrentUser } = useUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserCredential | null>(null);
  const { join } = router.query;

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const firebaseUser = isMobile
        ? await signInWithRedirect(auth, provider)
        : await signInWithPopup(auth, provider);

      setCurrentUser(firebaseUser);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed google sso'));
    }
  };

  const handleFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    try {
      const firebaseUser = isMobile
        ? await signInWithRedirect(auth, provider)
        : await signInWithPopup(auth, provider);

      setCurrentUser(firebaseUser);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed facebook sso'));
    }
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setIsDisabled(true);

      const { isNewUser } = getAdditionalUserInfo(currentUser);
      const eventName = isNewUser ? 'Account login' : 'Account sign-up';
      const payload = {
        email: currentUser?.user.email,
        firebaseId: currentUser?.user.uid,
      };
      const { exists } = await accountExists(payload);

      const user = exists
        ? await accountLogin(payload)
        : await addNewAccount(payload);

      updateCurrentUser(user);

      addEvent(eventName, {
        provider: currentUser?.user.providerData[0].providerId,
      });

      if (join) {
        await joinLeagueSetup(join as string, user, router);
        return;
      }

      isNewUser ? redirectToContinuePage(router) : redirectUrl('/account');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get SSO user data'));
      setIsLoading(false);
      setIsDisabled(false);

      !err.response
        ? setError(err.message)
        : setError(err.response.data.message);
    }
  };

  const handleGoogleRedirect = async () => {
    const auth = getAuth();
    try {
      const res = await getRedirectResult(auth);
      setCurrentUser(res);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed sso redirect'));
    }
  };

  useEffect(() => {
    if (currentUser) {
      handleLogin();
    } else {
      handleGoogleRedirect();
    }
  }, [currentUser]);

  return (
    <>
      <Button
        btnColor="social"
        customBtnClass="medium"
        btnFunction={handleGoogle}
        isDisabled={isDisabled}
        disabledMsg="Loading..."
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
        disabledMsg="Loading..."
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
