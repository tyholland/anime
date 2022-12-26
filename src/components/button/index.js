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
  isDisabled = false,
}) => {
  if (btnFunction) {
    return (
      <$Btn
        className={`${btnColor} ${customBtnClass || ''}`}
        onClick={() => btnFunction()}
        disabled={isDisabled}
      >
        <$BtnText className={btnTextColor}>{btnText}</$BtnText>
      </$Btn>
    );
  }

  return (
    <Link href={redirect}>
      <$Btn
        className={`${btnColor} ${customBtnClass || ''}`}
        disabled={isDisabled}
      >
        <$BtnText className={btnTextColor}>{btnText}</$BtnText>
      </$Btn>
    </Link>
  );
};

export default Button;
