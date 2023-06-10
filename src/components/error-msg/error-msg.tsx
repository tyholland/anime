import React from 'react';
import * as Styles from './errorMsg.style';
import { ErrorMsgProps } from 'Utils/types';

const ErrorMsg = ({ msg }: ErrorMsgProps) => {
  return <Styles.ErrorMsgWrapper>{msg}</Styles.ErrorMsgWrapper>;
};

export default ErrorMsg;
