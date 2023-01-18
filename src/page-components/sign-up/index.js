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

const SignUp = () => {
  const { setInitialUser, currentUser } = useAppContext();
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

      setInitialUser(user);

      redirectUrl('/league');
    } catch (error) {
      addEvent('Error', responseError(error, 'Sign up'));
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser);
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
          <$LoginSectionWrapper>
            <$LoginSection>
              <TextField
                placeholder="Please enter a email"
                keyboard="email-address"
                onChange={setUserEmail}
              />
              <TextField
                placeholder="Please enter a password"
                type="password"
              />
              <TextField placeholder="Confirm password" type="password" />
              <Button
                btnText="Sign Up"
                btnColor="primary"
                customBtnClass="medium"
                btnFunction={handleSignUp}
                isDisabled={isDisabled}
              />
            </$LoginSection>
            <$LoginSection>
              <Button
                btnText="Sign Up with Google"
                btnColor="social"
                customBtnClass="medium"
                redirect="/"
              />
              <Button
                btnText="Sign Up with Facebook"
                btnColor="social"
                customBtnClass="medium"
                redirect="/"
              />
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
