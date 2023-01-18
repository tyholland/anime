import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from 'PageComponents/gameplay/gameplay.style';
import MakeTeam from 'Components/gameplay-card/make-team';
import Schedule from 'Components/gameplay-card/schedule';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';

const Account = () => {
  const { deleteCurrentUser, currentUser } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    await deleteCurrentUser();
    router.push('/');
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
          <MakeTeam />
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
