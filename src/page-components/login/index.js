import React, { useEffect, useState } from 'react';
import { $LoginOr, $LoginContentLinks, $LoginWrapper } from './login.style.js';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Metadata from 'Components/metadata/index.js';
import { useRouter } from 'next/router.js';
import { useAppContext } from 'src/hooks/context.js';
import { redirectToAccount } from 'Utils/index.js';
import { accountLogin } from 'src/requests/users.js';
import { addEvent } from 'Utils/amplitude.js';

const Login = () => {
  const router = useRouter();
  const { currentUser, updateCurrentUser } = useAppContext();
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    try {
      const user = await accountLogin({
        email,
        firebaseUID: '123',
      });

      updateCurrentUser(user);
    } catch (err) {
      addEvent('Error', {
        data: err.response.data,
        status: err.response.status,
        description: 'Login',
      });
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser, router);
  }, []);

  return (
    <>
      <Metadata
        title="Login"
        description="Login to the ABZ Fantasy League. Use Google SSO or login with your email and password"
      />
      <$GlobalContainer>
        <$LoginWrapper>
          <$GlobalTitle>Login</$GlobalTitle>
          <Button
            btnText="Login with Google"
            btnTextColor="black"
            btnColor="white"
            customBtnClass="medium"
            redirect="/"
          />
          <$LoginOr>or</$LoginOr>
          <TextField
            placeholder="Email"
            keyboard="email-address"
            onChange={setEmail}
          />
          <TextField placeholder="Password" type="password" />
          <Button
            btnText="Login"
            btnTextColor="black"
            btnColor="orange"
            customBtnClass="medium"
            btnFunction={handleLogin}
          />
          <$LoginContentLinks>
            Forgot your password?
            <Button
              btnText="Reset password"
              customBtnClass="text"
              redirect="/"
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
