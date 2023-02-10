import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import {
  $LoginContentLinks,
  $LoginWrapper,
} from 'PageComponents/login/login.style.js';
import { useAppContext } from 'src/hooks/context';
import Metadata from 'Components/metadata';
import { redirectToAccount, responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const { currentUser } = useAppContext();
  const [userEmail, setUserEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(null);

  const handleEmail = (val) => {
    setUserEmail(val);
    setIsDisabled(!val.length);
  };

  const handleForgotPwd = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, userEmail);
    } catch (err) {
      addEvent(
        'Error',
        responseError(err, 'Failed to send forgot password email')
      );
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser);
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
            onChange={handleEmail}
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
