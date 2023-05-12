import Link from 'next/link.js';
import React from 'react';
import { $Btn, $BtnText } from './button.style.js';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Button = ({
  btnColor,
  btnText,
  redirect,
  customBtnClass,
  btnFunction,
  isDisabled = false,
  children,
}) => {
  const handledBtnAction = () => {
    if (isDisabled) {
      return;
    }

    btnFunction();
  };

  if (btnFunction) {
    if (children) {
      return (
        <>
          <$Btn
            className={`${btnColor || ''} ${customBtnClass || ''} ${
              isDisabled ? 'disabled' : ''
            }`}
            onClick={handledBtnAction}
            data-tooltip-id={`btnTooltip-${btnText}`}
            data-tooltip-content="Please complete the required fields before proceeding"
            data-tooltip-variant="error"
          >
            {children}
          </$Btn>
          {!!isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" />}
        </>
      );
    }

    return (
      <>
        <$Btn
          className={`${btnColor || ''} ${customBtnClass || ''} ${
            isDisabled ? 'disabled' : ''
          }`}
          onClick={handledBtnAction}
          data-tooltip-id={`btnTooltip-${btnText}`}
          data-tooltip-content="Please complete the required fields before proceeding"
          data-tooltip-variant="error"
        >
          <$BtnText>{btnText}</$BtnText>
        </$Btn>
        {!!isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" />}
      </>
    );
  }

  return (
    <Link href={redirect}>
      <$Btn
        className={`${btnColor || ''} ${customBtnClass || ''}`}
      >
        <$BtnText>{btnText}</$BtnText>
      </$Btn>
    </Link>
  );
};

export default Button;
