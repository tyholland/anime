import React from 'react';
import Modal from 'react-modal';

const MainModal = ({ modalIsOpen, closeModal, children }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 570,
      width: 800,
    },
  };

  Modal.setAppElement('#__next');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default MainModal;
