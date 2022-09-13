import Link from 'next/link.js';
import React from 'react';
import { $Btn, $BtnText } from './button.style.js';

const Button = ({
  btnColor,
  btnText,
  setHeader,
  header,
  btnTextColor,
  redirect,
  customBtnClass,
}) => {

  return (
    <Link href={redirect}>
      <$Btn
        className={`${btnColor} ${customBtnClass || ''}`}
        onClick={() => {
          if (setHeader) {
            setHeader(header);
          }
        }}
      >
        <$BtnText className={btnTextColor}>
          {btnText}
        </$BtnText>
      </$Btn>
    </Link>
  );
};

export default Button;
