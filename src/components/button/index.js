import Link from 'next/link.js';
import React from 'react';
import { $Btn, $BtnText } from './button.style.js';

const Button = ({
  btnColor,
  btnText,
  btnTextColor,
  redirect,
  customBtnClass,
  btnFunction,
}) => {
  if (btnFunction) {
    return (
      <$Btn className={`${btnColor} ${customBtnClass || ''}`} onClick={() => btnFunction()}>
        <$BtnText className={btnTextColor}>
          {btnText}
        </$BtnText>
      </$Btn>
    );
  }

  return (
    <Link href={redirect}>
      <$Btn className={`${btnColor} ${customBtnClass || ''}`}>
        <$BtnText className={btnTextColor}>
          {btnText}
        </$BtnText>
      </$Btn>
    </Link>
  );
};

export default Button;
