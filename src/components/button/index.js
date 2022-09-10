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
      <$Btn
        className={`${btnColor} ${customBtnColor || ''}`}
        onClick={() => {
          redirect();

          if (setHeader) {
            setHeader(header);
          }
        }}
      >
        <$BtnText className={`${btnTextColor}Text ${customBtnTextColor || ''}`}>
          {btnText}
        </$BtnText>
      </$Btn>
    </$BtnWrapper>
  );
};

export default Button;
