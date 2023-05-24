import Link from 'next/link.js';
import React, { useState } from 'react';
import Notification from 'src/modals/notification/index.js';
import * as Styles from './selectionCard.style.js';

const SelectionCard = ({ btnText, redirect, isDisabled, newTab, disabledMsg }) => {
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
        <Styles.SelectionCardBlock onClick={() => setModalIsOpen(true)}>
          <Styles.SelectionCardText>{btnText}</Styles.SelectionCardText>
        </Styles.SelectionCardBlock>
        <Notification
          message={disabledMsg}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </>
    );
  }

  if (newTab) {
    return (
      <Styles.SelectionCardBlock onClick={() => handleOpenNewTab(redirect)}>
        <Styles.SelectionCardText>{btnText}</Styles.SelectionCardText>
      </Styles.SelectionCardBlock>
    );
  }

  return (
    <Link href={redirect}>
      <Styles.SelectionCardBlock>
        <Styles.SelectionCardText>{btnText}</Styles.SelectionCardText>
      </Styles.SelectionCardBlock>
    </Link>
  );
};

export default SelectionCard;
