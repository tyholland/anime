import React, { useEffect, useState } from 'react';
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
  unusedPlayers
}: BioReviewProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [draftablePlayer, setDraftablePlayer] = useState<boolean>(false);
  const [undraftablePlayer, setUndraftablePlayer] = useState<boolean>(false);
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

  const handleDraftPlayer = (availablePlayers: Record<string, any>) => {
    const isAvailable = availablePlayers.some((player: Record<string, any>) => player.id === characterId);
    const canDraftPlayer = !!type && type === 'draft' && !!canDraft && !!isAvailable;
    const canNotDraftPlayer = !!type && type === 'draft' && !!canDraft && !isAvailable;

    setDraftablePlayer(canDraftPlayer);
    setUndraftablePlayer(canNotDraftPlayer);
  };

  useEffect(() => {
    setMessage(errorMsg);
  }, [errorMsg]);

  useEffect(() => {
    handleDraftPlayer(unusedPlayers);
  }, [unusedPlayers]);

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
        {draftablePlayer && (
          <Button
            btnFunction={draftPlayer}
            btnText="Draft"
            btnColor="primary"
            customBtnClass="medium"
          />
        )}
        {undraftablePlayer && (
          <Button
            btnText="Already Drafted"
            btnColor="primary"
            customBtnClass="medium"
            isDisabled
            disabledMsg="Character belongs to another team"
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
