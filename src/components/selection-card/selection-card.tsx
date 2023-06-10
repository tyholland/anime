import Link from 'next/link';
import React, { useState } from 'react';
import Notification from 'Modals/notification/notification';
import * as Styles from './selectionCard.style';
import { SelectionCardProps } from 'Utils/types';

const SelectionCard = ({ btnText, redirect, isDisabled, newTab, disabledMsg }: SelectionCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenNewTab = (url: string) => {
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
