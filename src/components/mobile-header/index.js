import Button from 'Components/button';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { $MobileHeaderContainer } from './mobileHeader.style';

const MobileHeader = ({ acct, acctLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleOpenMenu = () => {
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    document.querySelector('body').removeAttribute('style');
    setIsMenuOpen(false);
  };

  const handleBtnClick = (url) => {
    handleCloseMenu();
    router.push(url);
  };

  return (
    <$MobileHeaderContainer showOverlay={isMenuOpen && '100%'}>
      <Menu
        right
        width={'50%'}
        noTransition
        onOpen={handleOpenMenu}
        onClose={handleCloseMenu}
        isOpen={isMenuOpen}
      >
        <Button
          btnText="League"
          btnFunction={() => handleBtnClick('/league')}
          customBtnClass="small header text"
        />
        <Button
          btnText="Gameplay"
          btnFunction={() => handleBtnClick('/gameplay')}
          customBtnClass="small header text"
        />
        <Button
          btnText="Resources"
          btnFunction={() => handleBtnClick('/resources')}
          customBtnClass="small header text"
        />
        <Button
          btnText={acct}
          btnFunction={() => handleBtnClick(acctLink)}
          customBtnClass="small header text"
        />
      </Menu>
    </$MobileHeaderContainer>
  );
};

export default MobileHeader;
