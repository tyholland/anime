import React from 'react';
import * as GlobalStyles from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main/main';
import Button from 'Components/button/button';
import * as Styles from './notification.style';
import { NotificationProps } from 'Utils/types';

const Notification = ({ message, modalIsOpen, closeModal }: NotificationProps) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 100,
      width: 300,
      borderRadius: 15,
    },
  };

  return (
    <MainModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <GlobalStyles.GlobalContainer className="invalid">
        <Styles.NotificationMsg>{message}</Styles.NotificationMsg>
        <Button
          btnFunction={closeModal}
          btnText="Close"
          btnColor="cancel"
          customBtnClass="small"
        />
      </GlobalStyles.GlobalContainer>
    </MainModal>
  );
};

export default Notification;
