import React, { PropsWithChildren } from 'react';
import Modal from 'react-modal';
import * as Styles from './main.style';
import { MainModalProps } from 'Utils/types';

const MainModal = ({ modalIsOpen, closeModal, children, styles }: PropsWithChildren<MainModalProps>) => {
  Modal.setAppElement('#__next');

  return (
    <>
      <Styles.MainGlobalStyles />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={styles}
      >
        {children}
      </Modal>
    </>
  );
};

export default MainModal;
