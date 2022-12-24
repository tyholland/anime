import React, { useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import {
  $LoginContentLinks,
  $LoginWrapper,
  $LoginOr,
} from 'PageComponents/login/login.style.js';
import { addNewAccount } from 'src/requests/users';

const SignUp = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  // const [ password, setPassword ] = useState(null);
  // const [ confirmPwd, setConfirmPwd ] = useState(null);

  /*******
   * Add check for all the input fields being empty
   * Add check for email field not being an email
   * Add check for password fields not matching
   *******/

  const handleSignUp = async () => {
    try {
      await addNewAccount({
        username,
        email,
        firebaseId: '123',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <$GlobalContainer>
      <$LoginWrapper>
        <$GlobalTitle>Sign Up</$GlobalTitle>
        <Button
          btnText="Sign Up with Google"
          btnTextColor="black"
          btnColor="white"
          customBtnClass="medium"
          redirect="/"
        />
        <$LoginOr>or</$LoginOr>
        <TextField
          placeholder="Please enter a username"
          onChange={setUsername}
        />
        <TextField
          placeholder="Please enter a email"
          keyboard="email-address"
          onChange={setEmail}
        />
        <TextField placeholder="Please enter a password" type="password" />
        <TextField placeholder="Confirm password" type="password" />
        <Button
          btnText="Sign Up"
          btnTextColor="black"
          btnColor="orange"
          customBtnClass="medium"
          redirect="/"
          btnFunction={handleSignUp}
        />
        <$LoginContentLinks>
          Already have an account?
          <Button btnText="Login" customBtnClass="text" redirect="/login" />
        </$LoginContentLinks>
      </$LoginWrapper>
    </$GlobalContainer>
  );
};

export default SignUp;
