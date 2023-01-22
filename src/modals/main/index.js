import React from 'react';
import Modal from 'react-modal';
import { $MainGlobalStyles } from './main.style';

const MainModal = ({ modalIsOpen, closeModal, children, styles }) => {
  Modal.setAppElement('#__next');

  return (
    <>
      <$MainGlobalStyles />
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
