import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main';
import Button from 'Components/button';
import { $InvalidSelectionCard } from './invalidSelectionCard.style';

const InvalidSelectionCard = ({ message, modalIsOpen, closeModal }) => {
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
      <$GlobalContainer className="grid">
        <$InvalidSelectionCard>{message}</$InvalidSelectionCard>
        <Button
          btnFunction={closeModal}
          btnText="Close"
          btnColor="cancel"
          customBtnClass="small"
        />
      </$GlobalContainer>
    </MainModal>
  );
};

export default InvalidSelectionCard;
