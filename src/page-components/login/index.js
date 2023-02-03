import React, { useEffect, useState } from 'react';
import {
  $LoginContentLinks,
  $LoginWrapper,
  $LoginSectionWrapper,
  $LoginSection,
} from './login.style.js';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Metadata from 'Components/metadata/index.js';
import { useRouter } from 'next/router.js';
import { useAppContext } from 'src/hooks/context.js';
import {
  redirectToAccount,
  redirectToContinuePage,
  responseError,
} from 'Utils/index.js';
import { accountLogin } from 'src/requests/users.js';
import { addEvent } from 'Utils/amplitude.js';
import Loader from 'Components/loader/index.js';
import ErrorMsg from 'Components/error-msg/index.js';

const Login = () => {
  const router = useRouter();
  const { currentUser, setInitialUser } = useAppContext();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleDisabledState = (val) => {
    setEmail(val);
    setIsDisabled(!val.length);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const user = await accountLogin({
        email,
        firebaseUID: '789',
      });

      setInitialUser(user);

      addEvent('Account login');

      redirectToContinuePage(router);
    } catch (err) {
      addEvent('Error', responseError(err, 'Login'));
      setIsLoading(false);
      setErrorMsg(err.response.data.message);
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Metadata
        title="Login"
        description="Login to the ABZ Fantasy League. Use Google SSO or login with your email and password"
      />
      <$GlobalContainer>
        <$LoginWrapper>
          <$GlobalTitle>Login</$GlobalTitle>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <$LoginSectionWrapper>
            <$LoginSection>
              <TextField
                placeholder="Email"
                keyboard="email-address"
                onChange={handleDisabledState}
              />
              <TextField placeholder="Password" type="password" />
              <Button
                btnText="Login"
                btnColor="primary"
                customBtnClass="medium"
                btnFunction={handleLogin}
                isDisabled={isDisabled}
              />
            </$LoginSection>
            <$LoginSection>
              <Button
                btnText="Login with Google"
                btnColor="social"
                customBtnClass="medium"
                redirect="/"
              />
              <Button
                btnText="Login with Facebook"
                btnColor="social"
                customBtnClass="medium"
                redirect="/"
              />
            </$LoginSection>
          </$LoginSectionWrapper>
          <$LoginContentLinks>
            Forgot your password?
            <Button
              btnText="Reset password"
              customBtnClass="text"
              redirect="/forgot"
            />
          </$LoginContentLinks>
          <$LoginContentLinks>
            Don't have an account?
            <Button
              btnText="Sign Up"
              customBtnClass="text small"
              redirect="/sign-up"
            />
          </$LoginContentLinks>
        </$LoginWrapper>
      </$GlobalContainer>
    </>
  );
};

export default Login;
