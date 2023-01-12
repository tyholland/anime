import Link from 'next/link.js';
import React from 'react';
import {
  $SelectionCardBlock,
  $SelectionCardText,
} from './selectionCard.style.js';

const SelectionCard = ({ btnText, redirect }) => {
  return (
    <Link href={redirect}>
      <$SelectionCardBlock>
        <$SelectionCardText>{btnText}</$SelectionCardText>
      </$SelectionCardBlock>
    </Link>
  );
};

export default SelectionCard;
