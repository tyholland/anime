import Link from 'next/link.js';
import React from 'react';
import { $Btn, $BtnText, $BtnWrapper } from './button.style.js';

const Button = ({
  viewStyle,
  btnColor,
  btnText,
  customBtnColor,
  setHeader,
  header,
  btnTextColor,
  customBtnTextColor,
  redirect,
}) => {

  return (
    <$BtnWrapper className={viewStyle || ''}>
      <Link href={`/${redirect}`}>
        <$Btn
          className={`${btnColor} ${customBtnColor || ''}`}
          onClick={() => {
            if (setHeader) {
              setHeader(header);
            }
          }}
        >
          <$BtnText className={`${btnTextColor}Text ${customBtnTextColor || ''}`}>
            {btnText}
          </$BtnText>
        </$Btn>
      </Link>
    </$BtnWrapper>
  );
};

export default Button;
