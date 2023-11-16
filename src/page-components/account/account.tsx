import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import Metadata from 'Components/metadata/metadata';
import Button from 'Components/button/button';
import { useUserContext } from 'Hooks/user';
import { useRouter } from 'next/router';
import Loader from 'Components/loader/loader';
import TextField from 'Components/text-field/text-field';
import { deleteAccount, getAdminAccess } from 'Requests/users';
import { responseError } from 'Utils/index';
import * as Styles from './account.style';
import { addEvent } from 'Utils/amplitude';
import { getAuth, signOut, updatePassword, deleteUser } from 'firebase/auth';
import ErrorMsg from 'Components/error-msg/error-msg';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';
import Disclaimer from 'Components/disclaimer/disclaimer';
import { clearAllCache } from 'Utils/cache';

const Account = () => {
  const { deleteCurrentUser, currentUser } = useUserContext();
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPwdLoading, setIsPwdLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [pwd, setPwd] = useState<string>('');
  const [confirmPwd, setConfirmPwd] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [pwdSuccess, setPwdSuccess] = useState<boolean>(false);
  const [auth, setAuth] = useState(getAuth());
  const [adminAccess, setAdminAccess] = useState<boolean>(false);
  const router = useRouter();
  const message =
    'The account page contains all your Fantasy League profile information, which includes only your email address. You have the ability to change your password if you choose to do so. The account page also allows you to log out of the Fantasy League. Lastly, if you must, you can even delete your account. Though where is the fun in doing that?';
  const disclaimerMsg =
    'AFL emails notifications have been sent to all members. If you haven\'t received any, please check your spam folder for these AFL email notifications. If the emails are in your spam folder, please unmark them as spam.';

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      await signOut(auth);
      await deleteCurrentUser();
      clearAllCache();
      addEvent('Account logout');
      router.push('/');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to logout'));
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const user = auth.currentUser;

      await deleteUser(user);
      await deleteAccount(currentUser?.token);

      addEvent('Account deleted');
      handleLogout();
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to delete account'));
    }
  };

  const handleSetPwd = (val: string) => {
    setPwd(val);
    setIsDisabled(!val.length || !confirmPwd.length);
  };

  const handleSetConfirmPwd = (val: string) => {
    setConfirmPwd(val);
    setIsDisabled(!val.length || !pwd.length);
  };

  const handlePasswordChange = async () => {
    const isCorrectPwds = pwd === confirmPwd;

    if (!isCorrectPwds) {
      setErrorMsg('Passwords do not match');
      return;
    }

    setIsPwdLoading(true);
    setIsDisabled(true);

    try {
      const user = auth.currentUser;

      await updatePassword(user, pwd);
      addEvent('Account password change');
      setIsPwdLoading(false);
      setPwdSuccess(true);

      setTimeout(() => {
        setPwdSuccess(false);
      }, 3000);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to change passwords'));
      setIsPwdLoading(false);
    }
  };

  const handleAdminAccess = async () => {
    try {
      const { success } = await getAdminAccess(currentUser?.token);

      setAdminAccess(success);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get admin access'));
    }
  };

  const profileUp = (
    <div className="collapseContainer">
      <div>Profile</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const profileDown = (
    <div className="collapseContainer">
      <div>Profile</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const pwdUp = (
    <div className="collapseContainer">
      <div>Change Password</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const pwdDown = (
    <div className="collapseContainer">
      <div>Change Password</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const logUp = (
    <div className="collapseContainer">
      <div>Log Out</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const logDown = (
    <div className="collapseContainer">
      <div>Log Out</div>
      <div className="down">&#10132;</div>
    </div>
  );

  useEffect(() => {
    setNotLoggedIn(!!currentUser);

    if (currentUser) {
      setEmail(currentUser.email);
      handleAdminAccess();
    }
  }, [currentUser]);

  useEffect(() => {
    if (!auth) {
      setAuth(getAuth());
    }
  }, [auth]);

  return (
    <>
      <GlobalStyles.CollapsibleStyles />
      <Metadata
        title="Account"
        description="Look at your profile, update username, and your password. Delete your account if you must."
      />
      {!notLoggedIn && <NotUser message={message} />}
      {notLoggedIn && (
        <>
          <GlobalStyles.GlobalContainer>
            <GlobalStyles.GlobalTitle>Account</GlobalStyles.GlobalTitle>
            <Disclaimer msg={disclaimerMsg} />
            {isLoading && <Loader />}
            {!isLoading && (
              <>
                <Styles.AccountContainer>
                  <Collapsible
                    trigger={profileDown}
                    triggerWhenOpen={profileUp}
                    triggerTagName="div"
                    triggerElementProps={{
                      id: 'profile',
                      'aria-controls': 'profile',
                    }}
                    contentElementId="profile"
                  >
                    <Styles.AccountWrapper>
                      <Styles.AccountSectionRight>
                        <Styles.AccountSectionLabel>
                          Email:
                        </Styles.AccountSectionLabel>
                        <TextField isDisabled={true} inputVal={email} />
                        <Button
                          btnText="Delete Account"
                          customBtnClass="text"
                          btnFunction={handleDeleteAccount}
                        />
                      </Styles.AccountSectionRight>
                    </Styles.AccountWrapper>
                  </Collapsible>
                  <Collapsible
                    trigger={pwdDown}
                    triggerWhenOpen={pwdUp}
                    triggerTagName="div"
                    triggerElementProps={{
                      id: 'password',
                      'aria-controls': 'password',
                    }}
                    contentElementId="password"
                  >
                    <Styles.AccountWrapper className="column">
                      <div className="pwd">
                        {errorMsg && <ErrorMsg msg={errorMsg} />}
                        <TextField
                          placeholder="Enter New Password"
                          onChange={handleSetPwd}
                          type="password"
                        />
                        <TextField
                          placeholder="Confirm New Password"
                          onChange={handleSetConfirmPwd}
                          type="password"
                        />
                      </div>
                      <Button
                        btnText={
                          isPwdLoading ? <Loader isSmall={true} /> : 'Submit'
                        }
                        btnColor="primary"
                        customBtnClass="medium"
                        isDisabled={isDisabled}
                        btnFunction={handlePasswordChange}
                        disabledMsg="Please complete all the fields above in order to proceed"
                      />
                      {pwdSuccess && (
                        <Styles.AccountPwdSuccess>
                          Your password has successfully been changed
                        </Styles.AccountPwdSuccess>
                      )}
                    </Styles.AccountWrapper>
                  </Collapsible>
                  <Collapsible
                    trigger={logDown}
                    triggerWhenOpen={logUp}
                    triggerTagName="div"
                    triggerElementProps={{
                      id: 'last',
                      'aria-controls': 'last',
                    }}
                    contentElementId="last"
                  >
                    <Styles.AccountWrapper className="column">
                      <div>Are you sure you want to logout?</div>
                      <Button
                        btnText="Yes"
                        btnColor="primary"
                        customBtnClass="medium"
                        btnFunction={handleLogout}
                      />
                    </Styles.AccountWrapper>
                  </Collapsible>
                </Styles.AccountContainer>
                {adminAccess && (
                  <Button
                    btnText="Admin Dashboard"
                    redirect="/admin-dashboard"
                    btnColor="primary"
                    customBtnClass="medium"
                  />
                )}
              </>
            )}
          </GlobalStyles.GlobalContainer>
          <ReadMore>{message}</ReadMore>
        </>
      )}
    </>
  );
};

export default Account;
