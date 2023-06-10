import React, { useEffect, useState } from 'react';
import Button from 'Components/button/button';
import TextField from 'Components/text-field/text-field';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from 'PageComponents/login/login.style';
import { useUserContext } from 'Hooks/user';
import Metadata from 'Components/metadata/metadata';
import { redirectToAccount, responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const { currentUser } = useUserContext();
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

  const handleKeyboardSubmit = async (e) => {
    if (e.key === 'Enter' && !isDisabled) {
      await handleForgotPwd();
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
      <GlobalStyles.GlobalContainer>
        <Styles.LoginWrapper>
          <GlobalStyles.GlobalTitle>Forgot Password</GlobalStyles.GlobalTitle>
          <TextField
            placeholder="Please enter a email"
            onChange={handleEmail}
            onKeyDown={handleKeyboardSubmit}
          />
          <Button
            btnText="Reset Password"
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={handleForgotPwd}
            isDisabled={isDisabled}
            disabledMsg="Please complete all the fields above in order to proceed"
          />
          <Styles.LoginContentLinks>
            Already a guild member?
            <Button btnText="Login" customBtnClass="text" redirect="/login" />
          </Styles.LoginContentLinks>
        </Styles.LoginWrapper>
      </GlobalStyles.GlobalContainer>
    </>
  );
};

export default ForgotPassword;
