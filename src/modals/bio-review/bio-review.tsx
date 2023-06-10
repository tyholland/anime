import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main/main';
import Button from 'Components/button/button';
import * as Styles from './bioReview.style';
import BioCard from 'Components/bio-card/bio-card';
import ErrorMsg from 'Components/error-msg/error-msg';
import { BioReviewProps } from 'Utils/types';

const BioReview = ({
  modalIsOpen,
  closeModal,
  characterId,
  type = null,
  canDraft,
  draftPlayer,
  errorMsg,
}: BioReviewProps) => {
  const [message, setMessage] = useState<string | null>(null);
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
      <Styles.BioReviewWrapper>
        <BioCard characterId={characterId} />
      </Styles.BioReviewWrapper>
      {message && <ErrorMsg msg={message} />}
      <Styles.BioReviewWrapper className="btn">
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
          customBtnClass="medium"
        />
      </Styles.BioReviewWrapper>
    </MainModal>
  );
};

export default BioReview;
