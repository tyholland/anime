import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main';
import Button from 'Components/button';
import { $BioReviewWrapper } from './bioReview.style';
import BioCard from 'Components/bio-card';

const BioReview = ({ modalIsOpen, closeModal, characterId }) => {
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
      <$GlobalContainer>
        <$BioReviewWrapper>
          <BioCard characterId={characterId} />
        </$BioReviewWrapper>
        <$BioReviewWrapper className="btn">
          <Button
            btnFunction={closeModal}
            btnText="Close"
            btnColor="cancel"
            customBtnClass="small"
          />
        </$BioReviewWrapper>
      </$GlobalContainer>
    </MainModal>
  );
};

export default BioReview;
