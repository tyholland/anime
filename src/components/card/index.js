import Link from 'next/link.js';
import React from 'react';
import { $CardBlock, $CardText } from './card.style.js';

const Card = ({
  btnColor,
  btnText,
  btnTextColor,
  redirect,
}) => {

  return (
    <Link href={`/${redirect}`}>
      <$CardBlock className={btnColor}>
        <$CardText className={`${btnTextColor}Text`}>
          {btnText}
        </$CardText>
      </$CardBlock>
    </Link>
  );
};

export default Card;
