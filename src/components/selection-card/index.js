import Link from 'next/link.js';
import React from 'react';
import { $SelectionCardBlock, $SelectionCardText } from './selectionCard.style.js';

const SelectionCard = ({
  btnColor,
  btnText,
  btnTextColor,
  redirect,
}) => {

  return (
    <Link href={`/${redirect}`}>
      <$SelectionCardBlock className={btnColor}>
        <$SelectionCardText className={`${btnTextColor}Text`}>
          {btnText}
        </$SelectionCardText>
      </$SelectionCardBlock>
    </Link>
  );
};

export default SelectionCard;
