import React from 'react';
import Modal from 'react-modal';

const MainModal = ({ modalIsOpen, closeModal, children, styles }) => {
  Modal.setAppElement('#__next');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      style={styles}
    >
      {children}
    </Modal>
  );
};

export default MainModal;
