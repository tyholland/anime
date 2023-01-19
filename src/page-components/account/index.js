import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from 'PageComponents/gameplay/gameplay.style';
import Schedule from 'Components/gameplay-card/schedule';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';
import TextField from 'Components/text-field';
import { updateAccount } from 'src/requests/users';
import { getCookie } from 'Utils/index';

const Account = ({ account }) => {
  const { deleteCurrentUser, currentUser, updateCurrentUser } = useAppContext();
  const { username, email } = account;
  const [isLoading, setIsLoading] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [edit, setEdit] = useState(!username);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    await deleteCurrentUser();
    router.push('/');
  };

  const handleUsernameChange = async () => {
    const userDetails = {
      userName: updatedUsername,
    };

    await updateAccount(userDetails, getCookie('token'));

    updateCurrentUser(userDetails);
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
          <div>
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
                customBtnClass="small"
              />
              {edit && (
                <Button
                  btnText="Cancel"
                  btnColor="cancel"
                  btnFunction={() => setEdit(false)}
                  customBtnClass="small"
                />
              )}
            </div>
          </div>
          <TextField isDisabled={true} inputVal={email} />
          <div>Delete Account</div>
        </Collapsible>
        <Collapsible trigger="Change Password" triggerTagName="div">
          <Schedule />
        </Collapsible>
        <Collapsible trigger="Log Out" triggerTagName="div">
          Are you sure you want to logout?
          <Button
            btnText="Yes"
            btnColor="primary"
            customBtnClass="small"
            btnFunction={handleLogout}
          />
        </Collapsible>
      </$GlobalContainer>
    </>
  );
};

export default Account;
