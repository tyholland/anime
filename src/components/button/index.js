import Link from 'next/link.js';
import React from 'react';
import { $Btn, $BtnText, $BtnWrapper } from './button.style.js';

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
    <$BtnWrapper>
      <Link href={`/${redirect}`}>
        <$Btn
          className={`${btnColor} ${customBtnClass || ''}`}
          onClick={() => {
            if (setHeader) {
              setHeader(header);
            }
          }}
        >
          <$BtnText className={`${btnTextColor}Text`}>
            {btnText}
          </$BtnText>
        </$Btn>
      </Link>
    </$BtnWrapper>
  );
};

export default Button;
