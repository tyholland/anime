import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import {
  $LoginContentLinks,
  $LoginWrapper,
  $LoginSectionWrapper,
  $LoginSection,
} from 'PageComponents/login/login.style.js';
import { addNewAccount } from 'src/requests/users';
import { useAppContext } from 'src/hooks/context';
import Metadata from 'Components/metadata';
import { redirectToAccount, redirectUrl, responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import ErrorMsg from 'Components/error-msg';
import SingleSignOn from 'Components/single-sign-on';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { $SignUpPolicy } from './signUp.style';

const SignUp = () => {
  const { setInitialUser, currentUser } = useAppContext();
  const [userEmail, setUserEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

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

  const handleSignUp = async () => {
    setErrorMsg(null);

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

      redirectUrl('/league');
    } catch (error) {
      addEvent('Error', responseError(error, 'Sign up'));
      setErrorMsg(error.response.data.message);
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
      <$GlobalContainer>
        <$LoginWrapper>
          <$GlobalTitle>Sign Up</$GlobalTitle>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <$LoginSectionWrapper>
            <$LoginSection>
              <TextField
                placeholder="Please enter a email"
                keyboard="email-address"
                onChange={handleSetEmail}
              />
              <TextField
                placeholder="Please enter a password"
                type="password"
                onChange={handleSetPassword}
              />
              <TextField
                placeholder="Confirm password"
                type="password"
                onChange={handleSetConfirmPwd}
              />
              <$SignUpPolicy>
                By signing up, you acknowledge that you have read and understood
                the
                <Button
                  btnText="Privacy Policy"
                  btnColor="primary"
                  customBtnClass="medium text"
                  redirect="/policy"
                />
                .
              </$SignUpPolicy>
              <Button
                btnText="Sign Up"
                btnColor="primary"
                customBtnClass="medium"
                btnFunction={handleSignUp}
                isDisabled={isDisabled}
              />
            </$LoginSection>
            <$LoginSection>
              <SingleSignOn buttonText="Sign up" setError={setErrorMsg} />
            </$LoginSection>
          </$LoginSectionWrapper>
          <$LoginContentLinks>
            Already have an account?
            <Button btnText="Login" customBtnClass="text" redirect="/login" />
          </$LoginContentLinks>
        </$LoginWrapper>
      </$GlobalContainer>
    </>
  );
};

export default SignUp;
