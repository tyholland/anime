import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import {
  $LoginContentLinks,
  $LoginWrapper,
} from 'PageComponents/login/login.style.js';
import { addNewAccount } from 'src/requests/users';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';
import Metadata from 'Components/metadata';
import { redirectToAccount, responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';

const ForgotPassword = () => {
  const { updateCurrentUser, currentUser } = useAppContext();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');
  const isDisabled = !userEmail.length;

  const handleForgotPwd = async () => {
    try {
      const user = await addNewAccount({
        userEmail,
        firebaseId: '123',
      });

      updateCurrentUser(user);

      router.push('/login');
    } catch (error) {
      addEvent('Error', responseError('Forgot Password'));
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser, router);
  }, []);

  return (
    <>
      <Metadata
        title="Forgot Password"
        description="Enter your email to get your password reset. Check your email for your temporary password."
      />
      <$GlobalContainer>
        <$LoginWrapper>
          <$GlobalTitle>Forgot Password</$GlobalTitle>
          <TextField
            placeholder="Please enter a email"
            keyboard="email-address"
            onChange={setUserEmail}
          />
          <Button
            btnText="Reset Password"
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={handleForgotPwd}
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

export default ForgotPassword;
