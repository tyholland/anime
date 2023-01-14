import Link from 'next/link.js';
import React, { useState } from 'react';
import InvalidSelectionCard from 'src/modals/invalid-selection-card/index.js';
import {
  $SelectionCardBlock,
  $SelectionCardText,
} from './selectionCard.style.js';

const SelectionCard = ({ btnText, redirect, isDisabled }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (isDisabled) {
    return (
      <>
        <$SelectionCardBlock onClick={() => setModalIsOpen(true)}>
          <$SelectionCardText>{btnText}</$SelectionCardText>
        </$SelectionCardBlock>
        <InvalidSelectionCard
          message={`There is no ${btnText} setup right now`}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </>
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
