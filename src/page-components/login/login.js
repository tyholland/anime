import React, { useEffect, useState } from 'react';
import * as Styles from './login.style.js';
import Button from 'Components/button/button.js';
import TextField from 'Components/text-field/text-field.js';
import * as GlobalStyles from 'Styles/global.style.js';
import Metadata from 'Components/metadata/metadata.js';
import { useRouter } from 'next/router.js';
import { useUserContext } from 'src/hooks/user.js';
import {
  joinLeagueSetup,
  redirectToAccount,
  redirectToContinuePage,
  responseError,
} from 'Utils/index.js';
import { accountLogin } from 'src/requests/users.js';
import { addEvent } from 'Utils/amplitude.js';
import Loader from 'Components/loader/loader.js';
import ErrorMsg from 'Components/error-msg/error-msg.js';
import SingleSignOn from 'Components/single-sign-on/single-sign-on.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const router = useRouter();
  const { currentUser, updateCurrentUser } = useUserContext();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const pwdErrorMsg = 'Firebase: Error (auth/wrong-password).';
  const emailErrorMsg = 'Firebase: Error (auth/user-not-found).';
  const { join } = router.query;

  const handleEmail = (val) => {
    setEmail(val);
    setIsDisabled(!val.length || !password.length);
  };

  const handlePassword = (val) => {
    setPassword(val);
    setIsDisabled(!val.length || !email.length);
  };

  const handleKeyboardSubmit = async (e) => {
    if (e.key === 'Enter' && !isDisabled) {
      await handleLogin();
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    setIsDisabled(true);

    try {
      const auth = getAuth();
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = await accountLogin({
        email,
        firebaseId: firebaseUser.user.uid,
      });

      updateCurrentUser(user);

      addEvent('Account login', {
        provider: firebaseUser.user.providerData[0].providerId,
      });

      if (join) {
        await joinLeagueSetup(join, user, router);
        return;
      }

      redirectToContinuePage(router);
    } catch (err) {
      addEvent('Error', responseError(err, 'Login'));
      setIsLoading(false);

      err.message === pwdErrorMsg || err.message === emailErrorMsg
        ? setErrorMsg('Email and/or password is incorrect')
        : setErrorMsg(err.response.data.message);

      setIsDisabled(true);
    }
  };

  useEffect(() => {
    redirectToAccount(currentUser);
  }, []);

  return (
    <>
      <Metadata
        title="Login"
        description="Login to the Anime Fantasy League. Use Google SSO or login with your email and password"
      />
      <GlobalStyles.GlobalContainer>
        <Styles.LoginWrapper>
          <GlobalStyles.GlobalTitle>Login</GlobalStyles.GlobalTitle>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <>
            <Styles.LoginSectionWrapper>
              <Styles.LoginSection>
                <TextField
                  placeholder="Email"
                  keyboard="email-address"
                  onChange={handleEmail}
                  onKeyDown={handleKeyboardSubmit}
                />
                <TextField
                  placeholder="Password"
                  type="password"
                  onChange={handlePassword}
                  onKeyDown={handleKeyboardSubmit}
                />
                <Button
                  btnText={isLoading ? <Loader isSmall={true} /> : 'Login'}
                  btnColor="primary"
                  customBtnClass="medium"
                  btnFunction={handleLogin}
                  isDisabled={isDisabled}
                  disabledMsg="Please complete all the fields above in order to proceed"
                />
              </Styles.LoginSection>
              <Styles.LoginSection>
                <SingleSignOn setError={setErrorMsg} />
              </Styles.LoginSection>
            </Styles.LoginSectionWrapper>
            <Styles.LoginContentLinks>
              Memory jutsu failed?
              <Button
                btnText="Recover password here!"
                customBtnClass="text"
                redirect="/forgot"
              />
            </Styles.LoginContentLinks>
            <Styles.LoginContentLinks>
              Not a guild member yet?
              <Button
                btnText="Join the AFL family!"
                customBtnClass="text small"
                redirect={join ? `/sign-up?join=${join}` : '/sign-up'}
              />
            </Styles.LoginContentLinks>
          </>
        </Styles.LoginWrapper>
      </GlobalStyles.GlobalContainer>
    </>
  );
};

export default Login;
