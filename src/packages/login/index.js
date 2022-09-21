import React from 'react';
import { $LoginImg, $LoginContentLinks, $LoginSplit, $LoginWrapper } from './login.style.js';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';

const Login = () => {
  return (
    <$GlobalContainer>
      <$LoginWrapper>
        <$LoginImg
          src="/assets/abz-logo.png"
          alt="Anime Brothaz Logo"
        />
        <$GlobalTitle>Anime Fantasy League</$GlobalTitle>
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
          <Button
            btnText="Sign Up"
            customBtnClass="text small"
            redirect="/"
          />
          <$LoginSplit>|</$LoginSplit>
          <Button
            btnText="Forgot"
            customBtnClass="text small"
            redirect="/"
          />
        </$LoginContentLinks>
      </$LoginWrapper>
    </$GlobalContainer>
  );
};

export default Login;
