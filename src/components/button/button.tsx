import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import * as Styles from './button.style';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { COLOR_BLACK, COLOR_WHITE } from 'Styles/global.style';
import { ButtonProps } from 'Utils/types';

const Button = ({
  btnColor,
  btnText,
  redirect,
  customBtnClass,
  btnFunction,
  isDisabled = false,
  children,
  disabledMsg = 'Currently inactive until futher notice'
}: PropsWithChildren<ButtonProps>) => {
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
          <Styles.Btn
            className={`${btnColor || ''} ${customBtnClass || ''} ${
              isDisabled ? 'disabled' : ''
            }`}
            onClick={handledBtnAction}
            data-tooltip-id={`btnTooltip-${btnText}`}
            data-tooltip-content={disabledMsg}
          >
            {children}
          </Styles.Btn>
          {isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }} />}
        </>
      );
    }

    return (
      <>
        <Styles.Btn
          className={`${btnColor || ''} ${customBtnClass || ''} ${
            isDisabled ? 'disabled' : ''
          }`}
          onClick={handledBtnAction}
          data-tooltip-id={`btnTooltip-${btnText}`}
          data-tooltip-content={disabledMsg}
        >
          <Styles.BtnText>{btnText}</Styles.BtnText>
        </Styles.Btn>
        {isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }} />}
      </>
    );
  }

  return (
    <>
      <Link href={isDisabled ? '#' : redirect}>
        <Styles.Btn
          className={`${btnColor || ''} ${customBtnClass || ''} ${isDisabled ? 'disabled' : ''}`}
          data-tooltip-id={`btnTooltip-${btnText}`}
          data-tooltip-content={disabledMsg}
        >
          <Styles.BtnText>{btnText}</Styles.BtnText>
        </Styles.Btn>
      </Link>
      {isDisabled && <Tooltip id={`btnTooltip-${btnText}`} place="bottom" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }} />}
    </>
  );
};

export default Button;
