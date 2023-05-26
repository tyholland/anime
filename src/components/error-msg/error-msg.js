import React from 'react';
import * as Styles from './errorMsg.style';

const ErrorMsg = ({ msg }) => {
  return <Styles.ErrorMsgWrapper>{msg}</Styles.ErrorMsgWrapper>;
};

export default ErrorMsg;
