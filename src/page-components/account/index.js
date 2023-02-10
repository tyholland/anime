import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from 'PageComponents/gameplay/gameplay.style';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';
import TextField from 'Components/text-field';
import { deleteAccount } from 'src/requests/users';
import { getCookie, responseError } from 'Utils/index';
import {
  $AccountWrapper,
  $AccountSectionRight,
  $AccountSectionLabel,
} from './account.style';
import { addEvent } from 'Utils/amplitude';
import { getAuth, signOut, updatePassword, deleteUser } from 'firebase/auth';

const Account = () => {
  const { deleteCurrentUser, currentUser } = useAppContext();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const [logoutTrigger, setLogoutTrigger] = useState(false);
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    setLogoutTrigger(true);

    try {
      const auth = getAuth();
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
      const auth = getAuth();
      const user = auth.currentUser;

      await deleteUser(user);
      await deleteAccount(getCookie('token'));

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
      return;
    }

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      await updatePassword(user, pwd);
      addEvent('Account password change');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to change passwords'));
    }
  };

  useEffect(() => {
    if (!logoutTrigger) {
      setErrorPage(!currentUser);
    }

    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  if (errorPage) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <$GameplayStyles />
      <Metadata
        title="Account"
        description="Look at your profile, update username, and your password. Delete your account if you must."
      />
      <$GlobalContainer>
        <$GlobalTitle>Account</$GlobalTitle>
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
              <TextField
                placeholder="Enter New Password"
                onChange={handleSetPwd}
              />
              <TextField
                placeholder="Confirm New Password"
                onChange={handleSetConfirmPwd}
              />
            </div>
            <Button
              btnText="Submit"
              btnColor="primary"
              customBtnClass="medium"
              isDisabled={isDisabled}
              btnFunction={handlePasswordChange}
            />
          </$AccountWrapper>
        </Collapsible>
        <Collapsible trigger="Log Out" triggerTagName="div">
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
      </$GlobalContainer>
    </>
  );
};

export default Account;
