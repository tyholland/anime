import Link from 'next/link.js';
import React from 'react';
import { getAccountInfo } from 'src/requests/users.js';
import { $SelectionCardBlock, $SelectionCardText } from './selectionCard.style.js';

const SelectionCard = ({
  btnColor,
  btnText,
  btnTextColor,
  redirect,
}) => {
  const handleClick = async () => {
    const res = await getAccountInfo();
    console.log(res)
  };

  return (
    <Link href={redirect}>
      <$SelectionCardBlock className={btnColor} onClick={handleClick}>
        <$SelectionCardText className={`${btnTextColor}Text`}>
          {btnText}
        </$SelectionCardText>
      </$SelectionCardBlock>
    </Link>
  );
};

export default SelectionCard;
