import Button from 'Components/button/button';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import * as Styles from './mobileHeader.style';
import { MobileHeaderProps } from 'Utils/types';

const MobileHeader = ({ acct, acctLink }: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleOpenMenu = () => {
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    document.querySelector('body').removeAttribute('style');
    setIsMenuOpen(false);
  };

  const handleBtnClick = (url: string) => {
    handleCloseMenu();
    router.push(url);
  };

  return (
    <Styles.MobileHeaderContainer showOverlay={isMenuOpen && '100%'}>
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
          btnFunction={() => handleBtnClick('/league/view')}
          customBtnClass="small header text"
        />
        <Button
          btnText="Bracket"
          btnFunction={() => handleBtnClick('/bracket/view')}
          customBtnClass="small header text"
        />
        <Button
          btnText="Podcast"
          btnFunction={() => handleBtnClick('/podcast')}
          customBtnClass="small header text"
        />
        <Button
          btnText="Gameplay"
          btnFunction={() => handleBtnClick('/gameplay')}
          customBtnClass="small header text"
        />
        <Button
          btnText="Suggest Character"
          btnFunction={() => handleBtnClick('/suggest')}
          customBtnClass="small header text"
        />
        <Button
          btnText={acct}
          btnFunction={() => handleBtnClick(acctLink)}
          customBtnClass="small header text"
        />
      </Menu>
    </Styles.MobileHeaderContainer>
  );
};

export default MobileHeader;