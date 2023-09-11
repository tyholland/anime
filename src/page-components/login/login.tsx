import React, { useEffect, useState } from 'react';
import * as Styles from './login.style';
import Button from 'Components/button/button';
import TextField from 'Components/text-field/text-field';
import * as GlobalStyles from 'Styles/global.style';
import Metadata from 'Components/metadata/metadata';
import { useRouter } from 'next/router';
import { useUserContext } from 'Hooks/user';
import {
  joinLeagueSetup,
  redirectToAccount,
  redirectToContinuePage,
  responseError,
} from 'Utils/index';
import { accountLogin } from 'Requests/users';
import { addEvent } from 'Utils/amplitude';
import Loader from 'Components/loader/loader';
import ErrorMsg from 'Components/error-msg/error-msg';
import SingleSignOn from 'Components/single-sign-on/single-sign-on';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useLeagueContext } from 'Hooks/league';

const Login = () => {
  const router = useRouter();
  const { currentUser, updateCurrentUser } = useUserContext();
  const { deleteLeagueData } = useLeagueContext();
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const pwdErrorMsg = 'Firebase: Error (auth/wrong-password).';
  const emailErrorMsg = 'Firebase: Error (auth/user-not-found).';
  const { join } = router.query;

  const handleEmail = (val: string) => {
    setEmail(val);
    setIsDisabled(!val.length || !password.length);
  };

  const handlePassword = (val: string) => {
    setPassword(val);
    setIsDisabled(!val.length || !email.length);
  };

  const handleKeyboardSubmit = async (e: Record<string, any>) => {
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
        await joinLeagueSetup(join as string, user, router);
        deleteLeagueData();
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
                  type="email"
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
