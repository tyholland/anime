import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main';
import Button from 'Components/button';
import { $BioReviewWrapper } from './bioReview.style';
import BioCard from 'Components/bio-card';
import ErrorMsg from 'Components/error-msg';

const BioReview = ({
  modalIsOpen,
  closeModal,
  characterId,
  type = null,
  canDraft,
  draftPlayer,
  errorMsg,
}) => {
  const [message, setMessage] = useState(null);
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

  useEffect(() => {
    setMessage(errorMsg);
  }, [errorMsg]);

  return (
    <MainModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <$BioReviewWrapper>
        <BioCard characterId={characterId} />
      </$BioReviewWrapper>
      {message && <ErrorMsg msg={message} />}
      <$BioReviewWrapper className="btn">
        {!!type && type === 'draft' && !!canDraft && (
          <Button
            btnFunction={draftPlayer}
            btnText="Draft"
            btnColor="primary"
            customBtnClass="medium"
          />
        )}
        <Button
          btnFunction={closeModal}
          btnText="Close"
          btnColor="cancel"
          customBtnClass={!!type && type === 'draft' ? 'medium' : 'small'}
        />
      </$BioReviewWrapper>
    </MainModal>
  );
};

export default BioReview;
