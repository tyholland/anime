import React, { useEffect, useState } from 'react';
import {
  $GlobalContainer,
  $GlobalTitle,
  $CollapsibleStyles,
} from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';
import Loader from 'Components/loader';
import TextField from 'Components/text-field';
import { deleteAccount, getAdminAccess } from 'src/requests/users';
import { responseError } from 'Utils/index';
import {
  $AccountWrapper,
  $AccountSectionRight,
  $AccountSectionLabel,
  $AccountPwdSuccess,
} from './account.style';
import { addEvent } from 'Utils/amplitude';
import { getAuth, signOut, updatePassword, deleteUser } from 'firebase/auth';
import ErrorMsg from 'Components/error-msg';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';

const Account = () => {
  const { deleteCurrentUser, currentUser } = useAppContext();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPwdLoading, setIsPwdLoading] = useState(false);
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [logoutTrigger, setLogoutTrigger] = useState(false);
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [pwdSuccess, setPwdSuccess] = useState(false);
  const [auth, setAuth] = useState(getAuth());
  const [adminAccess, setAdminAccess] = useState(false);
  const router = useRouter();
  const message =
    'The account page contains all your Fantasy League profile information, which includes only your email address. You have the ability to change your password if you choose to do so. The account page also allows you to log out of the Fantasy League. Lastly, if you must, you can even delete your account. Though where is the fun in doing that?';

  const handleLogout = async () => {
    setIsLoading(true);
    setLogoutTrigger(true);

    try {
      await signOut(auth);
      await deleteCurrentUser();
      addEvent('Account logout');
      router.push('/');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to logout'));
      setIsLoading(false);
      setLogoutTrigger(false);
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

  const handleSetPwd = (val) => {
    setPwd(val);
    setIsDisabled(!val.length || !confirmPwd.length);
  };

  const handleSetConfirmPwd = (val) => {
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

  useEffect(() => {
    if (!logoutTrigger) {
      setNotLoggedIn(!currentUser);
    }

    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!auth) {
      setAuth(getAuth());
    }
  }, [auth]);

  useEffect(() => {
    handleAdminAccess();
  }, []);

  return (
    <>
      <$CollapsibleStyles />
      <Metadata
        title="Account"
        description="Look at your profile, update username, and your password. Delete your account if you must."
      />
      {notLoggedIn && <NotUser message={message} />}
      {!notLoggedIn && (
        <>
          <$GlobalContainer>
            <$GlobalTitle>Account</$GlobalTitle>
            {isLoading && <Loader />}
            {!isLoading && (
              <div>
                <Collapsible trigger="Profile" triggerTagName="div">
                  <$AccountWrapper>
                    <$AccountSectionRight>
                      <$AccountSectionLabel>Email:</$AccountSectionLabel>
                      <TextField isDisabled={true} inputVal={email} />
                      <Button
                        btnText="Delete Account"
                        customBtnClass="text"
                        btnFunction={handleDeleteAccount}
                      />
                    </$AccountSectionRight>
                  </$AccountWrapper>
                </Collapsible>
                <Collapsible trigger="Change Password" triggerTagName="div">
                  <$AccountWrapper className="column">
                    <div>
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
                    />
                    {pwdSuccess && (
                      <$AccountPwdSuccess>
                        Your password has successfully been changed
                      </$AccountPwdSuccess>
                    )}
                  </$AccountWrapper>
                </Collapsible>
                <Collapsible
                  trigger="Log Out"
                  triggerTagName="div"
                  triggerElementProps={{ id: 'last' }}
                >
                  <$AccountWrapper className="column">
                    <div>Are you sure you want to logout?</div>
                    <Button
                      btnText="Yes"
                      btnColor="primary"
                      customBtnClass="medium"
                      btnFunction={handleLogout}
                    />
                  </$AccountWrapper>
                </Collapsible>
              </div>
            )}
            {adminAccess && (
              <Button
                btnText="Admin Dashboard"
                redirect="/admin-dashboard"
                btnColor="primary"
                customBtnClass="medium"
              />
            )}
          </$GlobalContainer>
          <ReadMore>{message}</ReadMore>
        </>
      )}
    </>
  );
};

export default Account;
