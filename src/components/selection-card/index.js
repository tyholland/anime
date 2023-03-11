import Link from 'next/link.js';
import React, { useState } from 'react';
import Notification from 'src/modals/notification/index.js';
import {
  $SelectionCardBlock,
  $SelectionCardText,
} from './selectionCard.style.js';

const SelectionCard = ({ btnText, redirect, isDisabled, newTab }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenNewTab = (url) => {
    window.open(url);
  };

  if (isDisabled) {
    return (
      <>
        <$SelectionCardBlock onClick={() => setModalIsOpen(true)}>
          <$SelectionCardText>{btnText}</$SelectionCardText>
        </$SelectionCardBlock>
        <Notification
          message="Week 1 has not started yet. Once its started, this link will become active."
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </>
    );
  }

  if (newTab) {
    return (
      <$SelectionCardBlock onClick={() => handleOpenNewTab(redirect)}>
        <$SelectionCardText>{btnText}</$SelectionCardText>
      </$SelectionCardBlock>
    );
  }

  return (
    <Link href={redirect}>
      <$SelectionCardBlock>
        <$SelectionCardText>{btnText}</$SelectionCardText>
      </$SelectionCardBlock>
    </Link>
  );
};

export default SelectionCard;
