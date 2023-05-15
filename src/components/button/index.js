import Link from 'next/link.js';
import React from 'react';
import { $Btn, $BtnText } from './button.style.js';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { COLOR_BLACK, COLOR_WHITE } from 'Styles/global.style.js';

const Button = ({
  btnColor,
  btnText,
  redirect,
  customBtnClass,
  btnFunction,
  isDisabled = false,
  children,
  disabledMsg = 'Currently inactive until futher notice'
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
            data-tooltip-content={disabledMsg}
          >
            {children}
          </$Btn>
          {isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }} />}
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
          data-tooltip-content={disabledMsg}
        >
          <$BtnText>{btnText}</$BtnText>
        </$Btn>
        {isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }} />}
      </>
    );
  }

  return (
    <>
      <Link href={isDisabled ? '#' : redirect}>
        <$Btn
          className={`${btnColor || ''} ${customBtnClass || ''} ${isDisabled ? 'disabled' : ''}`}
          data-tooltip-id={`btnTooltip-${btnText}`}
          data-tooltip-content={disabledMsg}
        >
          <$BtnText>{btnText}</$BtnText>
        </$Btn>
      </Link>
      {isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }} />}
    </>
  );
};

export default Button;
