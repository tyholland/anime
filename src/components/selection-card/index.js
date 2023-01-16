import Link from 'next/link.js';
import React, { useState } from 'react';
import InvalidSelectionCard from 'src/modals/invalid-selection-card/index.js';
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
        <InvalidSelectionCard
          message={`${btnText} is currently unavailble at the moment`}
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
