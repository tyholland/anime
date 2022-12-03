import React from 'react';
import { $LoginOr, $LoginContentLinks, $LoginSplit, $LoginWrapper } from './login.style.js';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';

const Login = () => {
  return (
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
        <TextField placeholder="Email" keyboard="email-address" />
        <TextField placeholder="Password" type="password" />
        <Button
          btnText="Login"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="medium"
          redirect="/"
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
  );
};

export default Login;
