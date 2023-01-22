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
import { deleteAccount, updateAccount } from 'src/requests/users';
import { getCookie, responseError } from 'Utils/index';
import {
  $AccountWrapper,
  $AccountSectionRight,
  $AccountSectionLabel,
} from './account.style';
import { addEvent } from 'Utils/amplitude';

const Account = ({ account }) => {
  const { deleteCurrentUser, currentUser, updateCurrentUser } = useAppContext();
  const { username, email } = account;
  const [isLoading, setIsLoading] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [edit, setEdit] = useState(!username);
  const [pwd, setPwd] = useState(null);
  const [confirmPwd, setConfirmPwd] = useState(null);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await deleteCurrentUser();
      router.push('/');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to logout'));
    }
  };

  const handleUsernameChange = async () => {
    const userDetails = {
      userName: updatedUsername,
    };

    try {
      await updateAccount(userDetails, getCookie('token'));
      updateCurrentUser(userDetails);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to change username'));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount(getCookie('token'));
      handleLogout();
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to delete account'));
    }
  };

  const handlePasswordChange = async () => {
    const isCorrectPwds = pwd === confirmPwd;

    if (isCorrectPwds) {
      return;
    }

    // Submit firebase function to update password
  };

  useEffect(() => {
    setErrorPage(!currentUser);
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
            <div>
              <$AccountSectionLabel>Username:</$AccountSectionLabel>
              {edit && (
                <TextField
                  placeholder="Enter Username"
                  onChange={setUpdatedUsername}
                />
              )}
              {!edit && (
                <TextField isDisabled={true} inputVal={updatedUsername} />
              )}
              <div>
                <Button
                  btnText={edit ? 'Save' : 'Edit'}
                  btnColor="primary"
                  btnFunction={() => {
                    if (edit) {
                      handleUsernameChange();
                    }
                    setEdit(!edit);
                  }}
                  customBtnClass="medium"
                />
                {edit && (
                  <Button
                    btnText="Cancel"
                    btnColor="cancel"
                    btnFunction={() => setEdit(false)}
                    customBtnClass="medium"
                  />
                )}
              </div>
            </div>
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
              <TextField placeholder="Enter Password" onChange={setPwd} />
              <TextField
                placeholder="Confirm Password"
                onChange={setConfirmPwd}
              />
            </div>
            <Button
              btnText="Submit"
              btnColor="primary"
              customBtnClass="medium"
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
