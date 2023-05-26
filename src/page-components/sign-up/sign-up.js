import React, { useEffect, useState } from 'react';
import Button from 'Components/button/button';
import TextField from 'Components/text-field/text-field';
import * as GlobalStyles from 'Styles/global.style.js';
import * as Styles from 'PageComponents/login/login.style.js';
import { addNewAccount } from 'src/requests/users';
import { useAppContext } from 'src/hooks/context';
import Metadata from 'Components/metadata/metadata';
import {
  joinLeagueSetup,
  redirectToAccount,
  redirectUrl,
  responseError,
} from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import ErrorMsg from 'Components/error-msg/error-msg';
import SingleSignOn from 'Components/single-sign-on/single-sign-on';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import * as SignUpStyles from './signUp.style';
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter();
  const { setInitialUser, currentUser } = useAppContext();
  const [userEmail, setUserEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const userErrorMsg = 'Firebase: Error (auth/email-already-in-use).';
  const { join } = router.query;

  const handleSetEmail = (val) => {
    setUserEmail(val);
    setIsDisabled(!val.length || !password.length || !confirmPwd.length);
  };

  const handleSetPassword = (val) => {
    setPassword(val);
    setIsDisabled(!val.length || !userEmail.length || !confirmPwd.length);
  };

  const handleSetConfirmPwd = (val) => {
    setConfirmPwd(val);
    setIsDisabled(!val.length || !password.length || !userEmail.length);
  };

  const handleKeyboardSubmit = async (e) => {
    if (e.key === 'Enter' && !isDisabled) {
      await handleSignUp();
    }
  };

  const handleSignUp = async () => {
    setErrorMsg(null);
    setIsDisabled(true);

    if (password !== confirmPwd) {
      setErrorMsg('Passwords do not match');
      return;
    }

    try {
      const auth = getAuth();
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password
      );

      const user = await addNewAccount({
        email: userEmail,
        firebaseId: firebaseUser.user.uid,
      });

      setInitialUser(user);

      addEvent('Account sign-up', {
        provider: firebaseUser.user.providerData[0].providerId,
      });

      if (join) {
        await joinLeagueSetup(join, user, router);
        return;
      }

      redirectUrl('/league');
    } catch (error) {
      addEvent('Error', responseError(error, 'Sign up'));

      error.message === userErrorMsg
        ? setErrorMsg('Email already exists')
        : setErrorMsg(error.response.data.message);

      setIsDisabled(true);
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser);
  }, []);

  return (
    <>
      <Metadata
        title="Sign Up"
        description="Sign up to join the Anime Fantasy League. Use Google SSO or sign up with your email and password"
      />
      <GlobalStyles.GlobalContainer>
        <Styles.LoginWrapper>
          <GlobalStyles.GlobalTitle>Sign Up</GlobalStyles.GlobalTitle>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <Styles.LoginSectionWrapper>
            <Styles.LoginSection>
              <TextField
                placeholder="Please enter a email"
                keyboard="email-address"
                onChange={handleSetEmail}
                onKeyDown={handleKeyboardSubmit}
              />
              <TextField
                placeholder="Please enter a password"
                type="password"
                onChange={handleSetPassword}
                onKeyDown={handleKeyboardSubmit}
              />
              <TextField
                placeholder="Confirm password"
                type="password"
                onChange={handleSetConfirmPwd}
                onKeyDown={handleKeyboardSubmit}
              />
              <SignUpStyles.SignUpPolicy>
                By signing up, you acknowledge that you have read and understood
                the
                <Button
                  btnText="Privacy Policy"
                  btnColor="primary"
                  customBtnClass="medium text"
                  redirect="/policy"
                />
                .
              </SignUpStyles.SignUpPolicy>
              <Button
                btnText="Sign Up"
                btnColor="primary"
                customBtnClass="medium"
                btnFunction={handleSignUp}
                isDisabled={isDisabled}
                disabledMsg="Please complete all the fields above in order to proceed"
              />
            </Styles.LoginSection>
            <Styles.LoginSection>
              <SingleSignOn buttonText="Sign up" setError={setErrorMsg} />
            </Styles.LoginSection>
          </Styles.LoginSectionWrapper>
          <Styles.LoginContentLinks>
            Already have an account?
            <Button btnText="Login" customBtnClass="text" redirect="/login" />
          </Styles.LoginContentLinks>
        </Styles.LoginWrapper>
      </GlobalStyles.GlobalContainer>
    </>
  );
};

export default SignUp;
