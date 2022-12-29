import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import {
  $LoginContentLinks,
  $LoginWrapper,
  $LoginOr,
} from 'PageComponents/login/login.style.js';
import { addNewAccount } from 'src/requests/users';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';
import Metadata from 'Components/metadata';
import { redirectToAccount } from 'Utils/index';

const SignUp = () => {
  const { updateCurrentUser, currentUser } = useAppContext();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');
  const isDisabled = !userEmail.length;
  // const [ password, setPassword ] = useState(null);
  // const [ confirmPwd, setConfirmPwd ] = useState(null);

  /*******
   * Add check for all the input fields being empty
   * Add check for email field not being an email
   * Add check for password fields not matching
   *******/

  const handleSignUp = async () => {
    try {
      const user = await addNewAccount({
        userEmail,
        firebaseId: '123',
      });

      updateCurrentUser(user);

      router.push('/league');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser, router);
  }, []);

  return (
    <>
      <Metadata
        title="Sign Up"
        description="Sign up to join the ABZ Fantasy League. Use Google SSO or sign up with your email and password"
      />
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
            placeholder="Please enter a email"
            keyboard="email-address"
            onChange={setUserEmail}
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
            isDisabled={isDisabled}
          />
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
